
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How Much Does an Architectural Design Service Cost | Space Build Haldwani",

  description:
    "How much does an architectural design service cost? Get quick answers, indicative ranges, example scenarios, a simple worksheet, and tips to control design fees, with guidance from Space Build Haldwani.",

  keywords: [
    "how much does an architectural design service cost",
    "architect fees explained",
    "architect cost examples",
    "architect fee worksheet",
    "house design fee example",
    "design fee for small house",
    "design fee for renovation",
    "design fee for commercial building",
    "how to reduce architect fees",
    "architect fee myths",
    "architect fee negotiation",
    "architect scope of work",
    "design budget planning",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "construction budget planning",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/how-much-does-an-architectural-design-service-cost",
  },

  openGraph: {
    title:
      "How Much Does an Architectural Design Service Cost | Space Build Haldwani",

    description:
      "How much does an architectural design service cost? Get quick answers, indicative ranges, example scenarios, a simple worksheet, and tips to control design fees, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/how-much-does-an-architectural-design-service-cost",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architectural Design Service Cost - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "How Much Does an Architectural Design Service Cost | Space Build Haldwani",

    description:
      "Explore architect fee ranges, example design costs, budgeting worksheets, and practical ways to control architectural design fees.",

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
