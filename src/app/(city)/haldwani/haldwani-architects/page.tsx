
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Haldwani Architects: Home & Commercial Design Services | Space Build",

  description:
    "Looking for architects in Haldwani? Learn what architects do, how the design process works, what services to expect and how to choose the right one for your home or building. Space Build, spacebuild.co.in.",

  keywords: [
    "Haldwani architects",
    "architects in Haldwani",
    "best architects in Haldwani",
    "architect near me",
    "residential architect Haldwani",
    "commercial architect Haldwani",
    "house design Haldwani",
    "house plan Haldwani",
    "3D elevation design",
    "building design services",
    "architectural planning",
    "map approval Haldwani",
    "Vastu friendly architect",
    "Vastu house plan",
    "architect and construction company",
    "interior and exterior design",
    "architects Nainital district",
    "architects Kathgodam",
    "architects Uttarakhand",
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
      "https://www.spacebuild.co.in/haldwani-architects",
  },

  openGraph: {
    title:
      "Haldwani Architects: Home & Commercial Design Services | Space Build",

    description:
      "Looking for architects in Haldwani? Learn what architects do, how the design process works, what services to expect and how to choose the right one for your home or building. Space Build, spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani-architects",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Architects - Home and Commercial Design Services | Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Haldwani Architects: Home & Commercial Design Services | Space Build",

    description:
      "Explore architectural design services in Haldwani, understand the design process and learn how to choose the right architect for your home or commercial building.",

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
