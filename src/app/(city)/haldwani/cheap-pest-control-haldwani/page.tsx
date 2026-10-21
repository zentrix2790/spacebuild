
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Cheap Pest Control in Haldwani | Affordable Pest Management",
  description:
    "Looking for cheap pest control in Haldwani? Explore affordable termite, cockroach, mosquito, bed bug, and rodent control options, cost-saving tips, and advice for choosing reliable pest management services.",
  keywords: [
    "cheap pest control Haldwani",
    "affordable pest control Haldwani",
    "low cost pest control Haldwani",
    "budget pest control services Haldwani",
    "pest control near me",
    "cheap pest control services",
    "termite control Haldwani",
    "cockroach control Haldwani",
    "mosquito control Haldwani",
    "bed bug treatment Haldwani",
    "rodent control Haldwani",
    "residential pest control Haldwani",
    "commercial pest control Haldwani",
    "home pest treatment Haldwani",
    "affordable termite treatment",
    "pest inspection Haldwani",
    "pest prevention tips",
    "professional pest management",
    "pest control company Haldwani",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/cheap-pest-control-haldwani",
  },
  openGraph: {
    title: "Cheap Pest Control in Haldwani | Affordable Pest Management",
    description:
      "Looking for cheap pest control in Haldwani? Explore affordable termite, cockroach, mosquito, bed bug, and rodent control options, cost-saving tips, and advice for choosing reliable pest management services.",
    url: "https://www.spacebuild.co.in/cheap-pest-control-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Pest Control and Pest Management in Haldwani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Pest Control in Haldwani | Affordable Pest Management",
    description:
      "Explore affordable pest control options in Haldwani, including termite, cockroach, mosquito, bed bug, and rodent treatments.",
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
