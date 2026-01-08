import { load } from "js-yaml";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const dataDir = path.join(rootDir, "src", "data");
const publicDir = path.join(rootDir, "public");

const fallbackBaseUrl = "https://panchalrajan.github.io/portfolio";
const baseUrl = normalizeBaseUrl(
  process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : fallbackBaseUrl),
);

const staticPaths = ["/", "/projects", "/skills", "/certificates", "/privacy"];

const [projectsData, privacyData] = await Promise.all([
  readYaml(path.join(dataDir, "projects.yaml")),
  readYaml(path.join(dataDir, "privacy.yaml")),
]);

const projectIds = collectIds(projectsData?.projects);
const privacyIds = collectIds(privacyData?.policies);
const allPrivacyIds = Array.from(new Set([...projectIds, ...privacyIds]));

const urls = [
  ...staticPaths.map((item) => buildUrl(baseUrl, item)),
  ...allPrivacyIds.map((id) => buildUrl(baseUrl, `/privacy/${id}`)),
];

const sitemapXml = renderSitemap(urls);
const robotsTxt = renderRobots(baseUrl);

await Promise.all([
  writeFile(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8"),
  writeFile(path.join(publicDir, "robots.txt"), robotsTxt, "utf8"),
]);

function normalizeBaseUrl(url) {
  return String(url || fallbackBaseUrl).replace(/\/+$/, "");
}

function buildUrl(base, pathname) {
  if (pathname === "/") {
    return `${base}/`;
  }
  return `${base}${pathname}`;
}

async function readYaml(filePath) {
  const raw = await readFile(filePath, "utf8");
  const parsed = load(raw);
  return parsed && typeof parsed === "object" ? parsed : {};
}

function collectIds(items) {
  if (!Array.isArray(items)) {
    return [];
  }
  return items
    .map((item) => (item && typeof item === "object" ? item.id : undefined))
    .filter((id) => typeof id === "string" && id.trim().length > 0);
}

function renderSitemap(urls) {
  const lines = urls
    .map(
      (url) =>
        `  <url>\n    <loc>${escapeXml(url)}</loc>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${lines}\n</urlset>\n`;
}

function renderRobots(base) {
  return [
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: Bingbot",
    "Allow: /",
    "",
    "User-agent: Twitterbot",
    "Allow: /",
    "",
    "User-agent: facebookexternalhit",
    "Allow: /",
    "",
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: ${base}/sitemap.xml`,
    "",
  ].join("\n");
}

function escapeXml(value) {
  return value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case "\"":
        return "&quot;";
      default:
        return char;
    }
  });
}
