
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architect for Home Renovation Haldwani | Space Build Haldwani",

  description:
    "Planning a home renovation in Haldwani? Learn when to hire an architect, what a renovation design includes, how existing structures are assessed, and how to plan safely and on budget with Space Build Haldwani.",

  keywords: [
    "architect for home renovation Haldwani",
    "home renovation architect",
    "house remodeling Haldwani",
    "renovation design services",
    "old house renovation",
    "structural assessment renovation",
    "load bearing wall check",
    "renovation planning",
    "home extension design",
    "renovation drawings",
    "renovation budget planning",
    "renovation approval",
    "renovation with interiors",
    "design and build Haldwani",
    "house construction Haldwani",
    "renovation contractor Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/architect-home-renovation",
  },

  openGraph: {
    title: "Architect for Home Renovation Haldwani | Space Build Haldwani",

    description:
      "Planning a home renovation in Haldwani? Learn when to hire an architect, what a renovation design includes, how existing structures are assessed, and how to plan safely and on budget with Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/architect-home-renovation",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architect for Home Renovation Haldwani | Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Architect for Home Renovation Haldwani | Space Build Haldwani",

    description:
      "Learn how an architect can help with renovation design, structural assessment, home extensions, approvals, and budget planning in Haldwani.",

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
