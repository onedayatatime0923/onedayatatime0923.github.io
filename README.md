# Kevin Chiaming Chang Website

Personal academic website for Kevin Chiaming Chang, built with Jekyll and hosted on GitHub Pages.

Live site: <https://onedayatatime0923.github.io>

## Overview

This repository contains a research portfolio site focused on:

- publications
- research summary and biography
- downloadable CV
- contact and profile links

The site is based on Academic Pages / Minimal Mistakes, but has been customized for a simpler personal academic profile.

## Repository Structure

- `_pages/`: top-level pages such as the homepage, publications page, and CV page
- `_publications/`: publication entries rendered into the publications section
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

Edit [`_data/navigation.yml`](/home/kevin/Github/onedayatatime0923.github.io/_data/navigation.yml).

### Add or edit publications

Create or update markdown files in [`_publications/`](/home/kevin/Github/onedayatatime0923.github.io/_publications).

### Replace the downloadable CV

Update the PDF at [`files/cv/resume.pdf`](/home/kevin/Github/onedayatatime0923.github.io/files/cv/resume.pdf).

The site header CV tab is configured to download this file directly.

### Edit the CV source

The LaTeX source for the CV lives in [`files/cv/resume.tex`](/home/kevin/Github/onedayatatime0923.github.io/files/cv/resume.tex) and the supporting section files under [`files/cv/resume/`](/home/kevin/Github/onedayatatime0923.github.io/files/cv/resume).

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

This repository is intended for GitHub Pages deployment from the default branch.

Push changes to GitHub, then verify the published site at:

<https://onedayatatime0923.github.io>
