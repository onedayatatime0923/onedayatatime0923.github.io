# Kevin Chang CV

This directory contains the LaTeX source and generated PDF for the downloadable CV served by the website.

## Build

```bash
cd files/cv
latexmk -xelatex resume.tex
```

The command updates `resume.pdf`, which is the file linked from the website.

## Files

- `resume.tex`: top-level CV document.
- `resume/`: section-level CV content.
- `resume.pdf`: generated CV linked from the website.
- `awesome-cv.cls` and `fonts/`: local template dependencies.

The CV is based on the Awesome CV LaTeX template.
