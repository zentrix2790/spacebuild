
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Haldwani Architect Contact: How to Reach & Brief an Architect | Space Build",

  description:
    "Need to contact an architect in Haldwani? Learn how to reach an architect, what to prepare before the first meeting, what to ask and how the process begins. Space Build, spacebuild.co.in.",

  keywords: [
    "Haldwani architect contact",
    "contact architect in Haldwani",
    "architect contact details Haldwani",
    "architect near me",
    "book architect consultation",
    "architect appointment Haldwani",
    "residential architect Haldwani",
    "commercial architect Haldwani",
    "house design Haldwani",
    "house plan Haldwani",
    "3D elevation design",
    "first meeting with architect",
    "how to contact an architect",
    "architect consultation Haldwani",
    "Vastu friendly architect",
    "Vastu house plan",
    "map approval Haldwani",
    "architect Nainital district",
    "architect Kathgodam",
    "architect Uttarakhand",
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
      "https://www.spacebuild.co.in/haldwani/haldwani-architect-contact",
  },

  openGraph: {
    title:
      "Haldwani Architect Contact: How to Reach & Brief an Architect | Space Build",

    description:
      "Need to contact an architect in Haldwani? Learn how to reach an architect, what to prepare before the first meeting, what to ask and how the process begins. Space Build, spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/haldwani-architect-contact",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Architect Contact in Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Haldwani Architect Contact: How to Reach & Brief an Architect | Space Build",

    description:
      "Need to contact an architect in Haldwani? Learn how to reach an architect, what to prepare before the first meeting, what to ask and how the process begins.",

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
