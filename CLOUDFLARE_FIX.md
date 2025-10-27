# Cloudflare Pages - Quick Fix

## ✅ Correct Configuration

In your **Cloudflare Pages Dashboard**, set:

### Build Settings

| Setting | Value |
|---------|-------|
| **Framework preset** | Next.js |
| **Build command** | `npm ci && npm run build` |
| **Build output directory** | `.next` |
| **Root directory** | (leave blank - use root) |
| **Node version** | `20` or `22` |
| **Environment variables** | `NODE_VERSION=20` |

### Why This Works

- **Root directory**: Left blank because Next.js is in the project root
- **Build command**: Standard Next.js build (Cloudflare Pages has native Next.js support)
- **Build output**: `.next` (standard Next.js output directory)
- **Native Support**: Cloudflare Pages natively supports Next.js 13+ with App Router

### Steps to Apply

1. Go to: **Cloudflare Dashboard** → **Pages** → **Your Project**
2. Click: **Settings** → **Builds & deployments**
3. Click: **Edit configuration**
4. Update all fields as shown in the table above
5. **Important**: Clear the "Root directory" field (leave it blank)
6. Set Environment Variables:
   - Click **Environment variables**
   - Add: `NODE_VERSION` = `20`
7. Click: **Save**
8. Go to: **Deployments** → Click **Retry deployment**

## Configuration Files

The following files are configured for Cloudflare Pages:

- `wrangler.toml` - Points to `.next` output directory
- `.cloudflare/config.json` - Standard Next.js build command
- `package.json` - Standard Next.js scripts

## Important Notes

- ✅ Cloudflare Pages has **native Next.js support** (no adapter needed)
- ✅ Supports App Router, Server Components, API Routes
- ✅ Works with Next.js 13, 14, 15, and 16
- ⚠️  Some Next.js features may have limitations on Cloudflare (check docs)

## Done! 🎉

Your deployment should now succeed with Cloudflare's native Next.js support!
