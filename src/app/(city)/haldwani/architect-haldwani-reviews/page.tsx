
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architect Haldwani Reviews | Space Build Haldwani",

  description:
    "How should you read architect Haldwani reviews? Learn where reviews appear, what makes architect reviews different, how to spot unreliable ones, and how to verify through portfolios and clients, with guidance from Space Build Haldwani.",

  keywords: [
    "architect Haldwani reviews",
    "Haldwani architect ratings",
    "architect feedback Haldwani",
    "how to read architect reviews",
    "architect reference check",
    "fake review signs",
    "architect portfolio check",
    "verify architect registration",
    "architect client feedback",
    "architect selection checklist",
    "house design Haldwani",
    "home planning Haldwani",
    "building plan design",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "architect red flags",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/architect-haldwani-reviews",
  },

  openGraph: {
    title: "Architect Haldwani Reviews | Space Build Haldwani",

    description:
      "How should you read architect Haldwani reviews? Learn where reviews appear, what makes architect reviews different, how to spot unreliable ones, and how to verify through portfolios and clients, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/architect-haldwani-reviews",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architect Haldwani Reviews | Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Architect Haldwani Reviews | Space Build Haldwani",

    description:
      "Learn how to evaluate architect reviews in Haldwani, spot unreliable feedback, and verify portfolios, references, and registration details.",

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
