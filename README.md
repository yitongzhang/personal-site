# Personal Blog

A minimal personal blog built with Next.js, Tailwind CSS, and Bun.

## Features

- 3 main sections: Writing, Work, and About
- Blog posts managed as Markdown files
- Clean, minimal design
- Static site generation for optimal performance

## Getting Started

Install dependencies:
```bash
bun install
```

Run the development server:
```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Adding Blog Posts

Create a new Markdown file in `content/posts/` with the following format:

```markdown
---
title: Your Post Title
date: 2024-03-15
---

Your post content here...
```

The blog will automatically pick up and display new posts.

## Build

Build the production site:
```bash
bun run build
```

Start the production server:
```bash
bun start
```

## Project Structure

- `app/` - Next.js app directory with pages
- `content/posts/` - Markdown blog posts
- `lib/posts.ts` - Utilities for reading and parsing posts
- `app/globals.css` - Global styles and Tailwind directives
