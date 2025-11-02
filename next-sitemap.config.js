/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://vidurbccsmagzine.vercel.app', // your live domain
  generateRobotsTxt: true,
  sitemapSize: 99999,

  // ✅ IMPORTANT: next-sitemap should scan the export folder
  outDir: 'public', // sitemap.xml and robots.txt will go to /public
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/api/*'], // don't index API routes

  // ✅ If you use next export, this helps it detect pages
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
