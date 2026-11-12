# Job search — Ji Cheng (Jessie) Chan

Everything from the CV and application sessions, in one place that opens from any device.

Start with **[OPEN-QUESTIONS.md](OPEN-QUESTIONS.md)** — the decisions and missing figures
that matter most, ordered by impact.

## What is here

```
notes/
  candidate-performance-note.md   Canonical record of every contribution and figure.
                                  Nothing goes in a document that is not backed by a
                                  line in here.
  writing-preferences.md          Her voice, the CV rules, the LinkedIn rules, and the
                                  integrity checks. Read before writing anything.
  early-growth-hire.md            What the term means and why it favours her profile.

dist/                             The CVs. Four variants, each as .docx (submission
                                  copy), .html (paste into Google Docs with formatting
                                  intact) and .md (readable anywhere). All four verified
                                  to fit on one page.

build/                            Source for the CVs. One data file per variant, one
                                  shared renderer. See "Rebuilding" below.

applications/
  plasma/     jd-read, product-notes, brand-notes, and three finished answers
  kraken/     jd-read
  bvnk/       jd-read

linkedin/profile-copy.md          Headline options, About, and role highlights for both
                                  roles.
```

## The CV variants

| Variant | For | Leads with |
|---|---|---|
| `plasma` | Plasma, Growth / Paid Acquisition | Structured testing, then install scaling |
| `crypto-growth-general` | Send-around copy, no JD slant | Paid scaling across all 7 contribution themes |
| `kraken-qa-ops` | Kraken / Payward, QA & Operations | Test design, then daily monitoring |
| `bvnk-pmm` | BVNK, Product Marketing Manager | Perps research and 5x volume, then Malaysia loans |
| `capitalcom-pmm` | Capital.com, Senior Product Marketing Manager | Perps retention (derivatives), then the Earn rebrand |

`plasma` is her own final edit, kept verbatim — four items were flagged on it and not
actioned, listed in OPEN-QUESTIONS.md. `crypto-growth-general` is as generated.
`kraken-qa-ops` and `bvnk-pmm` were rebuilt from their documented structure rather than
restored byte-for-byte, so the bullet wording is new even though the facts and the
ordering are not.

## Rebuilding

```bash
npm install docx && node build/build-all.cjs
```

Edit a file in `build/data/` and re-run. Every variant regenerates into `dist/` as
.docx, .html and .md from the same source, so the three copies cannot drift apart —
which is what went wrong when the .docx and the .html were maintained by hand.

The build renders each .docx to PDF and reports the real page count, so one-page fit is
verified rather than guessed. **All four currently fit on one page**, with room to spare,
even with the placeholder text still in. If LibreOffice is not on PATH the build falls
back to estimating rendered lines and says so.

`[ADD: ...]` placeholders are instructions to her, highlighted in the HTML so they cannot
be submitted by accident. Delete them before sending. The line estimate is reported with
them stripped, since the figures that replace them are shorter.

## Conventions

UK English. One page. ATS-plain: no tables, no text boxes, no columns, no header or footer
content, real bullet-list numbering, standard fonts. Dates right-aligned in the .docx via
a real tab character and a right tab stop — a positional tab emits no character and makes
an ATS read "United KingdomMay 2026".

For Google Docs: open the .html in a browser, select all, copy, paste into a blank doc.
Then File → Page setup → Pages tab → 1.27 cm margins all round.
