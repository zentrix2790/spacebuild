
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Showroom Near Me in Haldwani | Space Build",

  description:
    "Searching for a modular kitchen showroom near me in Haldwani? Learn what to see, test and ask during a visit, with guidance from Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen showroom near me",
    "kitchen showroom Haldwani",
    "modular kitchen showroom",
    "kitchen design studio",
    "local kitchen showroom",
    "modular kitchen Haldwani",
    "kitchen cabinet showroom",
    "kitchen samples",
    "kitchen 3D design",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen hardware",
    "kitchen countertop options",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
    "modular kitchen quotation",
    "kitchen warranty",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-showroom-near-me",
  },

  openGraph: {
    title:
      "Modular Kitchen Showroom Near Me in Haldwani | Space Build",
    description:
      "Searching for a modular kitchen showroom near me in Haldwani? Learn what to see, test and ask during a visit, with guidance from Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-showroom-near-me",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Kitchen Showroom in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen Showroom Near Me in Haldwani | Space Build",
    description:
      "Discover what to check at a modular kitchen showroom, from cabinet samples and hardware to 3D designs, quotations and warranties.",
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
