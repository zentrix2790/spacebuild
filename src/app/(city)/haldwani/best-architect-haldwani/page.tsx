
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Architect Haldwani | Space Build Haldwani",

  description:
    "How do you find the best architect in Haldwani? Learn what architects do, how to verify registration, what to ask, how fees work, and how design connects with construction and interiors, with guidance from Space Build Haldwani.",

  keywords: [
    "best architect Haldwani",
    "architect in Haldwani",
    "house architect Haldwani",
    "residential architect Haldwani",
    "how to choose architect",
    "architect vs civil engineer",
    "architect fees India",
    "architect registration check",
    "house design Haldwani",
    "home planning Haldwani",
    "building plan design",
    "elevation design",
    "architect and interior designer",
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
      "https://www.spacebuild.co.in/haldwani/best-architect",
  },

  openGraph: {
    title: "Best Architect Haldwani | Space Build Haldwani",

    description:
      "How do you find the best architect in Haldwani? Learn what architects do, how to verify registration, what to ask, how fees work, and how design connects with construction and interiors, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/best-architect",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Architect Haldwani | Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Architect Haldwani | Space Build Haldwani",

    description:
      "Learn how to choose an architect in Haldwani, verify registration, understand fees, and connect architectural design with construction and interiors.",

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
