
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Design for 1200 Sq Ft Home in Haldwani | Space Build",

  description:
    "Planning a modular kitchen design for a 1200 sq ft home in Haldwani? Explore layouts, storage, pantry and finish ideas from Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen design for 1200 sqft",
    "1200 sq ft kitchen design",
    "3 BHK kitchen design",
    "modular kitchen Haldwani",
    "L shaped kitchen",
    "U shaped kitchen",
    "parallel kitchen",
    "kitchen with pantry",
    "breakfast counter",
    "kitchen storage ideas",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen cabinets",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen makeover",
    "kitchen designer",
    "modern kitchen design",
    "medium size kitchen",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-design-1200-sq-ft-home",
  },

  openGraph: {
    title:
      "Modular Kitchen Design for 1200 Sq Ft Home in Haldwani | Space Build",
    description:
      "Planning a modular kitchen design for a 1200 sq ft home in Haldwani? Explore layouts, storage, pantry and finish ideas from Space Build. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-design-1200-sq-ft-home",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Design for a 1200 Sq Ft Home by Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Design for 1200 Sq Ft Home | Space Build",
    description:
      "Explore kitchen layouts, pantry solutions, storage ideas and modern finishes for a 1200 sq ft home in Haldwani.",
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
