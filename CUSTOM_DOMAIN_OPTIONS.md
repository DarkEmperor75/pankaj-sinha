# Remove "darkemperor75" from URL - Options

## Option 1: Use Custom Domain (Recommended)

This gives you a clean URL like `https://pankajsinha.com`

### Steps:

1. **Purchase a domain** (if you don't have one):
   - `pankajsinha.com` (~$10-15/year)
   - `pankaj-sinha.dev` (~$12-20/year)
   - `pankajsinha.io` (~$30-40/year)
   - `pankajsinha.in` (~$10-15/year)
   
   Popular registrars: Namecheap, Google Domains, Cloudflare, GoDaddy

2. **Update next.config.js** - Remove basePath:
   ```js
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     // Remove basePath for custom domain
     // basePath: '/pankaj-sinha',
     trailingSlash: true,
   }
   ```

3. **Create CNAME file** in `public/` directory:
   ```
   pankajsinha.com
   ```
   (Replace with your actual domain)

4. **Configure DNS** at your domain registrar:
   - Add **A records** pointing to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

5. **Enable in GitHub**:
   - Repository Settings → Pages → Custom domain
   - Enter your domain
   - Enable "Enforce HTTPS"

## Option 2: New GitHub Account

Create a new GitHub account with username like `pankajsinha`:

1. **Create new GitHub account**: https://github.com/signup
   - Username: `pankajsinha` (or similar)
   
2. **Create repository** named `pankajsinha.github.io`

3. **Update next.config.js** - Remove basePath:
   ```js
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
     // No basePath needed for username.github.io repos
     trailingSlash: true,
   }
   ```

4. **Push to new repository**:
   ```bash
   git remote set-url origin https://github.com/pankajsinha/pankajsinha.github.io.git
   git push -u origin main
   ```

5. **Your URL**: `https://pankajsinha.github.io`

## Recommendation

**Option 1 (Custom Domain)** is better because:
- More professional (`pankajsinha.com` vs `pankajsinha.github.io`)
- Easier to remember
- Can change hosting without changing URL
- Better for SEO

**Option 2** is free but:
- Still has `.github.io` in the URL
- Requires managing a second GitHub account

## Quick Setup for Custom Domain

If you have a domain ready, I can help configure it now!

