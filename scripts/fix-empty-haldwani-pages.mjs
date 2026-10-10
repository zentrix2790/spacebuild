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

function pageContent(slug, title) {
  const fullTitle = `${title} in Haldwani | Space Build Moradabad`;
  const canonical = `https://www.spacebuild.co.in/haldwani/${slug}`;
  const description = `Looking for ${title.toLowerCase()} in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.`;

  return `import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: ${JSON.stringify(fullTitle)},

  description: ${JSON.stringify(description)},

  keywords: ${JSON.stringify(`${title} Haldwani, Space Build Moradabad, ${slug.replace(/-/g, " ")}`)},

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: ${JSON.stringify(canonical)},
  },

  openGraph: {
    title: ${JSON.stringify(fullTitle)},
    description: ${JSON.stringify(description)},
    url: ${JSON.stringify(canonical)},
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: ${JSON.stringify(fullTitle)},
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: ${JSON.stringify(fullTitle)},
    description: ${JSON.stringify(description)},
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: ${JSON.stringify(fullTitle)},
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.region": "IN-UK",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Portfolio />
    </>
  );
}
`;
}

let fixed = 0;
for (const slug of fs.readdirSync(appRoot)) {
  const dir = path.join(appRoot, slug);
  if (!fs.statSync(dir).isDirectory()) continue;

  const pagePath = path.join(dir, "page.tsx");
  if (!fs.existsSync(pagePath)) continue;
  if (fs.statSync(pagePath).size > 10) continue;

  const title = readBannerTitle(dir) ?? titleFromSlug(slug);
  fs.writeFileSync(pagePath, pageContent(slug, title), "utf8");
  fixed++;
}

console.log(`Updated ${fixed} empty page.tsx files in haldwani.`);
