
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Design Ideas for Haldwani Homes | Space Build",

  description:
    "Looking for modular kitchen design ideas in Haldwani? Explore layouts, colours, finishes, storage and lighting tips from Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen design ideas",
    "modular kitchen ideas Haldwani",
    "kitchen design ideas",
    "small kitchen ideas",
    "L shaped kitchen design",
    "U shaped kitchen design",
    "island kitchen design",
    "two tone kitchen",
    "handle-less kitchen",
    "kitchen colour ideas",
    "kitchen storage ideas",
    "open kitchen design",
    "kitchen lighting ideas",
    "kitchen backsplash ideas",
    "kitchen cabinets",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
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
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-design-ideas",
  },

  openGraph: {
    title:
      "Modular Kitchen Design Ideas for Haldwani Homes | Space Build",
    description:
      "Looking for modular kitchen design ideas in Haldwani? Explore layouts, colours, finishes, storage and lighting tips from Space Build. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-design-ideas",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Design Ideas for Haldwani Homes by Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Design Ideas for Haldwani Homes | Space Build",
    description:
      "Discover kitchen layouts, colour combinations, finishes, storage and lighting ideas for Haldwani homes.",
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
