
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen for Sale in Haldwani | What to Check Before Buying | Space Build",

  description:
    "Looking for a modular kitchen for sale in Haldwani? Learn the buying options, what to check and how to compare offers with Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen for sale",
    "buy modular kitchen Haldwani",
    "modular kitchen offers",
    "ready made modular kitchen",
    "custom modular kitchen",
    "modular kitchen price",
    "kitchen cabinets for sale",
    "modular kitchen deals",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen hardware quality",
    "kitchen warranty",
    "kitchen quotation",
    "modular kitchen Haldwani",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
    "kitchen installation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-for-sale",
  },

  openGraph: {
    title:
      "Modular Kitchen for Sale in Haldwani | What to Check Before Buying | Space Build",
    description:
      "Looking for a modular kitchen for sale in Haldwani? Learn the buying options, what to check and how to compare offers with Space Build. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-for-sale",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Buying Guide by Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen for Sale in Haldwani | Space Build",
    description:
      "Explore modular kitchen buying options and learn how to compare materials, hardware, warranties and quotations before purchasing.",
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
