# Tianyang Che - Personal Website

A modern, clean personal website built with React and Vite, showcasing my work as an Engineer, Investor, and Entrepreneur.

## Technology Stack

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **React Router** - Client-side routing
- **Vanilla CSS** - Clean, simple styling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

This will create a `dist` folder with the production-ready files.

## Deployment to GitHub Pages

This site is configured to be deployed to GitHub Pages. You can use GitHub Actions or manually deploy:

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Copy the contents of the `dist` folder to your repository root (or use a separate branch)

3. Push to GitHub

### Using GitHub Actions (Recommended)

Create a `.github/workflows/deploy.yml` file with GitHub Actions workflow to automate deployment.

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── EngineerSection.jsx
│   │   ├── InvestorSection.jsx
│   │   └── EntrepreneurSection.jsx
│   ├── pages/         # Page components
│   │   ├── Home.jsx
│   │   └── Blog.jsx
│   ├── styles/        # Global styles
│   │   └── index.css
│   ├── App.jsx        # Main app component
│   └── main.jsx       # Entry point
├── index.html         # HTML template
├── vite.config.js     # Vite configuration
└── package.json       # Dependencies and scripts
```

## Assets

Images and other static assets should be placed in the `public/assets/` folder. They will be accessible at `/assets/...` in the built site.

The existing `assets/` folder from the previous Jekyll site contains images that are referenced in the components. You may need to copy or symlink necessary images to `public/assets/img/` for them to be included in the build, or ensure the `assets/` folder is accessible at the site root.

## Customization

### Update Personal Information

Edit the following files to update your information:
- `src/components/Hero.jsx` - Hero section
- `src/components/EngineerSection.jsx` - Work experience and education
- `src/components/InvestorSection.jsx` - Investment information
- `src/components/EntrepreneurSection.jsx` - Company information

### Styling

Global styles are in `src/styles/index.css`. Each component has its own CSS file for component-specific styles.

## License

All rights reserved © Tianyang Che
