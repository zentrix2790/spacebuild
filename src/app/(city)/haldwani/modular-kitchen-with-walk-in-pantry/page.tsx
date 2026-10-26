
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen with Walk-In Pantry in Haldwani | Space Build",

  description:
    "Planning a modular kitchen with walk-in pantry in Haldwani? Explore layouts, shelving, materials and lighting ideas from Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen with walk in pantry",
    "walk-in pantry design",
    "kitchen pantry room",
    "walk-in pantry Haldwani",
    "modular kitchen Haldwani",
    "pantry shelving ideas",
    "large kitchen storage",
    "villa kitchen design",
    "pantry layout",
    "pantry lighting",
    "pantry door ideas",
    "BWP plywood pantry",
    "HDHMR kitchen",
    "kitchen cabinets",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen makeover",
    "kitchen designer",
    "kitchen storage solutions",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-walk-in-pantry",
  },

  openGraph: {
    title:
      "Modular Kitchen with Walk-In Pantry in Haldwani | Space Build",
    description:
      "Planning a modular kitchen with walk-in pantry in Haldwani? Explore layouts, shelving, materials and lighting ideas from Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-walk-in-pantry",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen with Walk-In Pantry in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen with Walk-In Pantry in Haldwani | Space Build",
    description:
      "Explore walk-in pantry layouts, shelving, lighting, materials and smart kitchen storage ideas for Haldwani homes with Space Build.",
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
