
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Pest Control Services in Haldwani | Space Build Haldwani",

  description:
    "Looking for pest control services in Haldwani? Learn about termite, cockroach, mosquito, rodent, and bed bug control, prevention tips, and how to choose a reliable pest management professional.",

  keywords: [
    "pest control services Haldwani",
    "pest control in Haldwani",
    "best pest control services Haldwani",
    "termite control Haldwani",
    "cockroach control Haldwani",
    "mosquito control Haldwani",
    "bed bug control Haldwani",
    "rodent control Haldwani",
    "residential pest control Haldwani",
    "commercial pest control Haldwani",
    "professional pest management",
    "home pest control Haldwani",
    "office pest control Haldwani",
    "pest inspection Haldwani",
    "termite treatment for homes",
    "affordable pest control Haldwani",
    "safe pest control services",
    "pest prevention tips",
    "pest control company near me",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/pest-control-services",
  },

  openGraph: {
    title: "Pest Control Services in Haldwani | Space Build Haldwani",

    description:
      "Looking for pest control services in Haldwani? Learn about termite, cockroach, mosquito, rodent, and bed bug control, prevention tips, and how to choose a reliable pest management professional.",

    url: "https://www.spacebuild.co.in/haldwani/pest-control-services",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Services in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Pest Control Services in Haldwani | Space Build Haldwani",

    description:
      "Explore termite, cockroach, mosquito, rodent, and bed bug control services, prevention tips, and pest management guidance in Haldwani.",

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
