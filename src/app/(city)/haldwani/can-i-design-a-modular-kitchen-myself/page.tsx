
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Can I Design a Modular Kitchen Myself? DIY Tips | Space Build Haldwani",

  description:
    "Can you design a modular kitchen yourself? Learn what you can plan on your own, where expert help matters and how Space Build Haldwani guides you. Book a free consultation.",

  keywords: [
    "can I design a modular kitchen myself",
    "DIY modular kitchen design",
    "design your own kitchen",
    "kitchen planning tips",
    "kitchen layout planning",
    "kitchen measurement guide",
    "kitchen work triangle",
    "modular kitchen Haldwani",
    "kitchen design mistakes",
    "kitchen storage planning",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen cabinets",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
    "3D kitchen design",
    "modular kitchen consultation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/design-modular-kitchen-yourself",
  },

  openGraph: {
    title:
      "Can I Design a Modular Kitchen Myself? DIY Tips | Space Build Haldwani",
    description:
      "Can you design a modular kitchen yourself? Learn what you can plan on your own, where expert help matters and how Space Build Haldwani guides you. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/haldwani/design-modular-kitchen-yourself",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "DIY Modular Kitchen Design Tips - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Can I Design a Modular Kitchen Myself? DIY Tips | Space Build Haldwani",
    description:
      "Learn kitchen layout planning, measurements, storage ideas and common DIY design mistakes with guidance from Space Build Haldwani.",
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
