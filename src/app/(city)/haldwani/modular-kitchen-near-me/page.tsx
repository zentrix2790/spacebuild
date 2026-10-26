import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Near Me in Haldwani | Local Experts at Space Build",

  description:
    "Searching for a modular kitchen near me in Haldwani? Learn how to choose a local provider, what to check and how Space Build helps. Book a free consultation today.",

  keywords:
    "modular kitchen near me, modular kitchen Haldwani, local modular kitchen, kitchen designer near me, kitchen interior Haldwani, modular kitchen Uttarakhand, kitchen cabinet maker, kitchen site visit, kitchen 3D design, BWP plywood kitchen, HDHMR kitchen, kitchen hardware, kitchen installation, kitchen warranty, Space Build Haldwani, custom kitchen, kitchen makeover, modular kitchen quotation, kitchen showroom, kitchen renovation",

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
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-near-me-in-haldwani",
  },

  openGraph: {
    title:
      "Modular Kitchen Near Me in Haldwani | Local Experts at Space Build",
    description:
      "Searching for a modular kitchen near me in Haldwani? Learn how to choose a local provider, what to check and how Space Build helps. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-near-me-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Near Me in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Near Me in Haldwani | Local Experts at Space Build",
    description:
      "Searching for a modular kitchen near me in Haldwani? Learn how to choose a local provider, what to check and how Space Build helps. Book a free consultation today.",
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