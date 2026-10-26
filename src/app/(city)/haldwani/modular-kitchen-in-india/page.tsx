
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen in India | Trends, Layouts and Materials by Space Build Haldwani",

  description:
    "Explore modular kitchens in India: popular layouts, materials, storage ideas and planning tips for Indian homes, with expert guidance from Space Build Haldwani. Book a free consultation.",

  keywords: [
    "modular kitchen in India",
    "Indian modular kitchen",
    "modular kitchen design India",
    "modular kitchen trends India",
    "modular kitchen layouts",
    "modular kitchen materials",
    "Indian kitchen planning",
    "modular kitchen Haldwani",
    "kitchen cabinets",
    "kitchen storage ideas",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen chimney",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
    "small kitchen design",
    "modern kitchen design",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-in-india",
  },

  openGraph: {
    title:
      "Modular Kitchen in India | Trends, Layouts and Materials by Space Build Haldwani",
    description:
      "Explore modular kitchens in India: popular layouts, materials, storage ideas and planning tips for Indian homes, with expert guidance from Space Build Haldwani. Book a free consultation.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-in-india",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Trends, Layouts and Materials by Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen in India | Space Build Haldwani",
    description:
      "Explore Indian modular kitchen layouts, materials, storage solutions and modern design trends with Space Build Haldwani.",
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
