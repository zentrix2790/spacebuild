
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How Much Does a Modular Kitchen Cost in India? | Space Build Kashipur",

  description:
    "How much does a modular kitchen cost in India? Understand price ranges, key cost factors and budget tips with Space Build Kashipur. Get a clear, itemised quote today.",

  keywords: [
    "how much does modular kitchen cost in India",
    "modular kitchen price India",
    "modular kitchen cost",
    "modular kitchen rate per sq ft",
    "modular kitchen budget",
    "modular kitchen cost Kashipur",
    "kitchen cabinet price",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen countertop price",
    "kitchen hardware cost",
    "L shaped kitchen cost",
    "island kitchen cost",
    "small kitchen cost",
    "kitchen interior cost",
    "Space Build Kashipur",
    "custom kitchen",
    "kitchen designer",
    "kitchen renovation cost",
    "modular kitchen quotation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/modular-kitchen-cost-india",
  },

  openGraph: {
    title:
      "How Much Does a Modular Kitchen Cost in India? | Space Build Kashipur",
    description:
      "How much does a modular kitchen cost in India? Understand price ranges, key cost factors and budget tips with Space Build Kashipur. Get a clear, itemised quote today.",
    url:
      "https://www.spacebuild.co.in/kashipur/modular-kitchen-cost-india",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Cost in India - Space Build Kashipur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How Much Does a Modular Kitchen Cost in India? | Space Build Kashipur",
    description:
      "Understand modular kitchen price ranges, materials, countertop and hardware costs, layouts, and budgeting tips with Space Build Kashipur.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Kashipur, Uttarakhand",
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
