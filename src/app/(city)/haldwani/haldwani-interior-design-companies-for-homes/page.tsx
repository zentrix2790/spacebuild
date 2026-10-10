import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Haldwani Interior Design Companies For Homes in Haldwani | Space Build Moradabad",

  description: "Looking for haldwani interior design companies for homes in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",

  keywords: "Haldwani Interior Design Companies For Homes Haldwani, Space Build Moradabad, haldwani interior design companies for homes",

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
    canonical: "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-companies-for-homes",
  },

  openGraph: {
    title: "Haldwani Interior Design Companies For Homes in Haldwani | Space Build Moradabad",
    description: "Looking for haldwani interior design companies for homes in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    url: "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-companies-for-homes",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Interior Design Companies For Homes in Haldwani | Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Haldwani Interior Design Companies For Homes in Haldwani | Space Build Moradabad",
    description: "Looking for haldwani interior design companies for homes in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Haldwani Interior Design Companies For Homes in Haldwani | Space Build Moradabad",
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
