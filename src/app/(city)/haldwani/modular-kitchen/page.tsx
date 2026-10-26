import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Designs in Haldwani | Space Build",

  description:
    "Explore modular kitchen designs in Haldwani by Space Build. Find layouts, colours, finishes and storage ideas made for Uttarakhand homes. Book a free consultation today.",

  keywords:
    "modular kitchen designs, modular kitchen Haldwani, kitchen design ideas, L shaped kitchen, U shaped kitchen, parallel kitchen, island kitchen, straight kitchen, handle-less kitchen, kitchen cabinets, kitchen colour combination, small kitchen design, open kitchen, kitchen storage, kitchen interior Haldwani, Space Build Haldwani, custom kitchen, kitchen makeover, kitchen designer, modern kitchen",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-designs-in-haldwani",
  },

  openGraph: {
    title:
      "Modular Kitchen Designs in Haldwani | Space Build",
    description:
      "Explore modular kitchen designs in Haldwani by Space Build. Find layouts, colours, finishes and storage ideas made for Uttarakhand homes. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-designs-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Designs in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Designs in Haldwani | Space Build",
    description:
      "Explore modular kitchen designs in Haldwani by Space Build. Find layouts, colours, finishes and storage ideas made for Uttarakhand homes. Book a free consultation today.",
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