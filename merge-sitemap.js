// merge-sitemap.js
import fs from "fs";
import path from "path";

const publicDir = path.join(process.cwd(), "public");

// find all sitemap parts (sitemap-0.xml, sitemap-1.xml, etc.)
const sitemapParts = fs
  .readdirSync(publicDir)
  .filter((f) => f.startsWith("sitemap-") && f.endsWith(".xml"))
  .sort();

const mainFile = path.join(publicDir, "sitemap.xml");

if (sitemapParts.length > 0) {
  console.log(`🧩 Found ${sitemapParts.length} sitemap part(s). Merging...`);

  let allUrls = [];

  for (const file of sitemapParts) {
    const xml = fs.readFileSync(path.join(publicDir, file), "utf8");
    const urls = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
    allUrls.push(...urls);
  }

  const merged = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allUrls.join(
    "\n"
  )}\n</urlset>`;

  fs.writeFileSync(mainFile, merged);
  console.log(`✅ sitemap.xml merged successfully with ${sitemapParts.length} part(s).`);

  // optional: delete the part files
  sitemapParts.forEach((file) => fs.unlinkSync(path.join(publicDir, file)));
} else {
  console.log("ℹ️ No sitemap parts found. Skipping merge.");
}
