import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "House Design for 2BHK | Modern Home Ideas in Haldwani",

  description:
    "Explore modern house design for 2BHK with smart layouts, stylish interiors, modular kitchens, storage ideas and practical planning tips by Space Build Haldwani.",

  keywords:
    "house design for 2BHK, 2BHK house design, modern 2BHK house design, 2BHK floor plan, 2BHK home interior design, 2BHK flat design, 2BHK home design ideas, small 2BHK house plan, 2BHK interior design ideas, modern 2BHK interior, 2BHK living room design, 2BHK bedroom design, 2BHK modular kitchen, affordable 2BHK interior design, 2BHK apartment design, space saving 2BHK design, contemporary home design, residential design Haldwani, home interior designer Haldwani, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/house-design-for-2bhk",
  },

  openGraph: {
    title:
      "House Design for 2BHK | Modern Home Ideas in Haldwani",
    description:
      "Explore modern house design for 2BHK with smart layouts, stylish interiors, modular kitchens, storage ideas and practical planning tips by Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/haldwani/house-design-for-2bhk",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "House Design for 2BHK - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "House Design for 2BHK | Modern Home Ideas in Haldwani",
    description:
      "Explore modern house design for 2BHK with smart layouts, stylish interiors, modular kitchens, storage ideas and practical planning tips by Space Build Haldwani.",
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