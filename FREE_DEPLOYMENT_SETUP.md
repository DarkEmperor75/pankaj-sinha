# Free Deployment Setup - Remove "darkemperor75" from URL

## Step 1: Create New GitHub Account

1. Go to: https://github.com/signup
2. Create account with username: `pankajsinha` (or `pankaj-sinha`, `pankajksinha`, etc.)
   - Check availability first: https://github.com/pankajsinha
   - If taken, try variations: `pankaj-sinha`, `pankajksinha`, `pankajkumarsinha`

## Step 2: Create Repository

1. After creating account, go to: https://github.com/new
2. Repository name: `pankajsinha.github.io` (MUST match username exactly)
3. Make it Public (required for free GitHub Pages)
4. DO NOT initialize with README
5. Click "Create repository"

## Step 3: Update Local Configuration

I'll update your config to remove basePath (not needed for username.github.io repos):

## Step 4: Push to New Repository

```bash
# Add new remote
git remote add new-origin https://github.com/pankajsinha/pankajsinha.github.io.git

# Push to new repository
git push new-origin main

# Set as default remote
git remote set-url origin https://github.com/pankajsinha/pankajsinha.github.io.git
git remote remove new-origin
```

## Step 5: Enable GitHub Pages

1. Go to repository Settings → Pages
2. Source: "GitHub Actions" (should auto-deploy)
3. Your site: `https://pankajsinha.github.io`

## Your New URL

✅ `https://pankajsinha.github.io` (no "darkemperor75"!)

## Cost: $0 (Completely Free!)

