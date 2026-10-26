import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Prices in India | Rates and Budget Guide by Space Build Haldwani",

  description:
    "Check modular kitchen prices in India with a clear guide to rates, materials, layouts and extras. Plan your budget with Space Build Haldwani and get an itemised quote today.",

  keywords:
    "modular kitchen prices in India, modular kitchen price list, modular kitchen rate India, modular kitchen price per sq ft, kitchen cost India, modular kitchen budget, kitchen cabinet price, BWP plywood kitchen, HDHMR kitchen, kitchen countertop price, kitchen hardware cost, L shaped kitchen price, island kitchen price, small kitchen price, modular kitchen Haldwani, kitchen interior cost, Space Build Haldwani, custom kitchen, kitchen designer, modular kitchen quotation",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-prices-in-india",
  },

  openGraph: {
    title:
      "Modular Kitchen Prices in India | Rates and Budget Guide by Space Build Haldwani",
    description:
      "Check modular kitchen prices in India with a clear guide to rates, materials, layouts and extras. Plan your budget with Space Build Haldwani and get an itemised quote today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-prices-in-india",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Prices in India - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Prices in India | Rates and Budget Guide by Space Build Haldwani",
    description:
      "Check modular kitchen prices in India with a clear guide to rates, materials, layouts and extras. Plan your budget with Space Build Haldwani and get an itemised quote today.",
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