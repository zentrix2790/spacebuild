
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "What Is a Modular Kitchen? Meaning, Types & Benefits | Space Build Haldwani",

  description:
    "What is a modular kitchen? Learn the meaning, components, layouts, materials and benefits of modular kitchens for Indian homes with Space Build Haldwani. Book a free consultation.",

  keywords: [
    "what is modular kitchen",
    "modular kitchen meaning",
    "modular kitchen definition",
    "modular kitchen components",
    "modular kitchen types",
    "modular kitchen benefits",
    "modular kitchen vs traditional kitchen",
    "modular kitchen layouts",
    "modular kitchen materials",
    "modular kitchen Haldwani",
    "kitchen cabinets",
    "kitchen storage",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen makeover",
    "kitchen designer",
    "modern kitchen design",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/what-is-modular-kitchen",
  },

  openGraph: {
    title:
      "What Is a Modular Kitchen? Meaning, Types & Benefits | Space Build Haldwani",
    description:
      "Learn what a modular kitchen is, including its components, layouts, materials and benefits for Indian homes with Space Build Haldwani.",
    url:
      "https://www.spacebuild.co.in/haldwani/what-is-modular-kitchen",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "What Is a Modular Kitchen? - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "What Is a Modular Kitchen? Meaning, Types & Benefits | Space Build Haldwani",
    description:
      "Understand modular kitchen components, layouts, materials and benefits for Indian homes with Space Build Haldwani.",
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
