# TACO (TACO's A Client-side Orchestrator)

TACO is the simplest possible client-side content management system. It
orchestrates content entirely in the browser using static assets, so no
server-side component is required.

## Developer Guide

### Configure

1. Clone this repository.
2. Add your content files (HTML or Markdown) to a `content/` directory.
3. Describe navigation and site metadata in a `config.json` file in the
   project root. The client reads this file to build the site.

### Local Development

Serve the directory with any static web server. For example:

```bash
npm install -g serve
serve .
```

Then open the printed local URL in your browser.

### Deployment

Deploy by uploading the static files to any static hosting provider such
as GitHub Pages, Netlify, Vercel, or your own web server. Since TACO is
purely client-side, no special build or runtime infrastructure is
required.

