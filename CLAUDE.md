# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js website for Mudget, a financial budgeting application. The site serves as a marketing landing page with blog functionality and uses a content management system powered by Velite for MDX blog posts.

## Key Technologies

- **Next.js 14** with App Router and TypeScript
- **Velite** - Content management for MDX blog posts
- **Tailwind CSS** with shadcn/ui components
- **Radix UI** - Accessible component primitives
- **PostHog** - Feature flags and analytics
- **MDX** - Blog content with enhanced markdown

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Process content (Velite)
npm run content

# Generate sitemap (runs automatically after build)
npm run postbuild
```

## Architecture

### Content Management
- Blog posts are stored as MDX files in `content/blogs/`
- Velite processes MDX files and generates type-safe content data
- Content schema defined in `velite.config.js` includes metadata, reading time, and TOC generation
- Generated content data is stored in `.velite/generated` and imported via `#site/content` alias

### Routing Structure
- `/` - Landing page with features, pricing (feature-flagged), and CTA
- `/blogs` - Blog listing page
- `/blogs/[slug]` - Individual blog post pages
- `/categories/[slug]` - Blog posts filtered by category
- `/about`, `/privacy`, `/terms` - Static pages

### Component Architecture
- **UI Components**: Located in `components/ui/` (shadcn/ui components)
- **Blog Components**: `components/Blog/` handles blog rendering and layouts
- **Home Components**: `components/Home/` for landing page sections
- **Layout**: Global navigation in `components/Nav.tsx`

### Key Patterns
- Feature flags controlled via PostHog (see `lib/flags.ts`)
- MDX rendering uses custom wrapper with prose styling
- Site metadata centralized in `utils/siteMetaData.ts`
- TypeScript paths: `@/*` for root, `#site/content` for Velite content

### Build Process
- Velite plugin in `next.config.js` processes content during webpack compilation
- Content processing happens before Next.js build
- Sitemap generation via next-sitemap after build
- Console logs removed in production via Next.js compiler

## Content Workflow

1. Create MDX files in `content/blogs/[post-name]/index.mdx`
2. Include frontmatter with required fields (title, description, publishedAt, etc.)
3. Run `npm run content` to process content or let webpack handle it during dev
4. Blog posts automatically appear on `/blogs` and generate individual pages

## Environment Variables

- `NEXT_PUBLIC_APP_URL` - URL for the main Mudget application (defaults to https://app.mudget.finance)
- PostHog configuration for feature flags and analytics