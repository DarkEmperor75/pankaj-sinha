# Repository Rename Instructions

## Step 1: Rename Repository on GitHub

1. Go to your repository: https://github.com/DarkEmperor75/personal-website
2. Click **Settings** (top right of the repository page)
3. Scroll down to **Repository name** section
4. Change the name from `personal-website` to `pankaj-sinha` (or your preferred name)
5. Click **Rename**

## Step 2: Update Remote URL

After renaming, update your local git remote:

```bash
git remote set-url origin https://github.com/DarkEmperor75/pankaj-sinha.git
```

## Step 3: Verify Configuration

The following files have been updated:
- ✅ `next.config.js` - basePath set to `/pankaj-sinha`
- ✅ `package.json` - name updated to `pankaj-sinha`

## Step 4: Push Changes

```bash
git add next.config.js package.json
git commit -m "Update repository name to pankaj-sinha"
git push origin main
```

## Your New Site URL

After renaming and deployment:
```
https://darkemperor75.github.io/pankaj-sinha/
```

## Important Notes

- The basePath in `next.config.js` must match your repository name exactly
- After renaming, GitHub Pages will automatically update
- The old URL will redirect to the new one for a period of time
- Make sure to update any bookmarks or links to the new URL

