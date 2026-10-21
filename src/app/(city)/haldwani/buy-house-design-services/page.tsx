import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Buy House Design Services | Space Build Haldwani",

  description:
    "A buyer's guide to house design services: package types, what each includes, how to place an order, how to check deliverables before paying, and how to avoid common problems, with guidance from Space Build Haldwani.",

  keywords:
    "buy house design services, house design service packages, order house design, house design package comparison, house design deliverables, house design buying guide, house design service checklist, house design order brief, house design revisions, house design payment terms, house design delivery timeline, house design quality check, house design service red flags, house design service near me, design and build Haldwani, house construction Haldwani, interior designer Haldwani, interior design Haldwani, home building Uttarakhand, Space Build Haldwani",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/buy-house-design-services",
  },

  openGraph: {
    title:
      "Buy House Design Services | Space Build Haldwani",
    description:
      "A buyer's guide to house design services: package types, what each includes, how to place an order, how to check deliverables before paying, and how to avoid common problems, with guidance from Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/buy-house-design-services",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Buy House Design Services - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Buy House Design Services | Space Build Haldwani",
    description:
      "A buyer's guide to house design services: package types, what each includes, how to place an order, how to check deliverables before paying, and how to avoid common problems, with guidance from Space Build Haldwani.",
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