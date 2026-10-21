
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architectural Design Services Portfolio | Space Build Haldwani",

  description:
    "How do you read an architectural design services portfolio? Learn what a good portfolio contains, how to judge drawings, renders, and built work, which questions to ask, and how to verify claims, with guidance from Space Build Haldwani.",

  keywords: [
    "architectural design services portfolio",
    "architect portfolio",
    "how to review architect portfolio",
    "portfolio checklist",
    "architect built work",
    "architectural drawings portfolio",
    "3D render vs built work",
    "architect portfolio questions",
    "verify architect portfolio",
    "portfolio red flags",
    "architect project examples",
    "architect work samples",
    "residential and commercial portfolio",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "architect selection",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/architectural-design-services-portfolio",
  },

  openGraph: {
    title: "Architectural Design Services Portfolio | Space Build Haldwani",

    description:
      "How do you read an architectural design services portfolio? Learn what a good portfolio contains, how to judge drawings, renders, and built work, which questions to ask, and how to verify claims, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/architectural-design-services-portfolio",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architectural Design Services Portfolio - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Architectural Design Services Portfolio | Space Build Haldwani",

    description:
      "Learn how to review an architect's portfolio, assess drawings and renders, verify built projects, and identify portfolio red flags.",

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
