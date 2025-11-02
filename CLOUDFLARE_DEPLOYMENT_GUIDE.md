# Cloudflare Pages Deployment Guide

## Issue Resolution

The deployment was failing because of a mismatch between the build output directory and the configuration. This has been fixed.

## What Was Changed

1. **next.config.ts**: Added explicit `distDir: 'out'` and `trailingSlash: true` for better Cloudflare Pages compatibility
2. **wrangler.toml**: Updated to use standard Next.js static export output directory (`out`) instead of Vercel's output directory

## Deployment Options

### Option 1: Deploy via Git Integration (Recommended)

1. **Push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Fix Cloudflare Pages configuration"
   git push origin main
   ```

2. **Cloudflare Pages will automatically:**
   - Detect the changes
   - Run `npm run build`
   - Deploy the `out` directory
   - Make your site live

### Option 2: Deploy via Wrangler CLI

If the automatic deployment still fails, you can deploy manually:

1. **Install Wrangler globally (if not already installed):**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare:**
   ```bash
   wrangler login
   ```

3. **Build locally:**
   ```bash
   npm run build
   ```

4. **Deploy manually:**
   ```bash
   wrangler pages deploy out --project-name=career-launchpad
   ```

### Option 3: Use Cloudflare Pages Dashboard

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Pages**
3. Click on your project: **career-launchpad**
4. Go to **Settings** → **Builds & deployments**
5. Update the configuration:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `/` (leave empty or use root)
   - **Node version:** `20`
6. Click **Save**
7. Go to **Deployments** and click **Retry deployment**

## Build Configuration

Your current configuration:

```toml
# wrangler.toml
name = "career-launchpad"
compatibility_date = "2025-10-27"
pages_build_output_dir = "out"

[build]
command = "npm run build"

[build.environment]
NODE_VERSION = "20"
```

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export', // Static export
  distDir: 'out', // Output directory
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Better Cloudflare compatibility
};
```

## Troubleshooting

### If deployment still fails:

1. **Check build logs in Cloudflare Dashboard:**
   - Look for any errors during the build process
   - Verify all dependencies are being installed correctly

2. **Test build locally first:**
   ```bash
   npm run build
   ```
   - Ensure the build completes successfully
   - Check that the `out` directory is created
   - Verify files exist in the `out` directory

3. **Clear Cloudflare cache:**
   - In Cloudflare Dashboard, go to your project
   - Click **Settings** → **General**
   - Scroll down and click **Clear cache and retry deployment**

4. **Check for large files:**
   - Cloudflare Pages has a 25 MB limit per file
   - Check your `out` directory for any files exceeding this limit

5. **Verify Node version:**
   - Ensure you're using Node.js v20 (specified in wrangler.toml)

### Common Issues:

1. **"Internal error occurred"**: Usually a temporary Cloudflare issue. Wait a few minutes and retry.
2. **404 errors after deployment**: Add `trailingSlash: true` in next.config.ts (already done)
3. **Images not loading**: Ensure `images.unoptimized: true` is set (already done)
4. **API routes not working**: Static export doesn't support API routes; use external APIs

## Next Steps

1. **Commit and push the configuration changes:**
   ```bash
   git add wrangler.toml next.config.ts CLOUDFLARE_DEPLOYMENT_GUIDE.md
   git commit -m "Fix Cloudflare Pages deployment configuration"
   git push origin main
   ```

2. **Monitor the deployment:**
   - Go to your Cloudflare Pages dashboard
   - Watch the deployment logs
   - The deployment should now succeed

3. **Test your deployed site:**
   - Once deployed, visit your site URL
   - Test all pages and functionality
   - Check browser console for any errors

## Environment Variables

If you need to add environment variables:

1. Go to **Settings** → **Environment variables** in Cloudflare Dashboard
2. Add variables for:
   - `NEXT_PUBLIC_API_URL` (your backend API URL)
   - Any other public environment variables

## Custom Domain (Optional)

To add a custom domain:

1. Go to **Custom domains** in your project
2. Click **Set up a custom domain**
3. Follow the DNS configuration steps
4. Cloudflare will automatically provision an SSL certificate

## Support

If you continue to experience issues:

1. **Cloudflare Discord:** https://discord.gg/cloudflaredev
2. **Create a support ticket:** Reference deployment ID from the error logs
3. **Cloudflare Community:** https://community.cloudflare.com/

## Deployment ID for Support

If you need to contact support, reference this deployment ID:
```
0c912eb2-edf5-4f7c-8a81-2ce59820a896
```
