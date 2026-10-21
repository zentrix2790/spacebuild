
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architectural Design Services in Haldwani: Home & Commercial | Space Build",

  description:
    "Explore architectural design services in Haldwani: house planning, 3D elevations, working drawings, map approval support and Vastu-aware design. Practical, budget-friendly guidance from Space Build, spacebuild.co.in.",

  keywords: [
    "architectural design services",
    "architectural design services Haldwani",
    "architectural planning Haldwani",
    "house design services",
    "residential architectural design",
    "commercial architectural design",
    "3D elevation design",
    "floor plan design",
    "working drawings",
    "map approval support",
    "building design Haldwani",
    "interior and exterior design",
    "renovation design services",
    "Vastu friendly architectural design",
    "architect near me",
    "architect in Haldwani",
    "architectural services Nainital district",
    "architectural services Kathgodam",
    "architectural services Uttarakhand",
    "Space Build Haldwani",
    "Space Build architecture",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/architectural-design-services",
  },

  openGraph: {
    title:
      "Architectural Design Services in Haldwani: Home & Commercial | Space Build",

    description:
      "Explore architectural design services in Haldwani: house planning, 3D elevations, working drawings, map approval support and Vastu-aware design. Practical, budget-friendly guidance from Space Build, spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/architectural-design-services",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Architectural Design Services in Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Architectural Design Services in Haldwani: Home & Commercial | Space Build",

    description:
      "Explore architectural design services in Haldwani: house planning, 3D elevations, working drawings, map approval support and Vastu-aware design.",

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
