
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Showroom in Haldwani | Choosing the Right One | Space Build",

  description:
    "Looking for a modular kitchen showroom in Haldwani? Learn what to check, from samples to warranty, with guidance from Space Build Haldwani. Book a free consultation.",

  keywords: [
    "modular kitchen showroom in Haldwani",
    "modular kitchen Haldwani",
    "kitchen showroom Uttarakhand",
    "kitchen design studio",
    "modular kitchen dealer",
    "kitchen cabinet showroom",
    "modular kitchen samples",
    "kitchen 3D design",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen hardware",
    "kitchen countertop options",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
    "modular kitchen quotation",
    "kitchen warranty",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-showroom",
  },

  openGraph: {
    title:
      "Modular Kitchen Showroom in Haldwani | Choosing the Right One | Space Build",
    description:
      "Looking for a modular kitchen showroom in Haldwani? Learn what to check, from samples to warranty, with guidance from Space Build Haldwani. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-showroom",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Showroom in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Showroom in Haldwani | Choosing the Right One | Space Build",
    description:
      "Learn how to choose a modular kitchen showroom by checking samples, materials, hardware, 3D designs, quotations and warranties.",
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
