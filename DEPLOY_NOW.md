# Quick Deployment Guide

Follow these steps to deploy your website to GitHub Pages:

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository:
   - **Repository name**: `personal-website` (or your preferred name)
   - **Visibility**: Public or Private (both work with GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
3. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/personal-website.git

# Push your code
git push -u origin feature/personal-website

# Create and switch to main branch
git checkout -b main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"**
4. The workflow will automatically deploy when you push to main

## Step 4: Configure BasePath (if needed)

**Only if your repository is NOT named `username.github.io`:**

1. Edit `next.config.js`
2. Uncomment and set the basePath:
   ```js
   basePath: '/personal-website', // Replace with your repo name
   ```
3. Commit and push:
   ```bash
   git add next.config.js
   git commit -m "Configure basePath for GitHub Pages"
   git push origin main
   ```

## Step 5: Wait for Deployment

1. Go to **Actions** tab in your repository
2. Watch the workflow run (takes 2-3 minutes)
3. Once complete, your site will be live!

## Your Site URL

- If repo is `username.github.io`: `https://username.github.io`
- If repo is `personal-website`: `https://username.github.io/personal-website`

## Troubleshooting

- **Workflow fails**: Check the Actions tab for error messages
- **404 errors**: Make sure basePath is configured correctly
- **Site not updating**: Clear browser cache or wait a few minutes

## Custom Domain Note

**Important**: `.sinha` is not a valid top-level domain (TLD). 

If you want a custom domain, you need a valid TLD like:
- `pankajsinha.com`
- `pankaj-sinha.dev`
- `pankajsinha.io`
- etc.

See `CUSTOM_DOMAIN_SETUP.md` for detailed instructions on setting up a custom domain.

For now, you can use your GitHub Pages URL: `https://YOUR_USERNAME.github.io`

