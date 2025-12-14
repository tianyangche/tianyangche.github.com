# Cleanup Notes

This document tracks the cleanup of unused Jekyll files after migrating to React + Vite.

## Removed Files/Directories (Jekyll-specific, no longer needed)

- `_layouts/` - Replaced by React components
- `_includes/` - Replaced by React components  
- `_sass/` - Replaced by modern CSS in src/styles/
- `_data/` - Data now in React components
- `Gemfile`, `Gemfile.lock` - Jekyll dependencies (using npm now)
- `bower.json` - Old package manager (using npm now)
- `devlopr.gemspec` - Jekyll theme gem
- `Rakefile` - Jekyll build tasks
- `config.ru` - Rack config for Jekyll
- Docker files: `docker-compose-dev.yml`, `docker-compose-prod.yml`, `Dockerfile`
- `nginx/` - Old deployment config
- `admin/` - Netlify CMS config for Jekyll
- `categories/`, `tags/` - Jekyll taxonomies
- `gallery/` - Old gallery feature
- `_products/` - Old products feature
- Old Jekyll pages: `about.md`, `contact.md`, `404.md`, `styleguide.md`, `shop.md`, `install.md`, `search.md`
- `blog/index.html` - Old Jekyll blog index
- `firebase.json` - Old Firebase config
- `.swp`, `.swo` files - Vim swap files

## Kept (Still Useful)

- `assets/` - Images and media (still referenced)
- `_posts/` - Old blog posts (may want to migrate content)
- `_config.yml` - Keeping for reference (contains useful metadata)
- `CNAME` - Domain configuration
- `.gitignore` - Still needed
- Documentation files: `README.md`, `LICENSE`, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`
- Screenshots - May be useful for reference
