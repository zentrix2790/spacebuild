
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Pest Control for Offices Haldwani | Space Build Haldwani",
  description:
    "Planning pest control for your office in Haldwani? Learn common office pests, service types, scheduling, contract checks, and how to plan pest protection during office construction and fit-out with Space Build Haldwani.",
  keywords: [
    "pest control for offices Haldwani",
    "office pest control",
    "commercial pest control",
    "office termite protection",
    "cockroach control office",
    "rodent control office",
    "pest control contract office",
    "annual maintenance contract pest control",
    "pest control schedule office",
    "office pantry pest control",
    "pest proofing office",
    "office fit-out pest control",
    "office interior Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "house construction Haldwani",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/pest-control-for-offices-haldwani",
  },
  openGraph: {
    title: "Pest Control for Offices Haldwani | Space Build Haldwani",
    description:
      "Planning pest control for your office in Haldwani? Learn common office pests, service types, scheduling, contract checks, and how to plan pest protection during office construction and fit-out with Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/haldwani/pest-control-for-offices-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Office Pest Control in Haldwani - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control for Offices Haldwani | Space Build Haldwani",
    description:
      "Learn about office pest control, treatment schedules, service contracts, and pest protection during office construction and fit-outs in Haldwani.",
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
