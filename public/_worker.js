export default {
  async fetch(request, env) {
    return new Response('Worker file placeholder - will be replaced by next-on-pages build');
  },
};

// Configure compatibility flags
export const config = {
  compatibilityDate: '2024-10-27',
  compatibilityFlags: ['nodejs_compat'],
};
