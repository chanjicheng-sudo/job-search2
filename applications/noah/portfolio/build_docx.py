"""Build an editable Word version of portfolio.html that keeps its look.

Run from this folder: python3 build_docx.py
"""
from bs4 import BeautifulSoup, NavigableString, Tag
from docx import Document
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_BREAK, WD_COLOR_INDEX
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Cm, Pt, RGBColor
from PIL import Image

SRC = "portfolio.html"
OUT = "Jessie-Chan-Portfolio-Noah.docx"
FONT = "Calibri"
GREY = RGBColor(0x55, 0x55, 0x55)
BLUE = RGBColor(0x1A, 0x56, 0xDB)
CONTENT_W = 17.8  # cm, A4 minus 16 mm margins

doc = Document()
sec = doc.sections[0]
sec.page_width, sec.page_height = Cm(21.0), Cm(29.7)
sec.left_margin = sec.right_margin = Cm(1.6)
sec.top_margin, sec.bottom_margin = Cm(1.6), Cm(1.8)

normal = doc.styles["Normal"]
normal.font.name = FONT
normal.font.size = Pt(11)
normal.element.rPr.rFonts.set(qn("w:eastAsia"), FONT)
normal.paragraph_format.space_after = Pt(6)
normal.paragraph_format.line_spacing = 1.15


def bottom_border(par):
    pPr = par._p.get_or_add_pPr()
    bdr = OxmlElement("w:pBdr")
    b = OxmlElement("w:bottom")
    for k, v in (("w:val", "single"), ("w:sz", "12"), ("w:space", "2"), ("w:color", "111111")):
        b.set(qn(k), v)
    bdr.append(b)
    pPr.append(bdr)


def add_hyperlink(par, url, text, bold=False):
    r_id = par.part.relate_to(url, "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink", is_external=True)
    h = OxmlElement("w:hyperlink")
    h.set(qn("r:id"), r_id)
    r = OxmlElement("w:r")
    rPr = OxmlElement("w:rPr")
    fonts = OxmlElement("w:rFonts")
    fonts.set(qn("w:ascii"), FONT)
    fonts.set(qn("w:hAnsi"), FONT)
    rPr.append(fonts)
    c = OxmlElement("w:color")
    c.set(qn("w:val"), "1A56DB")
    rPr.append(c)
    u = OxmlElement("w:u")
    u.set(qn("w:val"), "single")
    rPr.append(u)
    if bold:
        rPr.append(OxmlElement("w:b"))
    r.append(rPr)
    t = OxmlElement("w:t")
    t.text = text
    t.set(qn("xml:space"), "preserve")
    r.append(t)
    h.append(r)
    par._p.append(h)


def add_inline(par, node, bold=False, size=None, color=None, highlight=False):
    """Write a tag's children into a paragraph, keeping bold, links and highlights."""
    for child in node.children:
        if isinstance(child, NavigableString):
            import re as _re
            text = _re.sub(r"\s+", " ", str(child))
            if not text.strip() and text != " ":
                continue
            run = par.add_run(text)
            run.bold = bold or None
            if size:
                run.font.size = Pt(size)
            if color:
                run.font.color.rgb = color
            if highlight:
                run.font.highlight_color = WD_COLOR_INDEX.YELLOW
                run.bold = True
        elif isinstance(child, Tag):
            if child.name == "b":
                add_inline(par, child, True, size, color, highlight)
            elif child.name == "a":
                add_hyperlink(par, child.get("href"), " ".join(child.get_text().split()), bold)
            elif child.name == "span" and "placeholder" in (child.get("class") or []):
                add_inline(par, child, bold, size, color, True)
            else:
                add_inline(par, child, bold, size, color, highlight)


def para(node, style_size=None, color=None, space_after=6):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(space_after)
    hl = "placeholder" in (node.get("class") or [])
    add_inline(p, node, size=style_size, color=color, highlight=hl)
    return p


def picture_cell(cell, img_src, width_cm, caption):
    p = cell.paragraphs[0]
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.add_run().add_picture(img_src, width=Cm(width_cm))
    if caption is not None:
        cp = cell.add_paragraph()
        cp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        add_inline(cp, caption, size=9, color=GREY)


def image_width(img_src, max_w, max_h_cm=None):
    w = max_w
    if max_h_cm:
        im = Image.open(img_src)
        h = w * im.height / im.width
        if h > max_h_cm:
            w = max_h_cm * im.width / im.height
    return w


def figure(node, max_w=CONTENT_W, max_h_cm=None):
    img = node.find("img")
    style = img.get("style", "")
    if "max-height:330px" in style:
        max_h_cm = 11
    if "max-height:400px" in style:
        max_h_cm = 13
    if "max-height:520px" in style:
        max_h_cm = 17
    w = image_width(img["src"], max_w, max_h_cm)
    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.paragraph_format.keep_with_next = True
    p.add_run().add_picture(img["src"], width=Cm(w))
    cap = node.find("figcaption")
    if cap:
        cp = doc.add_paragraph()
        cp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        add_inline(cp, cap, size=9, color=GREY)


def image_grid(node, cols, max_h_cm):
    figs = node.find_all("figure")
    t = doc.add_table(rows=1, cols=cols)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell_w = CONTENT_W / cols - 0.3
    for i, f in enumerate(figs):
        img = f.find("img")["src"]
        picture_cell(t.rows[0].cells[i], img, image_width(img, cell_w, max_h_cm), f.find("figcaption"))
    doc.add_paragraph().paragraph_format.space_after = Pt(2)


soup = BeautifulSoup(open(SRC, encoding="utf-8").read(), "html.parser")
for el in soup.body.children:
    if not isinstance(el, Tag):
        continue
    cls = el.get("class") or []
    if "pb" in cls:
        doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)
    if el.name == "h1":
        p = doc.add_paragraph()
        p.paragraph_format.space_after = Pt(0)
        r = p.add_run(el.get_text())
        r.bold, r.font.size = True, Pt(22)
    elif el.name == "h2":
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(16)
        p.paragraph_format.space_after = Pt(6)
        p.paragraph_format.keep_with_next = True
        r = p.add_run(el.get_text())
        r.bold, r.font.size = True, Pt(15)
        bottom_border(p)
    elif el.name == "h3":
        p = doc.add_paragraph()
        p.paragraph_format.space_before = Pt(10)
        p.paragraph_format.space_after = Pt(3)
        p.paragraph_format.keep_with_next = True
        r = p.add_run(el.get_text())
        r.bold, r.font.size = True, Pt(12)
    elif el.name == "p" and "sub" in cls:
        para(el, style_size=10, color=GREY, space_after=12)
    elif el.name == "p":
        para(el, style_size=10 if "links" in cls else None)
    elif el.name == "ul":
        for li in el.find_all("li", recursive=False):
            p = doc.add_paragraph(style="List Bullet")
            p.paragraph_format.space_after = Pt(4)
            add_inline(p, li, size=10 if "links" in cls else None)
    elif el.name == "figure":
        figure(el)
    elif el.name == "div" and "pair" in cls:
        image_grid(el, 2, 9.5)
    elif el.name == "div" and "quad" in cls:
        image_grid(el, 4, 9.0)

doc.save(OUT)
print("saved", OUT)
