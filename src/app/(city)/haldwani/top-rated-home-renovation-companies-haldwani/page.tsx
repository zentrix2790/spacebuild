
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Top Rated Home Renovation Companies Haldwani | Space Build Haldwani",

  description:
    "What makes a home renovation company top rated in Haldwani? Learn how to read ratings, build a shortlist, score companies on renovation-specific points, and verify claims with site visits and references, with Space Build Haldwani.",

  keywords: [
    "top rated home renovation companies Haldwani",
    "best renovation company Haldwani",
    "home renovation company ratings",
    "how to read contractor ratings",
    "renovation company checklist",
    "renovation company shortlist",
    "renovation references",
    "renovation site visit checklist",
    "renovation contractor Haldwani",
    "home remodelling company",
    "old house renovation company",
    "renovation quote comparison",
    "renovation company red flags",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home renovation Uttarakhand",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/top-rated-home-renovation-companies",
  },

  openGraph: {
    title:
      "Top Rated Home Renovation Companies Haldwani | Space Build Haldwani",

    description:
      "What makes a home renovation company top rated in Haldwani? Learn how to read ratings, build a shortlist, score companies on renovation-specific points, and verify claims with site visits and references, with Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/top-rated-home-renovation-companies",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Top Rated Home Renovation Companies in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Rated Home Renovation Companies Haldwani | Space Build Haldwani",

    description:
      "Learn how to compare renovation company ratings, check references, evaluate site visits, and shortlist renovation contractors in Haldwani.",

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
