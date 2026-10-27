
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Quotes Near Me in Haldwani | Get a Clear Quote from Space Build",

  description:
    "Looking for modular kitchen quotes near me in Haldwani? Learn how to request, read and compare quotes with Space Build. Get a free, itemised quotation today.",

  keywords: [
    "modular kitchen quotes near me",
    "modular kitchen quotation Haldwani",
    "kitchen quote",
    "kitchen price quote",
    "itemised kitchen quotation",
    "modular kitchen cost",
    "kitchen estimate",
    "kitchen quote comparison",
    "modular kitchen Haldwani",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen hardware quote",
    "kitchen countertop price",
    "kitchen installation charges",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
    "free kitchen quote",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-quotes-near-me",
  },

  openGraph: {
    title:
      "Modular Kitchen Quotes Near Me in Haldwani | Get a Clear Quote from Space Build",
    description:
      "Looking for modular kitchen quotes near me in Haldwani? Learn how to request, read and compare quotes with Space Build. Get a free, itemised quotation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-quotes-near-me",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Quotes and Quotations by Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Quotes Near Me in Haldwani | Space Build",
    description:
      "Learn how to request and compare itemised modular kitchen quotations for materials, hardware, countertops and installation.",
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
