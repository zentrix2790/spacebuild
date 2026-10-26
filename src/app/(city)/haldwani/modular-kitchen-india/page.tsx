
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen India | Trends and Designs by Space Build Haldwani",

  description:
    "Learn how a modular kitchen suits Indian homes. Explore layouts, materials, storage and budget tips from Space Build Haldwani. Book your free consultation today.",

  keywords: [
    "modular kitchen India",
    "Indian modular kitchen",
    "modular kitchen Haldwani",
    "kitchen design India",
    "Indian kitchen layout",
    "kitchen cabinets",
    "kitchen storage",
    "L shaped kitchen",
    "U shaped kitchen",
    "island kitchen",
    "small kitchen design",
    "kitchen interior",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen chimney",
    "kitchen renovation",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen makeover",
    "kitchen designer",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-india",
  },

  openGraph: {
    title:
      "Modular Kitchen India | Trends and Designs by Space Build Haldwani",
    description:
      "Learn how a modular kitchen suits Indian homes. Explore layouts, materials, storage and budget tips from Space Build Haldwani. Book your free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-india",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Trends and Designs by Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen India | Space Build Haldwani",
    description:
      "Explore modular kitchen layouts, materials, storage solutions and budget tips for Indian homes with Space Build Haldwani.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.region": "IN-UT",
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
