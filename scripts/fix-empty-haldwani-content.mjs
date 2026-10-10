import fs from "fs";
import path from "path";

const appRoot = path.join(process.cwd(), "src", "app", "(city)", "haldwani");

function titleFromSlug(slug) {
  return slug
    .split("-")
    .map((w) => (/^\d/.test(w) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

function readBannerTitle(dir) {
  const bannerPath = path.join(dir, "Banner.tsx");
  if (!fs.existsSync(bannerPath)) return null;
  const text = fs.readFileSync(bannerPath, "utf8");
  const match = text.match(/<h1[^>]*>\s*([\s\S]*?)\s*<\/h1>/i);
  if (!match) return null;
  return match[1].replace(/\s+/g, " ").trim();
}

function contentFile(title) {
  return `export default function Content() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-gray-800">
      <h2 className="mb-6 text-2xl font-serif md:text-3xl">${title} in Haldwani</h2>
      <p className="mb-4 leading-relaxed">
        Space Build Moradabad helps homeowners and businesses in Haldwani with end-to-end
        planning, design, and execution. Contact us for a free consultation to discuss your
        project requirements, timeline, and budget.
      </p>
      <p className="leading-relaxed">
        Call <a href="tel:+919927611780" className="text-[#2c67f2] underline">+91 9927611780</a> or
        email{" "}
        <a href="mailto:spacebuild.india@gmail.com" className="text-[#2c67f2] underline">
          spacebuild.india@gmail.com
        </a>{" "}
        to get started.
      </p>
    </section>
  );
}
`;
}

let fixed = 0;
for (const slug of fs.readdirSync(appRoot)) {
  const dir = path.join(appRoot, slug);
  if (!fs.statSync(dir).isDirectory()) continue;

  const contentPath = path.join(dir, "Content.tsx");
  if (!fs.existsSync(contentPath)) continue;
  if (fs.statSync(contentPath).size > 10) continue;

  const title = readBannerTitle(dir) ?? titleFromSlug(slug);
  fs.writeFileSync(contentPath, contentFile(title), "utf8");
  fixed++;
}

console.log(`Updated ${fixed} empty Content.tsx files in haldwani.`);
