
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Layout Ideas for Haldwani Homes | Space Build",

  description:
    "Choose the right modular kitchen layout for your Haldwani home. Compare straight, L-shaped, U-shaped, parallel and island plans with Space Build. Book a free consultation.",

  keywords: [
    "modular kitchen layout",
    "kitchen layout Haldwani",
    "modular kitchen layout design",
    "L shaped kitchen layout",
    "U shaped kitchen layout",
    "straight kitchen layout",
    "parallel kitchen layout",
    "island kitchen layout",
    "kitchen work triangle",
    "small kitchen layout",
    "open kitchen layout",
    "kitchen planning",
    "kitchen cabinets",
    "kitchen storage",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen makeover",
    "kitchen designer",
    "modular kitchen Haldwani",
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
    title: "Modular Kitchen Layout Ideas for Haldwani Homes | Space Build",
    description:
      "Choose the right modular kitchen layout for your Haldwani home. Compare straight, L-shaped, U-shaped, parallel and island plans with Space Build. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-layout-ideas",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Layout Ideas for Haldwani Homes - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Layout Ideas for Haldwani Homes | Space Build",
    description:
      "Compare straight, L-shaped, U-shaped, parallel and island kitchen layouts for Haldwani homes with Space Build.",
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
