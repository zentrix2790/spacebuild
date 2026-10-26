
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Best Modular Kitchen Designs for 4 Bedroom House in Haldwani | Space Build",

  description:
    "Find the best modular kitchen designs for a 4 bedroom house in Haldwani. Explore layouts, storage, pantry and finish ideas from Space Build. Book a free consultation today.",

  keywords: [
    "best modular kitchen designs",
    "modular kitchen for 4 bedroom house",
    "large family kitchen design",
    "modular kitchen Haldwani",
    "U shaped kitchen",
    "island kitchen",
    "dry and wet kitchen",
    "kitchen with pantry",
    "breakfast counter",
    "kitchen cabinets",
    "kitchen storage ideas",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "open kitchen design",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen makeover",
    "kitchen designer",
    "villa kitchen design",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-design-4-bedroom-house",
  },

  openGraph: {
    title:
      "Best Modular Kitchen Designs for 4 Bedroom House in Haldwani | Space Build",
    description:
      "Find the best modular kitchen designs for a 4 bedroom house in Haldwani. Explore layouts, storage, pantry and finish ideas from Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-design-4-bedroom-house",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Designs for a 4 Bedroom House in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Modular Kitchen Designs for 4 Bedroom House in Haldwani | Space Build",
    description:
      "Explore spacious kitchen layouts, island counters, pantry storage and modern finishes for 4 bedroom homes in Haldwani with Space Build.",
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
