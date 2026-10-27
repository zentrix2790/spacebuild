
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen vs Built-In Kitchen | Which Is Better? | Space Build Haldwani",

  description:
    "Modular kitchen vs built-in kitchen: compare construction, cost, storage, finish and durability for Haldwani homes. Get expert guidance from Space Build. Book a free consultation.",

  keywords: [
    "modular kitchen vs built-in kitchen",
    "modular kitchen vs traditional kitchen",
    "built-in kitchen meaning",
    "modular kitchen benefits",
    "built-in kitchen cost",
    "kitchen comparison",
    "modular kitchen Haldwani",
    "kitchen cabinets",
    "kitchen storage",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen installation",
    "kitchen renovation",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
    "kitchen durability",
    "kitchen maintenance",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-vs-built-in-kitchen",
  },

  openGraph: {
    title:
      "Modular Kitchen vs Built-In Kitchen | Which Is Better? | Space Build Haldwani",
    description:
      "Modular kitchen vs built-in kitchen: compare construction, cost, storage, finish and durability for Haldwani homes. Get expert guidance from Space Build. Book a free consultation.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-vs-built-in-kitchen",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen vs Built-In Kitchen Comparison by Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen vs Built-In Kitchen | Space Build Haldwani",
    description:
      "Compare modular and built-in kitchens by cost, storage, finish, durability and maintenance for Haldwani homes.",
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
