# Cloudflare Pages - Quick Fix

## ✅ Correct Configuration

In your **Cloudflare Pages Dashboard**, set:

### Build Settings

| Setting | Value |
|---------|-------|
| **Framework preset** | Next.js |
| **Build command** | `npm install && npm run build` |
| **Build output directory** | `.next` |
| **Root directory** | `frontend` |
| **Node version** | `20` |

### Why This Works

- **Root directory = `frontend`**: Tells Cloudflare to work inside the frontend folder
- **Build command**: Simple commands that run in the frontend directory
- **Build output**: `.next` (relative to frontend directory)

### Steps to Apply

1. Go to: **Cloudflare Dashboard** → **Pages** → **Your Project**
2. Click: **Settings** → **Builds & deployments**
3. Click: **Edit configuration**
4. Update all fields as shown in the table above
5. Click: **Save**
6. Go to: **Deployments** → Click **Retry deployment**

## Done! 🎉

Your deployment should now succeed.
