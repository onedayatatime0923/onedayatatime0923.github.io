# Kevin Chiaming Chang — Research Portfolio

Personal research portfolio for Kevin Chiaming Chang, built with Jekyll and hosted on GitHub Pages.

Live site: <https://onedayatatime0923.github.io>

## Overview

The site presents:

- a concise research narrative around formal verification and learning-enabled control
- selected journal and conference publications with direct paper and DOI links
- a downloadable, source-controlled LaTeX CV
- academic, professional, and contact profiles

It is based on Academic Pages / Minimal Mistakes with a custom Berkeley-inspired visual system.

## Repository Structure

- `_pages/`: homepage, publications index, 404 page, and sitemap
- `_publications/`: structured publication entries and individual paper overviews
- `_data/`: structured site data, including the masthead navigation
- `_includes/` and `_layouts/`: shared Jekyll templates
- `_sass/` and `assets/`: stylesheets, JavaScript, fonts, and images
- `files/`: downloadable assets served directly by the site
- `files/cv/`: LaTeX source and generated PDF for the CV

## Local Development

### Prerequisites

- Ruby and Bundler
- Node.js and npm

### Install dependencies

```bash
bundle install
npm install
```

If Bundler hits a system permission error, install gems into the repo instead:

```bash
bundle config set --local path 'vendor/bundle'
bundle install
```

### Run the site locally

```bash
bundle exec jekyll serve -l -H localhost
```

The site will be available at <http://localhost:4000>.

Note: changes to `_config.yml` require restarting the Jekyll server.

## Common Tasks

### Update navigation

Edit `_data/navigation.yml`.

### Add or edit publications

Create or update Markdown files in `_publications/`. Keep the structured front matter—authors, venue, publication type, summary, paper URL, and DOI—aligned with the paper's canonical record.

### Replace the downloadable CV

Update `files/cv/resume.pdf`.

The site header CV tab is configured to download this file directly.

### Edit the CV source

The LaTeX source lives in `files/cv/resume.tex`, with section files under `files/cv/resume/`.

Build it with:

```bash
cd files/cv
latexmk -xelatex resume.tex
```

## JavaScript Build

If you modify files under `assets/js/`, rebuild the minified bundle with:

```bash
npm run build:js
```

For continuous rebuilding during frontend work:

```bash
npm run watch:js
```

## Deployment

This repository is deployed to GitHub Pages from the default branch.

Push changes to GitHub, then verify the published site at:

<https://onedayatatime0923.github.io>
