import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Affordable Residential Interior Designer Haldwani in Haldwani | Space Build Moradabad",

  description: "Looking for affordable residential interior designer haldwani in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",

  keywords: "Affordable Residential Interior Designer Haldwani Haldwani, Space Build Moradabad, affordable residential interior designer haldwani",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/haldwani/affordable-residential-interior-designer-haldwani",
  },

  openGraph: {
    title: "Affordable Residential Interior Designer Haldwani in Haldwani | Space Build Moradabad",
    description: "Looking for affordable residential interior designer haldwani in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    url: "https://www.spacebuild.co.in/haldwani/affordable-residential-interior-designer-haldwani",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Residential Interior Designer Haldwani in Haldwani | Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Affordable Residential Interior Designer Haldwani in Haldwani | Space Build Moradabad",
    description: "Looking for affordable residential interior designer haldwani in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Affordable Residential Interior Designer Haldwani in Haldwani | Space Build Moradabad",
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.region": "IN-UK",
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
