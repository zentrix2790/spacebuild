import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Best Home Renovation Company in Haldwani | Space Build",

  description:
    "Looking for the best home renovation company in Haldwani? Explore modern renovation, interior design, kitchen upgrades and home improvement solutions with Space Build.",

  keywords:
    "best home renovation company Haldwani, home renovation in Haldwani, house renovation Haldwani, home renovation services Haldwani, residential renovation company, home remodelling Haldwani, affordable home renovation, modern home renovation, house remodelling services, home interior renovation, kitchen renovation Haldwani, bathroom renovation Haldwani, bedroom renovation ideas, living room renovation, complete home renovation, old house renovation Haldwani, home improvement services, renovation contractor Haldwani, residential interior designer Haldwani, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/best-home-renovation-company-haldwani",
  },

  openGraph: {
    title:
      "Best Home Renovation Company in Haldwani | Space Build",
    description:
      "Looking for the best home renovation company in Haldwani? Explore modern renovation, interior design, kitchen upgrades and home improvement solutions with Space Build.",
    url: "https://www.spacebuild.co.in/haldwani/best-home-renovation-company-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Home Renovation Company in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Home Renovation Company in Haldwani | Space Build",
    description:
      "Looking for the best home renovation company in Haldwani? Explore modern renovation, interior design, kitchen upgrades and home improvement solutions with Space Build.",
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