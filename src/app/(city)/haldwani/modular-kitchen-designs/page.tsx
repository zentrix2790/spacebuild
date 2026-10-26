
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Designs in Haldwani | Styles and Ideas by Space Build",

  description:
    "Discover modular kitchen designs for Haldwani homes. Explore modern, minimal and classic styles, layouts, finishes and storage ideas with Space Build. Book a free consultation.",

  keywords: [
    "modular kitchen designs",
    "modular kitchen design Haldwani",
    "modern kitchen design",
    "minimalist kitchen",
    "contemporary kitchen",
    "traditional kitchen design",
    "Scandinavian kitchen",
    "industrial kitchen",
    "L shaped kitchen",
    "U shaped kitchen",
    "island kitchen",
    "handle-less kitchen",
    "two tone kitchen",
    "kitchen colour combination",
    "kitchen cabinets",
    "kitchen storage ideas",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
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
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-designs",
  },

  openGraph: {
    title:
      "Modular Kitchen Designs in Haldwani | Styles and Ideas by Space Build",
    description:
      "Discover modular kitchen designs for Haldwani homes. Explore modern, minimal and classic styles, layouts, finishes and storage ideas with Space Build. Book a free consultation.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-designs",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Designs in Haldwani by Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Designs in Haldwani | Space Build",
    description:
      "Explore modern, minimalist, classic and contemporary kitchen styles, layouts, finishes and storage ideas for Haldwani homes.",
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
