
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Interior Designers Haldwani | Space Build Haldwani",
  description:
    "How do you find the best interior designer in Haldwani? Use this guide to judge portfolios, style fit, process, fees, and references, avoid red flags, and see how Space Build Haldwani plans homes and offices.",
  keywords: [
    "best interior designers Haldwani",
    "top interior designer Haldwani",
    "how to choose interior designer",
    "interior designer checklist",
    "interior designer portfolio check",
    "interior designer fees",
    "interior designer questions",
    "interior designer vs decorator",
    "interior design process",
    "interior designer red flags",
    "home interior Haldwani",
    "office interior Haldwani",
    "modular kitchen Haldwani",
    "turnkey interiors",
    "interior design Haldwani",
    "interior designer near me",
    "Haldwani interiors",
    "design and build Haldwani",
    "home interiors Uttarakhand",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/best-interior-designers-haldwani",
  },
  openGraph: {
    title: "Best Interior Designers Haldwani | Space Build Haldwani",
    description:
      "How do you find the best interior designer in Haldwani? Use this guide to judge portfolios, style fit, process, fees, and references, avoid red flags, and see how Space Build Haldwani plans homes and offices.",
    url: "https://www.spacebuild.co.in/best-interior-designers-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Interior Designers in Haldwani - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Designers Haldwani | Space Build Haldwani",
    description:
      "Learn how to choose an interior designer in Haldwani by comparing portfolios, fees, design processes, and references with Space Build.",
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
