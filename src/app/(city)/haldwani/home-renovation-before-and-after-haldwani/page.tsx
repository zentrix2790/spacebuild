import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Renovation Before And After Haldwani in Haldwani | Space Build Moradabad",

  description: "Looking for home renovation before and after haldwani in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",

  keywords: "Home Renovation Before And After Haldwani Haldwani, Space Build Moradabad, home renovation before and after haldwani",

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
    canonical: "https://www.spacebuild.co.in/haldwani/home-renovation-before-and-after-haldwani",
  },

  openGraph: {
    title: "Home Renovation Before And After Haldwani in Haldwani | Space Build Moradabad",
    description: "Looking for home renovation before and after haldwani in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    url: "https://www.spacebuild.co.in/haldwani/home-renovation-before-and-after-haldwani",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Home Renovation Before And After Haldwani in Haldwani | Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Renovation Before And After Haldwani in Haldwani | Space Build Moradabad",
    description: "Looking for home renovation before and after haldwani in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Home Renovation Before And After Haldwani in Haldwani | Space Build Moradabad",
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
