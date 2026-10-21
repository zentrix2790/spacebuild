
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "How to Get Pest Control Service in Haldwani | Space Build",

  description:
    "Learn how to get pest control service in Haldwani, compare local providers, understand termite, cockroach, mosquito and bed bug treatments, check costs, and prepare your home for safe pest management.",

  keywords: [
    "how to get pest control service Haldwani",
    "pest control service Haldwani",
    "pest control near me Haldwani",
    "pest control company Haldwani",
    "professional pest control Haldwani",
    "home pest control services Haldwani",
    "residential pest control Haldwani",
    "commercial pest control Haldwani",
    "termite control Haldwani",
    "cockroach control Haldwani",
    "mosquito control Haldwani",
    "bed bug treatment Haldwani",
    "rodent control Haldwani",
    "affordable pest control Haldwani",
    "local pest control provider",
    "pest inspection Haldwani",
    "pest management services",
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
      "https://www.spacebuild.co.in/haldwani/how-to-get-pest-control-service-haldwani",
  },

  openGraph: {
    title: "How to Get Pest Control Service in Haldwani | Space Build",

    description:
      "Learn how to get pest control service in Haldwani, compare local providers, understand termite, cockroach, mosquito and bed bug treatments, check costs, and prepare your home for safe pest management.",

    url: "https://www.spacebuild.co.in/haldwani/how-to-get-pest-control-service-haldwani",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Get Pest Control Service in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "How to Get Pest Control Service in Haldwani | Space Build",

    description:
      "Compare pest control providers in Haldwani, understand common treatments and costs, and prepare your home for safe pest management.",

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
