
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "How to Find an Architect in Haldwani | Space Build Haldwani",

  description:
    "Wondering how to find an architect in Haldwani? Follow a practical search process: where to look, how to shortlist, what to prepare for the first meeting, and how to compare proposals, with guidance from Space Build Haldwani.",

  keywords: [
    "how to find architect in Haldwani",
    "find an architect Haldwani",
    "architect search Haldwani",
    "where to find architect",
    "architect shortlist",
    "first meeting with architect",
    "architect brief checklist",
    "compare architect proposals",
    "architect recommendations",
    "verify architect registration",
    "house design Haldwani",
    "home planning Haldwani",
    "building plan design",
    "design and build Haldwani",
    "house construction Haldwani",
    "earthquake resistant design",
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
      "https://www.spacebuild.co.in/how-to-find-architect-in-haldwani",
  },

  openGraph: {
    title: "How to Find an Architect in Haldwani | Space Build Haldwani",

    description:
      "Wondering how to find an architect in Haldwani? Follow a practical search process: where to look, how to shortlist, what to prepare for the first meeting, and how to compare proposals, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/how-to-find-architect-in-haldwani",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Find an Architect in Haldwani | Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "How to Find an Architect in Haldwani | Space Build Haldwani",

    description:
      "Learn where to find architects in Haldwani, how to shortlist candidates, prepare for the first meeting, and compare design proposals.",

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
