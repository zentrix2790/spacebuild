
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Pest Control Service Near Me in Haldwani | Space Build",

  description:
    "Looking for a pest control service near you in Haldwani? Learn about termite, cockroach, mosquito, bed bug, and rodent control, treatment costs, safety tips, and how to choose a reliable pest management provider.",

  keywords: [
    "pest control service near me Haldwani",
    "pest control near me in Haldwani",
    "pest control services Haldwani",
    "pest control company Haldwani",
    "professional pest control Haldwani",
    "home pest control Haldwani",
    "residential pest control services",
    "commercial pest control Haldwani",
    "termite control Haldwani",
    "cockroach control Haldwani",
    "mosquito control Haldwani",
    "bed bug treatment Haldwani",
    "rodent control Haldwani",
    "affordable pest control Haldwani",
    "pest inspection Haldwani",
    "pest management services",
    "local pest control company",
    "safe pest control treatment",
    "pest prevention tips",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/pest-control-service-near-me-haldwani",
  },

  openGraph: {
    title: "Pest Control Service Near Me in Haldwani | Space Build",

    description:
      "Looking for a pest control service near you in Haldwani? Learn about termite, cockroach, mosquito, bed bug, and rodent control, treatment costs, safety tips, and how to choose a reliable pest management provider.",

    url: "https://www.spacebuild.co.in/haldwani/pest-control-service-near-me-haldwani",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Service Near Me in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Pest Control Service Near Me in Haldwani | Space Build",

    description:
      "Explore pest control options in Haldwani, including termite, cockroach, mosquito, bed bug, and rodent treatment, costs, and safety tips.",

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
