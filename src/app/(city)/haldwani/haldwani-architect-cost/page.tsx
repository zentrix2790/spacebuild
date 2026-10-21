
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Haldwani Architect Cost | Space Build Haldwani",

  description:
    "Understand Haldwani architect cost: fee models, indicative ranges, what affects the fee, what is included, and how to compare proposals and budget for design alongside construction, with guidance from Space Build Haldwani.",

  keywords: [
    "Haldwani architect cost",
    "architect fees Haldwani",
    "architect charges per sq ft",
    "architect fee percentage",
    "house design cost Haldwani",
    "architect fee calculator",
    "architect fee structure",
    "architect proposal comparison",
    "architect fee included services",
    "architect payment schedule",
    "home planning cost",
    "building plan design cost",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "construction budget planning",
    "architect cost India",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani-architect-cost",
  },

  openGraph: {
    title: "Haldwani Architect Cost | Space Build Haldwani",

    description:
      "Understand Haldwani architect cost: fee models, indicative ranges, what affects the fee, what is included, and how to compare proposals and budget for design alongside construction, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani-architect-cost",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Architect Cost | Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Haldwani Architect Cost | Space Build Haldwani",

    description:
      "Understand architect fee models, indicative costs, included services, proposal comparisons, and design budgeting for projects in Haldwani.",

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
