import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pest Control Services Reviews Haldwani | Space Build Haldwani",

  description:
    "How should you read pest control services reviews in Haldwani? Learn what reviews reveal, how to spot unreliable ones, which questions to ask, and how to plan pest protection during construction and renovation.",

  keywords:
    "pest control services reviews Haldwani, pest control reviews, pest control ratings Haldwani, how to read pest control reviews, termite treatment reviews, pest control warranty check, fake review signs, pest control quote checklist, pest control safety tips, pest control for new house, pest control during renovation, pest proofing home, interior designer Haldwani, interior design Haldwani, house construction Haldwani, Space Build Haldwani",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/pest-control-service-reviews-haldwani",
  },

  openGraph: {
    title:
      "Pest Control Services Reviews Haldwani | Space Build Haldwani",
    description:
      "How should you read pest control services reviews in Haldwani? Learn what reviews reveal, how to spot unreliable ones, which questions to ask, and how to plan pest protection during construction and renovation.",
    url: "https://www.spacebuild.co.in/pest-control-service-reviews-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Services Reviews Haldwani - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Pest Control Services Reviews Haldwani | Space Build Haldwani",
    description:
      "How should you read pest control services reviews in Haldwani? Learn what reviews reveal, how to spot unreliable ones, which questions to ask, and how to plan pest protection during construction and renovation.",
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