
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Haldwani Construction Contractors: How to Choose the Right One | Space Build",

  description:
    "Looking for construction contractors in Haldwani? Learn what contractors do, the types of contracts, how to compare them and how to avoid common problems. Practical guidance from Space Build, spacebuild.co.in.",

  keywords: [
    "Haldwani construction contractors",
    "building contractor Haldwani",
    "construction contractors near me",
    "house construction contractor Haldwani",
    "residential contractor Haldwani",
    "commercial construction contractor",
    "civil contractor Haldwani",
    "turnkey contractor Haldwani",
    "labour contractor Haldwani",
    "how to choose a building contractor",
    "contractor agreement",
    "contractor payment schedule",
    "best construction company Haldwani",
    "construction company in Haldwani",
    "construction contractor Nainital district",
    "construction contractor Kathgodam",
    "construction contractor Uttarakhand",
    "Vastu friendly construction",
    "Space Build Haldwani",
    "Space Build construction",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani-construction-contractors",
  },

  openGraph: {
    title:
      "Haldwani Construction Contractors: How to Choose the Right One | Space Build",

    description:
      "Looking for construction contractors in Haldwani? Learn what contractors do, the types of contracts, how to compare them and how to avoid common problems. Practical guidance from Space Build, spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani-construction-contractors",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Construction Contractors - How to Choose the Right One | Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Haldwani Construction Contractors: How to Choose the Right One | Space Build",

    description:
      "Learn how to compare construction contractors, understand contract types, review payment schedules and avoid common problems in Haldwani.",

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
