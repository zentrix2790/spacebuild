import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "How To Find Affordable Interior Designer in Haldwani | Space Build Moradabad",

  description: "Looking for how to find affordable interior designer in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",

  keywords: "How To Find Affordable Interior Designer Haldwani, Space Build Moradabad, how to find affordable interior designer",

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
    canonical: "https://www.spacebuild.co.in/haldwani/how-to-find-affordable-interior-designer",
  },

  openGraph: {
    title: "How To Find Affordable Interior Designer in Haldwani | Space Build Moradabad",
    description: "Looking for how to find affordable interior designer in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    url: "https://www.spacebuild.co.in/haldwani/how-to-find-affordable-interior-designer",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How To Find Affordable Interior Designer in Haldwani | Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How To Find Affordable Interior Designer in Haldwani | Space Build Moradabad",
    description: "Looking for how to find affordable interior designer in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "How To Find Affordable Interior Designer in Haldwani | Space Build Moradabad",
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
