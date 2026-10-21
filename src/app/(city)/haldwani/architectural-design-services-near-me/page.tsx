
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architectural Design Services Near Me | Space Build Haldwani",

  description:
    "Searching for architectural design services near me? Learn why local matters, how to judge nearby providers, when remote design works, and how design links to construction and interiors with Space Build Haldwani.",

  keywords: [
    "architectural design services near me",
    "architect near me",
    "house design near me",
    "local architect",
    "nearby architect services",
    "local building design services",
    "architect site visit",
    "remote architect services",
    "online architect consultation",
    "home planning near me",
    "building plan design",
    "architect shortlist",
    "local approvals knowledge",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "local design services",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/architectural-design-services-near-me",
  },

  openGraph: {
    title: "Architectural Design Services Near Me | Space Build Haldwani",

    description:
      "Searching for architectural design services near me? Learn why local matters, how to judge nearby providers, when remote design works, and how design links to construction and interiors with Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/architectural-design-services-near-me",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architectural Design Services Near Me - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Architectural Design Services Near Me | Space Build Haldwani",

    description:
      "Find out how to choose local architectural design services, compare nearby providers, and plan construction and interiors with Space Build Haldwani.",

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
