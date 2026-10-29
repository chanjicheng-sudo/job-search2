// Shared renderer for every CV variant.
//
// One data file per variant in build/data/. Each renders to .docx, .html and .md so the
// three copies cannot drift apart. The .docx is the submission copy, the .html is for
// pasting into Google Docs with formatting intact, the .md is readable on any device.
//
// ATS-plain by construction: no tables, no text boxes, no columns, no header/footer
// content, real bullet-list numbering, standard fonts.

const path = require("path");
const fs = require("fs");

const DOCX = process.env.DOCX_PATH || "docx";
const {
  Document, Packer, Paragraph, TextRun, AlignmentType,
  BorderStyle, TabStopType, LevelFormat, convertInchesToTwip,
} = require(DOCX);

const BODY = 20;   // 10pt, in half-points
const SMALL = 18;  // 9pt
const NAME = 32;   // 16pt
const FONT = "Calibri";

// A4 width (11906 dxa) minus left and right margins, so dates sit flush right.
const RIGHT_TAB = 11906 - 720 - 720;

const t = (text, opts = {}) =>
  new TextRun({ text, font: FONT, size: opts.size || BODY, bold: !!opts.bold, italics: !!opts.italics });

// A bullet is a plain string, or { text, bold: true } for a bullet that should stand out.
const bullet = (b) => (typeof b === "string" ? { text: b, bold: false } : b);

// ---------------------------------------------------------------- docx

function docxParagraphs(cv) {
  const out = [];

  out.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 40 },
    children: [t(cv.name, { bold: true, size: NAME })],
  }));

  out.push(new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 140 },
    children: [t(cv.contact, { size: SMALL })],
  }));

  out.push(new Paragraph({ spacing: { after: 160 }, children: [t(cv.profile)] }));

  for (const section of cv.sections) {
    out.push(new Paragraph({
      spacing: { before: 120, after: 80 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "999999", space: 2 } },
      children: [t(section.heading, { bold: true })],
    }));

    for (const role of section.roles || []) {
      // A real tab character, so ATS parsers see whitespace between the org and the dates.
      out.push(new Paragraph({
        spacing: { before: 100, after: 10 },
        tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
        children: [t(role.org, { bold: true }), t("\t"), t(role.dates, { bold: true })],
      }));
      if (role.sub) {
        out.push(new Paragraph({ spacing: { after: 60 }, children: [t(role.sub, { italics: true })] }));
      }
      for (const b of role.bullets.map(bullet)) {
        out.push(new Paragraph({
          numbering: { reference: "cv-bullets", level: 0 },
          spacing: { after: 50 },
          children: [t(b.text, { bold: b.bold })],
        }));
      }
    }

    for (const e of section.entries || []) {
      out.push(new Paragraph({
        spacing: { before: 90, after: 10 },
        tabStops: [{ type: TabStopType.RIGHT, position: RIGHT_TAB }],
        children: [t(e.title, { bold: true }), t("\t"), t(e.dates, { bold: true })],
      }));
      if (e.detail) out.push(new Paragraph({ spacing: { after: 40 }, children: [t(e.detail)] }));
    }

    for (const s of section.skills || []) {
      out.push(new Paragraph({
        spacing: { after: 60 },
        children: [t(s.label + ": ", { bold: true }), t(s.text)],
      }));
    }

    // One dense paragraph with bold inline labels. Saves vertical space and parses the
    // same for an ATS, which is why it is preferred over one line per category.
    if (section.skillsBlock) {
      const runs = [];
      section.skillsBlock.forEach((s, i) => {
        runs.push(t(s.label + ": ", { bold: true }));
        runs.push(t(s.text + (i < section.skillsBlock.length - 1 ? "; " : "")));
      });
      out.push(new Paragraph({ spacing: { after: 60 }, children: runs }));
    }
  }

  return out;
}

function writeDocx(cv, outPath) {
  const doc = new Document({
    numbering: {
      config: [{
        reference: "cv-bullets",
        levels: [{
          level: 0,
          format: LevelFormat.BULLET,
          text: "•",
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: convertInchesToTwip(0.22), hanging: convertInchesToTwip(0.16) } } },
        }],
      }],
    },
    sections: [{
      properties: { page: { margin: { top: 640, bottom: 640, left: 720, right: 720 } } },
      children: docxParagraphs(cv),
    }],
  });
  return Packer.toBuffer(doc).then((buf) => fs.writeFileSync(outPath, buf));
}

// ---------------------------------------------------------------- html

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Highlight [ADD: ...] placeholders. Highlighting survives a paste into Google Docs, so
// they cannot be submitted by accident.
const mark = (s) =>
  esc(s).replace(/\[ADD:[^\]]*\]/g, (m) => `<span style="background-color:#fff2a8;">${m}</span>`);

function writeHtml(cv, outPath) {
  const P = [];
  P.push(`<h1 style="font-family:Calibri,Arial,sans-serif;font-size:21px;font-weight:bold;text-align:center;margin:0 0 4px 0;letter-spacing:0.5px;">${esc(cv.name)}</h1>`);
  P.push(`<p style="font-family:Calibri,Arial,sans-serif;font-size:11px;text-align:center;margin:0 0 14px 0;">${esc(cv.contact)}</p>`);
  P.push(`<p style="margin:0 0 14px 0;">${mark(cv.profile)}</p>`);

  for (const section of cv.sections) {
    P.push(`<p style="font-weight:bold;border-bottom:1px solid #999;margin:14px 0 8px 0;padding-bottom:2px;">${esc(section.heading)}</p>`);

    for (const role of section.roles || []) {
      P.push(`<p style="margin:10px 0 2px 0;"><b>${esc(role.org)} &mdash; ${esc(role.dates)}</b></p>`);
      if (role.sub) P.push(`<p style="margin:0 0 6px 0;font-style:italic;">${esc(role.sub)}</p>`);
      P.push(`<ul style="margin:0 0 0 18px;padding:0;">`);
      for (const b of role.bullets.map(bullet)) {
        P.push(`<li style="margin-bottom:5px;">${b.bold ? `<b>${mark(b.text)}</b>` : mark(b.text)}</li>`);
      }
      P.push(`</ul>`);
    }

    for (const e of section.entries || []) {
      P.push(`<p style="margin:9px 0 2px 0;"><b>${esc(e.title)} &mdash; ${esc(e.dates)}</b></p>`);
      if (e.detail) P.push(`<p style="margin:0 0 4px 0;">${mark(e.detail)}</p>`);
    }

    for (const s of section.skills || []) {
      P.push(`<p style="margin:0 0 6px 0;"><b>${esc(s.label)}:</b> ${mark(s.text)}</p>`);
    }

    if (section.skillsBlock) {
      const inner = section.skillsBlock
        .map((s) => `<b>${esc(s.label)}:</b> ${mark(s.text)}`)
        .join("; ");
      P.push(`<p style="margin:0 0 6px 0;">${inner}</p>`);
    }
  }

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(cv.name)} &mdash; CV</title>
</head>
<body style="font-family:Calibri,Arial,sans-serif;font-size:13px;line-height:1.4;color:#000;max-width:760px;margin:24px auto;padding:0 16px;">
${P.join("\n")}
</body>
</html>
`;
  fs.writeFileSync(outPath, html);
}

// ---------------------------------------------------------------- markdown

function writeMd(cv, outPath) {
  const L = [];
  L.push(`# ${cv.name}`, "", cv.contact, "", cv.profile, "");
  for (const section of cv.sections) {
    L.push(`## ${section.heading}`, "");
    for (const role of section.roles || []) {
      L.push(`**${role.org}** — ${role.dates}`);
      if (role.sub) L.push(`*${role.sub}*`);
      L.push("");
      for (const b of role.bullets.map(bullet)) L.push(b.bold ? `- **${b.text}**` : `- ${b.text}`);
      L.push("");
    }
    for (const e of section.entries || []) {
      L.push(`**${e.title}** — ${e.dates}`);
      if (e.detail) L.push(e.detail);
      L.push("");
    }
    for (const s of section.skills || []) L.push(`**${s.label}:** ${s.text}`, "");
    if (section.skillsBlock) {
      L.push(section.skillsBlock.map((s) => `**${s.label}:** ${s.text}`).join("; "), "");
    }
  }
  fs.writeFileSync(outPath, L.join("\n").replace(/\n{3,}/g, "\n\n"));
}

// ---------------------------------------------------------------- lines proxy

// No LibreOffice here, so one-page fit cannot be rendered-verified. Counting the lines a
// reader would see is the next best proxy: at 10pt on A4 with these margins, roughly 46
// rendered lines fit, and long bullets wrap to two or three.
// Counted twice: as written, and with the [ADD:] instruction text stripped, which
// approximates the length once the placeholders are filled in with real figures.
function estimateLines(cv) {
  const CHARS_PER_LINE = 118;
  const strip = (s) => s.replace(/\s*\[ADD:[^\]]*\]/g, "");

  const count = (clean) => {
    const f = clean ? strip : (s) => s;
    const wrap = (s) => Math.max(1, Math.ceil(f(s).length / CHARS_PER_LINE));
    let n = 2; // name, contact
    n += wrap(cv.profile);
    for (const section of cv.sections) {
      n += 1;
      for (const role of section.roles || []) {
        n += 1 + (role.sub ? 1 : 0);
        for (const b of role.bullets.map(bullet)) n += wrap(b.text);
      }
      for (const e of section.entries || []) n += 1 + (e.detail ? wrap(e.detail) : 0);
      for (const s of section.skills || []) n += wrap(`${s.label}: ${s.text}`);
      if (section.skillsBlock) {
        n += wrap(section.skillsBlock.map((s) => `${s.label}: ${s.text}`).join("; "));
      }
    }
    return n;
  };

  return { asWritten: count(false), filled: count(true) };
}

module.exports = { writeDocx, writeHtml, writeMd, estimateLines };
