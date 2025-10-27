# Cloudflare Pages - Quick Fix (Using @cloudflare/next-on-pages)

## ✅ Correct Configuration

In your **Cloudflare Pages Dashboard**, set:

### Build Settings

| Setting | Value |
|---------|-------|
| **Framework preset** | Next.js |
| **Build command** | `npm ci && npx @cloudflare/next-on-pages@1` |
| **Build output directory** | `.vercel/output/static` |
| **Root directory** | `frontend` |
| **Node version** | `20` or `22` |

### Why This Works

- **Root directory = `frontend`**: Tells Cloudflare to work inside the frontend folder
- **Build command**: Uses `@cloudflare/next-on-pages` adapter to build Next.js for Cloudflare Pages
- **Build output**: `.vercel/output/static` (the output from @cloudflare/next-on-pages)

### Local Testing

Test the Cloudflare build locally:

```bash
cd frontend
npm run pages:build
npm run preview
```

### Steps to Apply

1. Go to: **Cloudflare Dashboard** → **Pages** → **Your Project**
2. Click: **Settings** → **Builds & deployments**
3. Click: **Edit configuration**
4. Update all fields as shown in the table above
5. Click: **Save**
6. Go to: **Deployments** → Click **Retry deployment**

## Configuration Files

The following files are configured for Cloudflare Pages:

- `wrangler.toml` - Points to `frontend/.vercel/output/static`
- `.cloudflare/config.json` - Build command with `@cloudflare/next-on-pages@1`
- `package.json` - Added `pages:build`, `preview`, and `deploy` scripts

## Done! 🎉

Your deployment should now succeed with the Cloudflare-optimized Next.js build.
