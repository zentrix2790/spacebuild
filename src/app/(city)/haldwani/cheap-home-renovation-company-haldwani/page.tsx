
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Cheap Home Renovation Company Haldwani | Space Build Haldwani",
  description:
    "Looking for a cheap home renovation company in Haldwani? Learn how to renovate on a budget without risky shortcuts: priorities, low-cost upgrades, quote checks, and red flags of too-cheap offers, with Space Build Haldwani.",
  keywords: [
    "cheap home renovation company Haldwani",
    "affordable home renovation Haldwani",
    "budget home renovation",
    "low cost house renovation",
    "renovation on a budget",
    "cheap renovation quote red flags",
    "budget renovation priorities",
    "low cost home upgrades",
    "renovation cost saving tips",
    "affordable renovation contractor",
    "renovation packages budget",
    "renovation without compromise",
    "house renovation Haldwani",
    "design and build Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home renovation Uttarakhand",
    "renovation contingency",
    "renovation payment tips",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/cheap-home-renovation-company",
  },
  openGraph: {
    title: "Cheap Home Renovation Company Haldwani | Space Build Haldwani",
    description:
      "Looking for a cheap home renovation company in Haldwani? Learn how to renovate on a budget without risky shortcuts: priorities, low-cost upgrades, quote checks, and red flags of too-cheap offers, with Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/haldwani/cheap-home-renovation-company",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cheap Home Renovation Company in Haldwani - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheap Home Renovation Company Haldwani | Space Build Haldwani",
    description:
      "Plan an affordable home renovation in Haldwani with budget priorities, cost-saving upgrades, quote checks, and tips to avoid risky shortcuts.",
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
