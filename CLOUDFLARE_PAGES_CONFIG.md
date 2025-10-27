# Cloudflare Pages - Build Configuration

## Build Settings

Configure these settings in your Cloudflare Pages dashboard:

### Framework Preset
- **Framework preset**: Next.js (Static HTML Export) or Next.js

### Build Configuration
- **Build command**: `cd frontend && npm install && npm run build`
- **Build output directory**: `frontend/.next` or `frontend/out`
- **Root directory**: `/` (leave empty or set to root)
- **Node version**: `20` or `20.x`

### Environment Variables (Optional)
```
NODE_VERSION=20
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## Alternative: Using Pages Framework

If using `@cloudflare/next-on-pages`:

### Build Settings
- **Build command**: `cd frontend && npm install && npx @cloudflare/next-on-pages@1`
- **Build output directory**: `frontend/.vercel/output/static`

## Troubleshooting

### Issue: "No Next.js version detected"
**Solution**: The build command needs to run from the `frontend` directory where `package.json` is located.

**Correct command**: 
```bash
cd frontend && npm install && npm run build
```

### Issue: Root directory mismatch
**Solution**: 
- Set Root Directory to: `frontend`
- Build command: `npm install && npm run build`
- Build output: `.next` or `out`

## Recommended Configuration

**Option 1: Root at repository root**
- Root Directory: `/` (empty)
- Build command: `cd frontend && npm ci && npm run build`
- Build output: `frontend/.next`

**Option 2: Root at frontend directory**
- Root Directory: `frontend`
- Build command: `npm ci && npm run build`
- Build output: `.next`

## Notes

- ⚠️ `@cloudflare/next-on-pages` is deprecated. Consider using OpenNext adapter.
- For static export, add `output: 'export'` to `next.config.ts`
- Cloudflare Pages supports Next.js SSR with Workers
