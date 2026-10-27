
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Layout Ideas for Haldwani Homes | Space Build",

  description:
    "Explore modular kitchen layout ideas for Haldwani homes. Compare straight, L-shaped, U-shaped, parallel, island and peninsula plans with Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen layout ideas",
    "kitchen layout ideas Haldwani",
    "L shaped kitchen layout",
    "U shaped kitchen layout",
    "straight kitchen layout",
    "parallel kitchen layout",
    "island kitchen layout",
    "peninsula kitchen layout",
    "small kitchen layout ideas",
    "open kitchen layout",
    "kitchen work triangle",
    "kitchen zoning",
    "kitchen planning",
    "kitchen cabinets",
    "kitchen storage ideas",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "modular kitchen Haldwani",
    "custom kitchen",
    "kitchen designer",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-layout-ideas",
  },

  openGraph: {
    title:
      "Modular Kitchen Layout Ideas for Haldwani Homes | Space Build",
    description:
      "Explore modular kitchen layout ideas for Haldwani homes. Compare straight, L-shaped, U-shaped, parallel, island and peninsula plans with Space Build. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-layout-ideas",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Layout Ideas by Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Layout Ideas for Haldwani Homes | Space Build",
    description:
      "Compare straight, L-shaped, U-shaped, parallel, island and peninsula kitchen layouts for your home with Space Build.",
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
