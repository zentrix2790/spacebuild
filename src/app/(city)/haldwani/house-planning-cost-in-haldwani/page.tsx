import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "House Planning and Cost in Haldwani | Space Build",

  description:
    "Explore house planning and cost in Haldwani, including construction estimates, floor plans, material selection, design ideas and budgeting tips with Space Build.",

  keywords:
    "house planning and cost in Haldwani, house construction cost Haldwani, house planning Haldwani, home construction in Haldwani, residential building cost, house construction budget, house plan design Haldwani, home design Haldwani, construction cost per square foot, house map design Haldwani, residential architect Haldwani, modern house planning, house building expenses, small house construction cost, 2BHK house construction cost, 3BHK house construction cost, house construction materials, home interior design Haldwani, building contractor Haldwani, Space Build Haldwani",

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
    canonical: "https://www.spacebuild.co.in/haldwani/house-planning-cost-in-haldwani",
  },

  openGraph: {
    title: "House Planning and Cost in Haldwani | Space Build",
    description:
      "Explore house planning and cost in Haldwani, including construction estimates, floor plans, material selection, design ideas and budgeting tips with Space Build.",
    url: "https://www.spacebuild.co.in/haldwani/house-planning-cost-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "House Planning and Cost in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "House Planning and Cost in Haldwani | Space Build",
    description:
      "Explore house planning and cost in Haldwani, including construction estimates, floor plans, material selection, design ideas and budgeting tips with Space Build.",
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
