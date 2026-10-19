
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Renovation Company Haldwani Reviews | Space Build Haldwani",

  description:
    "How should you read home renovation company reviews in Haldwani? Learn what renovation reviews reveal, the monsoon test, how to run reference calls, and how to write a helpful review, with guidance from Space Build Haldwani.",

  keywords: [
    "home renovation company Haldwani reviews",
    "renovation company reviews",
    "renovation company ratings Haldwani",
    "how to read renovation reviews",
    "renovation reference check",
    "renovation review red flags",
    "monsoon test renovation",
    "renovation before and after claims",
    "renovation final bill vs quote",
    "how to write a renovation review",
    "renovation company feedback",
    "renovation snag list review",
    "house renovation Haldwani",
    "design and build Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home renovation Uttarakhand",
    "renovation warranty claims",
    "renovation company checklist",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/home-renovation-company-reviews",
  },

  openGraph: {
    title: "Home Renovation Company Haldwani Reviews | Space Build Haldwani",

    description:
      "How should you read home renovation company reviews in Haldwani? Learn what renovation reviews reveal, the monsoon test, how to run reference calls, and how to write a helpful review, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/home-renovation-company-reviews",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Home Renovation Company Reviews in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Home Renovation Company Haldwani Reviews | Space Build Haldwani",

    description:
      "Learn how to evaluate renovation company reviews, check references, identify red flags, and assess renovation quality in Haldwani.",

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
