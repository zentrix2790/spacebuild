
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Installation Cost in Haldwani | Space Build",

  description:
    "Understand modular kitchen installation cost in Haldwani. Learn what the charges cover, what changes the price and how to compare quotes with Space Build. Get a free itemised quote.",

  keywords: [
    "modular kitchen installation cost",
    "kitchen installation charges",
    "modular kitchen installation Haldwani",
    "kitchen fitting cost",
    "kitchen cabinet installation",
    "kitchen countertop fitting",
    "chimney installation charges",
    "kitchen labour cost",
    "kitchen site work",
    "modular kitchen price",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen hardware fitting",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen renovation cost",
    "modular kitchen quotation",
    "kitchen budget",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-installation-cost",
  },

  openGraph: {
    title:
      "Modular Kitchen Installation Cost in Haldwani | Space Build",
    description:
      "Understand modular kitchen installation cost in Haldwani. Learn what the charges cover, what changes the price and how to compare quotes with Space Build. Get a free itemised quote.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-installation-cost",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Installation Cost Guide by Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Installation Cost in Haldwani | Space Build",
    description:
      "Learn about kitchen fitting charges, cabinet installation, countertop fitting and quote comparisons with Space Build Haldwani.",
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
