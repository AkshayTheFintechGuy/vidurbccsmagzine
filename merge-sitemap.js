// merge-sitemap.js
import fs from "fs";
import path from "path";

const publicDir = path.join(process.cwd(), "public");
const mainFile = path.join(publicDir, "sitemap.xml");

// find part files (sitemap-0.xml, sitemap-1.xml, etc.)
const sitemapParts = fs
  .readdirSync(publicDir)
  .filter((f) => /^sitemap-\d+\.xml$/.test(f))
  .sort();

if (sitemapParts.length === 0) {
  console.log("ℹ️ No part files found. Nothing to merge.");
  process.exit(0);
}

let allUrls = [];

for (const file of sitemapParts) {
  const xml = fs.readFileSync(path.join(publicDir, file), "utf8");

  // Extract only <url>...</url> tags safely
  const matches = xml.match(/<url>[\s\S]*?<\/url>/g);
  if (matches) allUrls.push(...matches);
}

const mergedXml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  allUrls.join("\n") +
  `\n</urlset>`;

fs.writeFileSync(mainFile, mergedXml);
console.log(`✅ Created single sitemap.xml with ${allUrls.length} URLs`);

// Optional: delete part files
sitemapParts.forEach((f) => fs.unlinkSync(path.join(publicDir, f)));
