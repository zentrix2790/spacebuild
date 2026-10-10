import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Affordable Interior Designers Mumbai in Haldwani | Space Build Moradabad",

  description: "Looking for best affordable interior designers mumbai in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",

  keywords: "Best Affordable Interior Designers Mumbai Haldwani, Space Build Moradabad, best affordable interior designers mumbai",

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
    canonical: "https://www.spacebuild.co.in/haldwani/best-affordable-interior-designers-mumbai",
  },

  openGraph: {
    title: "Best Affordable Interior Designers Mumbai in Haldwani | Space Build Moradabad",
    description: "Looking for best affordable interior designers mumbai in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    url: "https://www.spacebuild.co.in/haldwani/best-affordable-interior-designers-mumbai",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Affordable Interior Designers Mumbai in Haldwani | Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Affordable Interior Designers Mumbai in Haldwani | Space Build Moradabad",
    description: "Looking for best affordable interior designers mumbai in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Affordable Interior Designers Mumbai in Haldwani | Space Build Moradabad",
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
