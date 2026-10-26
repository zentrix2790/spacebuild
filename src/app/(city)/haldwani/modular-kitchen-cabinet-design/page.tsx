
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Cabinet Design in Haldwani | Ideas by Space Build",

  description:
    "Explore modular kitchen cabinet design ideas for Haldwani homes. Learn about layouts, shutter styles, finishes, storage and hardware with Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen cabinet design",
    "kitchen cabinet design Haldwani",
    "kitchen cabinet ideas",
    "base cabinet design",
    "wall cabinet design",
    "tall unit design",
    "corner cabinet design",
    "handle-less cabinets",
    "two tone kitchen cabinets",
    "kitchen cabinet colours",
    "kitchen cabinet storage",
    "BWP plywood cabinets",
    "HDHMR kitchen cabinets",
    "soft close hinges",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "modular kitchen Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-cabinet-design",
  },

  openGraph: {
    title:
      "Modular Kitchen Cabinet Design in Haldwani | Ideas by Space Build",
    description:
      "Explore modular kitchen cabinet design ideas for Haldwani homes. Learn about layouts, shutter styles, finishes, storage and hardware with Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-cabinet-design",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Cabinet Design in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Cabinet Design in Haldwani | Ideas by Space Build",
    description:
      "Discover kitchen cabinet layouts, shutter styles, finishes, colours, storage options and hardware ideas for Haldwani homes.",
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
