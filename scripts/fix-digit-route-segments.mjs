import fs from "fs";
import path from "path";

const root = process.cwd();
const appDir = path.join(root, "src", "app");

function transformSegment(name) {
  if (name.startsWith("2bhk")) return `bhk-2${name.slice(4)}`;
  if (name.startsWith("3bhk")) return `bhk-3${name.slice(4)}`;
  if (name.startsWith("2d")) return `d-2${name.slice(2)}`;
  if (name.startsWith("3d")) return `d-3${name.slice(2)}`;
  if (/^\d/.test(name)) return `n-${name}`;
  return name;
}

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (/^\d/.test(ent.name)) acc.push(full);
      walk(full, acc);
    }
  }
  return acc;
}

function urlPathFromDir(dirPath) {
  const rel = path.relative(appDir, dirPath).split(path.sep);
  const filtered = rel.filter((p) => !(p.startsWith("(") && p.endsWith(")")));
  return "/" + filtered.join("/");
}

const dirs = walk(appDir).sort((a, b) => b.length - a.length);
const redirects = [];

for (const oldDir of dirs) {
  const oldName = path.basename(oldDir);
  const newName = transformSegment(oldName);
  if (newName === oldName) continue;

  const newDir = path.join(path.dirname(oldDir), newName);
  const oldUrl = urlPathFromDir(oldDir);
  const newUrl = urlPathFromDir(newDir);

  fs.renameSync(oldDir, newDir);
  redirects.push({ source: oldUrl, destination: newUrl, permanent: true });

  for (const file of fs.readdirSync(newDir)) {
    if (!/\.(tsx|ts|jsx|js|mdx)$/.test(file)) continue;
    const filePath = path.join(newDir, file);
    let content = fs.readFileSync(filePath, "utf8");
    const next = content.split(oldUrl).join(newUrl);
    if (next !== content) fs.writeFileSync(filePath, next);
  }
}

// Update references across src
const srcDir = path.join(root, "src");
function walkFiles(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walkFiles(full, acc);
    else if (/\.(tsx|ts|jsx|js|json|mdx)$/.test(ent.name)) acc.push(full);
  }
  return acc;
}

for (const r of redirects) {
  for (const file of walkFiles(srcDir)) {
    let content = fs.readFileSync(file, "utf8");
    if (!content.includes(r.source)) continue;
    fs.writeFileSync(file, content.split(r.source).join(r.destination));
  }
}

const configPath = path.join(root, "next.config.ts");
let config = fs.readFileSync(configPath, "utf8");
const marker = "/* digit-prefixed route redirects */";
if (!config.includes(marker)) {
  const redirectLines = redirects
    .map(
      (r) =>
        `      { source: '${r.source}', destination: '${r.destination}', permanent: true },`
    )
    .join("\n");
  config = config.replace(
    "      { source: '/services/wedding-designing', destination: '/services', permanent: true },",
    `      { source: '/services/wedding-designing', destination: '/services', permanent: true },\n      ${marker}\n${redirectLines}`
  );
  fs.writeFileSync(configPath, config);
}

console.log(`Renamed ${redirects.length} route folders.`);
redirects.forEach((r) => console.log(`${r.source} -> ${r.destination}`));
