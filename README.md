# Personal Website

A personal website for Pankaj Kumar Sinha — creative technologist, optimization researcher, and system architect.

Built with Next.js, TypeScript, and TailwindCSS, hosted on GitHub Pages.

## Features

- 🏠 **Home**: Personal introduction and overview
- 🔬 **Research**: Academic papers and research interests
- ✍️ **Writing**: Blog posts and philosophical reflections
- 🚀 **Ventures**: Projects including Riti, CityConnect, iLag
- 📧 **Contact**: Contact form and information

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── src/
│   ├── pages/          # Next.js pages
│   ├── components/     # React components
│   └── styles/         # Global styles
├── public/             # Static assets
└── content/            # Markdown content (blog posts)
```

## Deployment

This site is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Setup for GitHub Pages

1. **Push to GitHub**: Push your code to a GitHub repository
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin feature/personal-website
   ```

2. **Merge to main branch**: Once ready, merge your feature branch to main
   ```bash
   git checkout main
   git merge feature/personal-website
   git push origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"
   - The workflow will automatically deploy on push to main/master

4. **Configure basePath (if needed)**:
   - If your repository is NOT named `username.github.io`, you need to set a basePath
   - Update `next.config.js`:
     ```js
     const nextConfig = {
       output: 'export',
       basePath: '/your-repo-name', // Add this line
       images: {
         unoptimized: true,
       },
     }
     ```
   - Update `package.json` scripts to include basePath:
     ```json
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start",
       "lint": "next lint",
       "export": "next build"
     }
     ```

### Local Testing

Test the production build locally:

```bash
npm run build
npx serve out
```

Visit `http://localhost:3000` to verify the build works correctly.

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file in the `public/` directory with your domain name
2. Configure DNS settings as per GitHub Pages documentation
3. The site will be available at your custom domain

## License

Private project - All rights reserved.

