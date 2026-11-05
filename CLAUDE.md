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

`node build/build-all.cjs` reports how full each page is and flags anything under 80% as
"TOO EMPTY". **Never hand over a CV that is TOO EMPTY.** Around 80% is fine. Do not stuff
the page with weak or irrelevant bullets to fill it. When a CV drops below 80%, add back
only evidence that is relevant to that job ad.
