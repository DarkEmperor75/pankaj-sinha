# Deployment Guide

This guide covers deploying the personal website to GitHub Pages.

## Prerequisites

- GitHub account
- Git configured locally
- Node.js 18+ installed

## Initial Setup

### 1. Create GitHub Repository

1. Create a new repository on GitHub (public or private)
2. Note the repository name (e.g., `personal-website` or `username.github.io`)

### 2. Push Code to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push feature branch
git push -u origin feature/personal-website

# Merge to main (when ready)
git checkout main
git merge feature/personal-website
git push origin main
```

### 3. Configure GitHub Pages

1. Go to repository Settings → Pages
2. Under "Source", select **"GitHub Actions"**
3. The workflow will automatically deploy on push to `main` or `master` branch

## BasePath Configuration

### For `username.github.io` repositories

If your repository is named `username.github.io`, no basePath is needed. The site will be available at:
- `https://username.github.io`

### For other repository names

If your repository has a different name (e.g., `personal-website`), you need to configure basePath:

1. Update `next.config.js`:
```js
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name', // e.g., '/personal-website'
  images: {
    unoptimized: true,
  },
}
```

2. The site will be available at:
- `https://username.github.io/your-repo-name`

## Deployment Workflow

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:

1. Checkout the code
2. Install dependencies (`npm ci`)
3. Build the site (`npm run build`)
4. Deploy the `out/` directory to GitHub Pages

### Manual Deployment

If you need to deploy manually:

```bash
# Build the site
npm run build

# The static files will be in the `out/` directory
# You can manually upload these to GitHub Pages or use gh-pages CLI
```

## Verifying Deployment

1. After pushing to main, check the Actions tab in GitHub
2. Wait for the workflow to complete (usually 2-3 minutes)
3. Visit your GitHub Pages URL:
   - `https://username.github.io` (for username.github.io repos)
   - `https://username.github.io/repo-name` (for other repos)

## Troubleshooting

### Build fails in GitHub Actions

- Check the Actions tab for error messages
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Site not updating

- Clear browser cache
- Check GitHub Pages settings
- Verify the workflow completed successfully

### 404 errors on navigation

- Ensure `basePath` is correctly configured if using a subdirectory
- Check that `next.config.js` has `output: 'export'`
- Verify all routes are statically generated

### Images not loading

- Ensure `images.unoptimized: true` in `next.config.js`
- Check that images are in the `public/` directory
- Verify image paths are correct

## Custom Domain Setup

1. Add a `CNAME` file in the `public/` directory:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add a CNAME record pointing to `username.github.io`
   - Or add A records for GitHub Pages IPs

3. Enable custom domain in GitHub Pages settings

4. Wait for DNS propagation (can take up to 24 hours)

## Performance Optimization

The site is already optimized for GitHub Pages:
- Static export enabled
- Images unoptimized (required for static export)
- Code splitting and tree shaking
- Minified JavaScript and CSS

## Monitoring

- Check GitHub Actions for deployment status
- Monitor GitHub Pages build logs
- Use browser DevTools to verify performance

