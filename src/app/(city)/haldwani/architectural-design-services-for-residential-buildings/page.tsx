
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architectural Design Services for Residential Buildings | Space Build Haldwani",

  description:
    "Explore architectural design services for residential buildings: independent houses, duplexes, villas, and multi-unit homes. Learn design priorities, stages, deliverables, and how design links to construction with Space Build Haldwani.",

  keywords: [
    "architectural design services for residential buildings",
    "residential architecture services",
    "house design services",
    "villa design",
    "duplex house design",
    "apartment building design",
    "residential building plans",
    "residential architect",
    "home design stages",
    "residential working drawings",
    "residential approval drawings",
    "family home design",
    "house elevation design",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "residential planning",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/architectural-design-services-residential-buildings",
  },

  openGraph: {
    title:
      "Architectural Design Services for Residential Buildings | Space Build Haldwani",

    description:
      "Explore architectural design services for residential buildings: independent houses, duplexes, villas, and multi-unit homes. Learn design priorities, stages, deliverables, and how design links to construction with Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/architectural-design-services-residential-buildings",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architectural Design Services for Residential Buildings - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Architectural Design Services for Residential Buildings | Space Build Haldwani",

    description:
      "Explore house, duplex, villa, and multi-unit residential design stages, drawings, and construction planning with Space Build Haldwani.",

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
