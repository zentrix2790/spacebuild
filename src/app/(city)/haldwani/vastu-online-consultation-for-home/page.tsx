import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Online Consultation For Home in Haldwani | Space Build Moradabad",

  description: "Looking for vastu online consultation for home in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",

  keywords: "Vastu Online Consultation For Home Haldwani, Space Build Moradabad, vastu online consultation for home",

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
    canonical: "https://www.spacebuild.co.in/haldwani/vastu-online-consultation-for-home",
  },

  openGraph: {
    title: "Vastu Online Consultation For Home in Haldwani | Space Build Moradabad",
    description: "Looking for vastu online consultation for home in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    url: "https://www.spacebuild.co.in/haldwani/vastu-online-consultation-for-home",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Online Consultation For Home in Haldwani | Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Online Consultation For Home in Haldwani | Space Build Moradabad",
    description: "Looking for vastu online consultation for home in Haldwani? Space Build Moradabad offers expert design, construction, and consultation services. Visit https://www.spacebuild.co.in/ today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Online Consultation For Home in Haldwani | Space Build Moradabad",
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
