# Instructions for Claude

Read `notes/writing-preferences.md` and `notes/candidate-performance-note.md` before
writing any CV, cover letter or application answer.

## Reviewing CVs

**Whenever a CV is generated or changed, open the HTML copy for Jessie to review.** After
`node build/build-all.cjs`, render each changed `dist/*.html` in the side panel
(SendUserFile with display "render"). Do not just give her a file path or a download
card. She reviews the rendered page before anything else happens.

**Always the HTML, even when she also asks for a PDF.** Render the HTML for review, and
attach the PDF as well when she asks for one. Never send a PDF in place of the HTML.

## Page fullness

`node build/build-all.cjs` reports how full each page is and flags anything under 85% as
"TOO EMPTY". **Never hand over a CV that is TOO EMPTY.** When bullets are cut or merged,
add back relevant evidence from the performance note until the page is about 88–92% full
and still one page.
