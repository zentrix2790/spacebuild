
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Pest Control Companies in Haldwani | Space Build",
  description:
    "Looking for the best pest control companies in Haldwani? Learn how to compare termite, cockroach, mosquito, bed bug, and rodent control services, check treatment quality, and choose reliable pest management.",
  keywords: [
    "best pest control companies in Haldwani",
    "best pest control Haldwani",
    "pest control services Haldwani",
    "pest control company Haldwani",
    "professional pest control Haldwani",
    "termite control Haldwani",
    "cockroach control Haldwani",
    "mosquito control Haldwani",
    "bed bug treatment Haldwani",
    "rodent control Haldwani",
    "residential pest control Haldwani",
    "commercial pest control Haldwani",
    "affordable pest control Haldwani",
    "pest inspection Haldwani",
    "home pest control services",
    "pest management company near me",
    "pest prevention tips",
    "safe pest control services",
    "pest treatment cost Haldwani",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/best-pest-control-companies-in-haldwani",
  },
  openGraph: {
    title: "Best Pest Control Companies in Haldwani | Space Build",
    description:
      "Looking for the best pest control companies in Haldwani? Learn how to compare termite, cockroach, mosquito, bed bug, and rodent control services, check treatment quality, and choose reliable pest management.",
    url: "https://www.spacebuild.co.in/best-pest-control-companies-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Pest Control Companies in Haldwani - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control Companies in Haldwani | Space Build",
    description:
      "Compare pest control services in Haldwani for termites, cockroaches, mosquitoes, bed bugs, and rodents. Learn how to choose reliable pest management.",
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
