export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://junior1-ten.vercel.app/';

  return {
   rules: [
  {
    userAgent: "*",
    allow: "/",
  },
],
    sitemap: `https://junior1-ten.vercel.app/sitemap.xml`,
  };
}
