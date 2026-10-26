
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen with Pantry in Haldwani | Space Build",

  description:
    "Planning a modular kitchen with pantry in Haldwani? Explore pantry types, layouts, materials and storage ideas from Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen with pantry",
    "kitchen pantry design",
    "pantry unit Haldwani",
    "modular kitchen Haldwani",
    "pull-out pantry",
    "tall pantry unit",
    "walk-in pantry",
    "kitchen storage ideas",
    "pantry cabinet",
    "small kitchen pantry",
    "kitchen organiser",
    "BWP plywood kitchen",
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
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-with-pantry",
  },

  openGraph: {
    title: "Modular Kitchen with Pantry in Haldwani | Space Build",
    description:
      "Planning a modular kitchen with pantry in Haldwani? Explore pantry types, layouts, materials and storage ideas from Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-with-pantry",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen with Pantry in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen with Pantry in Haldwani | Space Build",
    description:
      "Explore pantry units, pull-out storage, kitchen layouts and smart storage solutions for Haldwani homes with Space Build.",
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
