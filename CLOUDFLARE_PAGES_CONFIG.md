# Cloudflare Pages - Build Configuration

## ✅ Current Configuration: Static Export

Your project is configured for **static export** - the most compatible option for Cloudflare Pages with Next.js 16.

### Build Settings (Dashboard)

- **Framework preset**: Next.js
- **Build command**: `npm ci && npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave empty/blank)
- **Node version**: `20` or `22`

### Configuration Files

- **next.config.ts**: `output: 'export'` (static site generation)
- **wrangler.toml**: `pages_build_output_dir = "out"`
- **.cloudflare/config.json**: Standard Next.js build

## How the Build Works

1. Next.js runs with `output: 'export'` setting
2. All pages are pre-rendered as static HTML
3. Output is generated in the `out/` directory
4. Cloudflare deploys static files from `out/`
5. No serverless functions - pure static hosting

## What is Static Export?

Static export converts your Next.js app into static HTML/CSS/JS files:

✅ **Advantages:**
- 100% Cloudflare Pages compatible
- No Node.js runtime needed
- Blazing fast (pure static files)
- No "module not found" errors
- Works with Next.js 16

⚠️ **Limitations:**
- No Server-Side Rendering (SSR)
- No API Routes (use separate backend)
- No `getServerSideProps`
- Client-side data fetching only

## Your App's Static Features

✅ **What Works:**
- All 17 routes (pre-rendered)
- Client-side routing
- React hooks and state
- API calls from browser
- Form submissions to external APIs

❌ **What Doesn't Work:**
- API routes (`/api/*`)
- Server-side data fetching
- Middleware
- ISR (Incremental Static Regeneration)

## Build Log Analysis

Your build should show:
```
✓ Generating static pages (17/17)
Route (app)
┌ ○ / (Static)
├ ○ /dashboard (Static)
└ ... (all routes marked as Static)
```

## Troubleshooting

### Previous Error: "No such module node:stream"
**Cause**: `@cloudflare/next-on-pages` adapter incompatible with Next.js 16

**Solution**: ✅ Switched to static export (no adapter needed)

### For Dynamic Features Later

If you need server-side features:
- Deploy backend separately (e.g., Cloudflare Workers, Vercel, etc.)
- Use API calls from static frontend
- Consider Next.js on Vercel for full SSR support

## Environment Variables (Optional)

```env
NODE_VERSION=22
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## Notes

- ✅ Static export is production-ready and recommended
- ✅ All client-side features work normally
- ✅ Perfect for SPAs (Single Page Applications)
- 💡 For backend needs, use separate API service
- � Deploys in seconds, serves from edge
