#!/usr/bin/env node
// Regenerate every CV variant into dist/ as .docx, .html and .md.
//
//   npm install docx && node build/build-all.cjs
//
// Or, with docx installed elsewhere:
//   DOCX_PATH=/path/to/node_modules/docx node build/build-all.cjs
//
// If LibreOffice is on PATH, each .docx is rendered to PDF and the real page count is
// reported. Without it, the build falls back to estimating rendered lines, which is a
// rough proxy only.

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execFileSync } = require("child_process");
const { writeDocx, writeHtml, writeMd, estimateLines } = require("./lib.cjs");

const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
fs.mkdirSync(DIST, { recursive: true });

function has(cmd) {
  try { execFileSync("which", [cmd], { stdio: "ignore" }); return true; } catch { return false; }
}

// Real page count via LibreOffice, or null if the tooling is not available.
function pageCount(docxPath, tmp) {
  if (!has("soffice") || !has("pdfinfo")) return null;
  try {
    execFileSync("soffice", ["--headless", "--convert-to", "pdf", "--outdir", tmp, docxPath], { stdio: "ignore" });
    const pdf = path.join(tmp, path.basename(docxPath).replace(/\.docx$/, ".pdf"));
    const info = execFileSync("pdfinfo", [pdf], { encoding: "utf8" });
    const m = info.match(/^Pages:\s+(\d+)/m);
    return m ? Number(m[1]) : null;
  } catch { return null; }
}

const variants = fs.readdirSync(path.join(__dirname, "data"))
  .filter((f) => f.endsWith(".cjs") && f !== "common.cjs")
  .map((f) => require(path.join(__dirname, "data", f)));

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "cv-pdf-"));
  let rendered = false;

  for (const cv of variants) {
    const base = path.join(DIST, `Jessie-Chan-CV-${cv.slug}`);
    await writeDocx(cv, `${base}.docx`);
    writeHtml(cv, `${base}.html`);
    writeMd(cv, `${base}.md`);

    const pages = pageCount(`${base}.docx`, tmp);
    let status;
    if (pages !== null) {
      rendered = true;
      status = pages === 1 ? "1 page" : `${pages} PAGES - needs a cut`;
    } else {
      const { asWritten, filled } = estimateLines(cv);
      const note = asWritten === filled ? "" : ` (${asWritten} with [ADD:] notes in)`;
      status = `~${filled} lines, estimated only${note}`;
    }
    console.log(`${cv.slug.padEnd(24)} ${status.padEnd(34)} ${cv.label}`);
  }

  fs.rmSync(tmp, { recursive: true, force: true });
  if (!rendered) {
    console.log("\nLibreOffice not found, so one-page fit is estimated. Open each .docx and confirm.");
  }
})();
