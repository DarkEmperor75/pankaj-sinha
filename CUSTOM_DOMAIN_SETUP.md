# Custom Domain Setup Guide

## Important: Valid Domain Requirements

GitHub Pages requires a **valid top-level domain (TLD)**. Examples of valid TLDs:
- `.com`, `.org`, `.net`, `.io`, `.dev`, `.me`, `.co`, `.in`, `.tech`, etc.

**Invalid**: `pankaj.sinha` (`.sinha` is not a valid TLD)

## Option 1: Use a Valid Domain You Own

If you have a domain like:
- `pankajsinha.com`
- `pankaj-sinha.com`
- `pankajsinha.dev`
- `pankajsinha.io`
- `pankajsinha.in`
- etc.

### Setup Steps:

1. **Create CNAME file** in `public/` directory:
   ```
   yourdomain.com
   ```
   (Replace `yourdomain.com` with your actual domain)

2. **Configure DNS** at your domain registrar:
   
   **For apex domain (e.g., `pankajsinha.com`):**
   - Add **A records** pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   
   **For subdomain (e.g., `www.pankajsinha.com`):**
   - Add **CNAME record** pointing to: `YOUR_USERNAME.github.io`

3. **Enable in GitHub**:
   - Go to repository **Settings** → **Pages**
   - Under **Custom domain**, enter your domain
   - Check **"Enforce HTTPS"** (after DNS propagates)

4. **Wait for DNS propagation** (can take up to 24-48 hours)

## Option 2: Use GitHub Pages URL (No Custom Domain)

If you don't have a custom domain, you can use:
- `https://YOUR_USERNAME.github.io` (if repo is `username.github.io`)
- `https://YOUR_USERNAME.github.io/personal-website` (if repo is `personal-website`)

No CNAME file needed for this option.

## Option 3: Get a Domain

If you want a custom domain, you can purchase one from:
- **Namecheap** (cheap, good for beginners)
- **Google Domains** (simple interface)
- **Cloudflare** (good prices, free privacy)
- **GoDaddy** (popular but more expensive)

Popular affordable options:
- `.com` domains (~$10-15/year)
- `.dev` domains (~$12-20/year)
- `.io` domains (~$30-40/year)
- `.me` domains (~$10-15/year)

## Quick Setup for Valid Domain

Once you have a valid domain:

1. **Add CNAME file**:
   ```bash
   echo "yourdomain.com" > public/CNAME
   ```

2. **Commit and push**:
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain CNAME"
   git push origin main
   ```

3. **Configure DNS** at your domain registrar (see DNS settings above)

4. **Enable in GitHub Pages settings**

## Troubleshooting

- **DNS check unsuccessful**: Wait 24-48 hours for DNS propagation
- **Invalid domain error**: Make sure you're using a valid TLD
- **HTTPS not available**: Wait for DNS to propagate, then enable HTTPS
- **Site not loading**: Check DNS records are correct

## Current Status

Since `.sinha` is not a valid TLD, you'll need to:
1. Use your GitHub Pages URL (`username.github.io`), OR
2. Purchase/use a valid domain (`.com`, `.dev`, `.io`, etc.)

