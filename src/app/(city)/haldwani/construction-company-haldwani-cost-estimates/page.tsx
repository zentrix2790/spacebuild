import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Company Haldwani Cost Estimates in Haldwani | Space Build Moradabad",

  description: "Looking for construction company haldwani cost estimates in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",

  keywords: "Construction Company Haldwani Cost Estimates Haldwani, Space Build Moradabad, construction company haldwani cost estimates",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/haldwani/construction-company-haldwani-cost-estimates",
  },

  openGraph: {
    title: "Construction Company Haldwani Cost Estimates in Haldwani | Space Build Moradabad",
    description: "Looking for construction company haldwani cost estimates in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    url: "https://www.spacebuild.co.in/haldwani/construction-company-haldwani-cost-estimates",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Company Haldwani Cost Estimates in Haldwani | Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction Company Haldwani Cost Estimates in Haldwani | Space Build Moradabad",
    description: "Looking for construction company haldwani cost estimates in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Construction Company Haldwani Cost Estimates in Haldwani | Space Build Moradabad",
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.region": "IN-UK",
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
