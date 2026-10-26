
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Suppliers in India | How to Choose | Space Build Haldwani",

  description:
    "Looking for modular kitchen suppliers in India? Learn the types of suppliers, what to compare and how to avoid risks, with guidance from Space Build Haldwani. Book a free consultation.",

  keywords: [
    "modular kitchen suppliers in India",
    "modular kitchen manufacturers India",
    "modular kitchen supplier Haldwani",
    "kitchen cabinet suppliers",
    "kitchen hardware suppliers",
    "modular kitchen brands India",
    "kitchen interior suppliers",
    "kitchen material suppliers",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen warranty",
    "kitchen quotation",
    "modular kitchen Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen installation",
    "kitchen makeover",
    "kitchen site measurement",
    "kitchen showroom",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-suppliers-india",
  },

  openGraph: {
    title:
      "Modular Kitchen Suppliers in India | How to Choose | Space Build Haldwani",
    description:
      "Looking for modular kitchen suppliers in India? Learn the types of suppliers, what to compare and how to avoid risks, with guidance from Space Build Haldwani. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-suppliers-india",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Suppliers in India - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Suppliers in India | How to Choose | Space Build Haldwani",
    description:
      "Learn how to compare modular kitchen suppliers, materials, hardware, warranties and quotations with guidance from Space Build Haldwani.",
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
