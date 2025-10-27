// @ts-nocheck
export default {
  async fetch(request, env, ctx) {
    return new Response('This will be replaced by Next.js build', { status: 200 });
  },
};

// This file is a placeholder and will be replaced by @cloudflare/next-on-pages
// The compatibility flags should be set in Cloudflare Pages dashboard:
// Settings → Functions → Compatibility flags → Add "nodejs_compat"
