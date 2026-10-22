
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Pest Control Price in Haldwani | Affordable Pest Control Services",
  description:
    "Looking for pest control price in Haldwani? Explore estimated treatment costs for termites, cockroaches, bed bugs, rodents and other pests with Space Build.",
  keywords: [
    "pest control price in Haldwani",
    "pest control cost in Haldwani",
    "affordable pest control Haldwani",
    "pest control charges Haldwani",
    "termite control price Haldwani",
    "cockroach control Haldwani",
    "bed bug treatment Haldwani",
    "residential pest control Haldwani",
    "commercial pest control Haldwani",
    "pest control services near me",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/pest-control-price-in-haldwani",
  },
  openGraph: {
    title: "Pest Control Price in Haldwani | Affordable Pest Control Services",
    description:
      "Looking for pest control price in Haldwani? Explore estimated treatment costs for termites, cockroaches, bed bugs, rodents and other pests with Space Build.",
    url: "https://www.spacebuild.co.in/haldwani/pest-control-price-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control Prices and Affordable Pest Control Services in Haldwani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Price in Haldwani | Affordable Pest Control Services",
    description:
      "Explore estimated pest control costs in Haldwani for termites, cockroaches, bed bugs, rodents, and other pests with Space Build.",
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
