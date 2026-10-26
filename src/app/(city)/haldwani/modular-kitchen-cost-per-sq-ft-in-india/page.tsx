
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Cost Per Sq Ft in India | Price Guide by Space Build",

  description:
    "Understand modular kitchen cost per sq ft in India. Learn what affects the rate, from materials to hardware, with tips from Space Build Haldwani. Get a clear quote today.",

  keywords: [
    "modular kitchen cost per sq ft in India",
    "modular kitchen price per square foot",
    "modular kitchen rate India",
    "modular kitchen cost Haldwani",
    "kitchen cost calculator",
    "kitchen cabinet price",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "L shaped kitchen cost",
    "island kitchen cost",
    "small kitchen cost",
    "kitchen countertop price",
    "kitchen hardware cost",
    "kitchen interior cost",
    "modular kitchen budget",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen renovation cost",
    "kitchen designer",
    "modular kitchen quotation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-cost-per-sq-ft",
  },

  openGraph: {
    title:
      "Modular Kitchen Cost Per Sq Ft in India | Price Guide by Space Build",
    description:
      "Understand modular kitchen cost per sq ft in India. Learn what affects the rate, from materials to hardware, with tips from Space Build Haldwani. Get a clear quote today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-cost-per-sq-ft",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Cost Per Sq Ft Guide by Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Cost Per Sq Ft in India | Space Build",
    description:
      "Explore modular kitchen rates per square foot, material choices, hardware costs and budgeting tips with Space Build Haldwani.",
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
