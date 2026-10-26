
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Cost in Haldwani | Price Guide by Space Build",

  description:
    "Wondering about modular kitchen cost in Haldwani? Learn what affects pricing, from layout and materials to hardware. Get a clear quote from Space Build today.",

  keywords: [
    "modular kitchen cost",
    "modular kitchen price",
    "modular kitchen cost Haldwani",
    "kitchen cost per sq ft",
    "modular kitchen budget",
    "kitchen cabinet price",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "L shaped kitchen cost",
    "U shaped kitchen cost",
    "island kitchen cost",
    "small kitchen cost",
    "kitchen countertop price",
    "kitchen hardware cost",
    "kitchen interior cost",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen renovation cost",
    "kitchen designer",
    "modular kitchen quotation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-cost",
  },

  openGraph: {
    title:
      "Modular Kitchen Cost in Haldwani | Price Guide by Space Build",
    description:
      "Wondering about modular kitchen cost in Haldwani? Learn what affects pricing, from layout and materials to hardware. Get a clear quote from Space Build today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-cost",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Cost Guide by Space Build in Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Cost in Haldwani | Space Build",
    description:
      "Understand modular kitchen pricing, layouts, materials, countertops and hardware costs with Space Build.",
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
