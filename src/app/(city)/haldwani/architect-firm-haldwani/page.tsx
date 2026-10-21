
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architect Firm Haldwani | Space Build Haldwani",

  description:
    "Looking for an architect firm in Haldwani? Learn how firms are structured, which services and deliverables to expect, how to compare firms and individual architects, and how design links to building and interiors with Space Build Haldwani.",

  keywords: [
    "architect firm Haldwani",
    "architecture firm Haldwani",
    "architects in Haldwani",
    "architectural services Haldwani",
    "architect firm vs individual architect",
    "house design firm",
    "building design services",
    "architectural drawings",
    "working drawings",
    "elevation design",
    "approval drawings",
    "architect firm services",
    "how to hire architecture firm",
    "architect agreement checklist",
    "design and build Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "house construction Haldwani",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/architect-firm-haldwani",
  },

  openGraph: {
    title: "Architect Firm Haldwani | Space Build Haldwani",

    description:
      "Looking for an architect firm in Haldwani? Learn how firms are structured, which services and deliverables to expect, how to compare firms and individual architects, and how design links to building and interiors with Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/architect-firm-haldwani",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architect Firm Haldwani | Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Architect Firm Haldwani | Space Build Haldwani",

    description:
      "Explore architecture firm services, drawings, deliverables, agreements, and how design connects with construction and interiors in Haldwani.",

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
