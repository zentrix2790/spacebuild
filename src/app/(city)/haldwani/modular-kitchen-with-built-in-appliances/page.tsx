
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen with Built-In Appliances in Haldwani | Space Build",

  description:
    "Planning a modular kitchen with built-in appliances in Haldwani? Explore oven, hob, chimney and dishwasher planning with Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen with built-in appliances",
    "built-in oven kitchen",
    "built-in microwave unit",
    "integrated dishwasher",
    "built-in hob",
    "kitchen chimney planning",
    "tall appliance unit",
    "integrated refrigerator",
    "modular kitchen Haldwani",
    "kitchen appliance cabinet",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen cabinets",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen makeover",
    "kitchen designer",
    "modern kitchen design",
    "kitchen electrical planning",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-built-in-appliances",
  },

  openGraph: {
    title:
      "Modular Kitchen with Built-In Appliances in Haldwani | Space Build",
    description:
      "Planning a modular kitchen with built-in appliances in Haldwani? Explore oven, hob, chimney and dishwasher planning with Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-built-in-appliances",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen with Built-In Appliances in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen with Built-In Appliances in Haldwani | Space Build",
    description:
      "Explore built-in ovens, microwaves, hobs, chimneys and integrated appliances for modular kitchens in Haldwani with Space Build.",
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
