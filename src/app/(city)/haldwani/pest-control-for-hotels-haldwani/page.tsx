
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Pest Control for Hotels Haldwani | Space Build Haldwani",
  description:
    "Running or building a hotel in Haldwani? Learn common hotel pests, a practical pest management plan, contract checks, and how to design and renovate hotels to reduce pest risk, with guidance from Space Build Haldwani.",
  keywords: [
    "pest control for hotels Haldwani",
    "hotel pest control",
    "guesthouse pest control",
    "bed bug prevention hotel",
    "cockroach control hotel kitchen",
    "rodent control hotel",
    "termite protection hotel",
    "hotel pest management plan",
    "pest control contract hotel",
    "hotel housekeeping pest checks",
    "hotel renovation pest proofing",
    "hotel interior Haldwani",
    "hotel construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/pest-control-for-hotels-haldwani",
  },
  openGraph: {
    title: "Pest Control for Hotels Haldwani | Space Build Haldwani",
    description:
      "Running or building a hotel in Haldwani? Learn common hotel pests, a practical pest management plan, contract checks, and how to design and renovate hotels to reduce pest risk, with guidance from Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/haldwani/pest-control-for-hotels-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control for Hotels in Haldwani - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control for Hotels Haldwani | Space Build Haldwani",
    description:
      "Explore hotel pest management plans, bed bug prevention, kitchen pest control, contract checks, and pest-resistant hotel design in Haldwani.",
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
