
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architectural Design Services Cost | Space Build Haldwani",

  description:
    "Understand architectural design services cost stage by stage: concept, approvals, working drawings, 3D views, and site visits. Learn indicative ranges, what affects fees, and how to budget with Space Build Haldwani.",

  keywords: [
    "architectural design services cost",
    "architectural design fees",
    "cost of architectural services",
    "house design cost",
    "working drawing cost",
    "approval drawing cost",
    "3D design cost",
    "architect fee breakdown",
    "design services pricing",
    "architect fee stages",
    "design only vs full service",
    "architectural design budget",
    "building plan design cost",
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
      "https://www.spacebuild.co.in/haldwani/architectural-design-services-cost",
  },

  openGraph: {
    title: "Architectural Design Services Cost | Space Build Haldwani",

    description:
      "Understand architectural design services cost stage by stage: concept, approvals, working drawings, 3D views, and site visits. Learn indicative ranges, what affects fees, and how to budget with Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/architectural-design-services-cost",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architectural Design Services Cost - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Architectural Design Services Cost | Space Build Haldwani",

    description:
      "Understand architectural design services cost, fee stages, working drawings, 3D views, approvals, and budgeting with Space Build Haldwani.",

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
