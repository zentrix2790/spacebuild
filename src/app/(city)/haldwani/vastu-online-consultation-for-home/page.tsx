import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Online Consultation for Home: Remote House Vastu Guide | Space Build",

  description:
    "Looking for Vastu online consultation for your home? Learn how remote house Vastu review works, what it covers, how to prepare your floor plan and how to choose a reliable consultant. Space Build, Haldwani. Visit spacebuild.co.in.",

  keywords:
    "Vastu online consultation for home, online Vastu for house, home Vastu consultation online, Vastu floor plan analysis online, online Vastu for flat, online Vastu for new house, online Vastu for existing house, Vastu video call consultation, remote Vastu consultation, Vastu for main entrance, Vastu for kitchen, Vastu for bedroom, Vastu for pooja room, Vastu consultant online, online Vastu service, Vastu consultant in Haldwani, Vastu consultant near me, Vastu remedies without demolition, Vastu consultant Uttarakhand, Vastu consultant Nainital district, Space Build Haldwani, Space Build Vastu",

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
      "https://www.spacebuild.co.in/haldwani/vastu-online-consultation-for-home",
  },

  openGraph: {
    title:
      "Vastu Online Consultation for Home: Remote House Vastu Guide | Space Build",
    description:
      "Looking for Vastu online consultation for your home? Learn how remote house Vastu review works, what it covers, how to prepare your floor plan and how to choose a reliable consultant. Space Build, Haldwani. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/haldwani/vastu-online-consultation-for-home",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Online Consultation for Home - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Online Consultation for Home: Remote House Vastu Guide | Space Build",
    description:
      "Looking for Vastu online consultation for your home? Learn how remote house Vastu review works, what it covers, how to prepare your floor plan and how to choose a reliable consultant. Space Build, Haldwani. Visit spacebuild.co.in.",
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