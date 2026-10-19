import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Design a House Plan | Space Build Haldwani",

  description:
    "Learn how to design a house plan step by step: study the plot, set needs and budget, zone rooms, plan circulation, light, and services, and prepare for approvals, with practical guidance from Space Build Haldwani.",

  keywords:
    "how to design a house plan, house plan design steps, house planning tips, how to plan a house layout, plot analysis for house plan, room placement in house plan, house plan circulation, house plan ventilation, house plan for small plot, house plan checklist, house plan mistakes, house plan approval, floor plan basics, house design process, design and build Haldwani, house construction Haldwani, interior designer Haldwani, interior design Haldwani, home building Uttarakhand, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/how-to-design-a-house-plan",
  },

  openGraph: {
    title:
      "How to Design a House Plan | Space Build Haldwani",
    description:
      "Learn how to design a house plan step by step: study the plot, set needs and budget, zone rooms, plan circulation, light, and services, and prepare for approvals, with practical guidance from Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/haldwani/how-to-design-a-house-plan",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Design a House Plan - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Design a House Plan | Space Build Haldwani",
    description:
      "Learn how to design a house plan step by step: study the plot, set needs and budget, zone rooms, plan circulation, light, and services, and prepare for approvals, with practical guidance from Space Build Haldwani.",
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