
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Cabinets in Haldwani | Designs and Materials by Space Build",

  description:
    "Explore modular kitchen cabinets in Haldwani. Learn about base, wall and tall units, materials, finishes and hardware from Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen cabinets",
    "kitchen cabinets Haldwani",
    "kitchen cabinet design",
    "base cabinets",
    "wall cabinets",
    "tall kitchen units",
    "kitchen cabinet materials",
    "BWP plywood cabinets",
    "HDHMR kitchen cabinets",
    "kitchen cabinet finishes",
    "soft close hinges",
    "corner cabinet",
    "kitchen drawers",
    "kitchen storage cabinets",
    "custom kitchen cabinets",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "modular kitchen Haldwani",
    "kitchen makeover",
    "kitchen designer",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-cabinets",
  },

  openGraph: {
    title:
      "Modular Kitchen Cabinets in Haldwani | Designs and Materials by Space Build",
    description:
      "Explore modular kitchen cabinets in Haldwani. Learn about base, wall and tall units, materials, finishes and hardware from Space Build. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-cabinets",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Cabinets by Space Build in Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Cabinets in Haldwani | Space Build",
    description:
      "Discover kitchen cabinet designs, materials, finishes, storage solutions and hardware for Haldwani homes with Space Build.",
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
