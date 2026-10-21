import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Best House Design Apps in 2026 | Free & Paid Home Planning Tools | Space Build Haldwani",

  description:
    "Looking for the best house design apps? Compare top home design, floor plan and 3D planning apps for Android, iOS and PC, and learn how Space Build in Haldwani turns your app design into a real home.",

  keywords:
    "best house design apps, home design apps, house design app free, 3D house design app, floor plan app, house planning app, home design software, best app for house plan, house map design app, interior design app, Android house design app, iPhone home design app, house design app India, architect in Haldwani, home construction Haldwani, Space Build Haldwani, house planning Haldwani, builders in Haldwani",

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
      "https://www.spacebuild.co.in/best-house-design-apps",
  },

  openGraph: {
    title:
      "Best House Design Apps in 2026 | Free & Paid Home Planning Tools | Space Build Haldwani",
    description:
      "Looking for the best house design apps? Compare top home design, floor plan and 3D planning apps for Android, iOS and PC, and learn how Space Build in Haldwani turns your app design into a real home.",
    url: "https://www.spacebuild.co.in/best-house-design-apps",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best House Design Apps in 2026 - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best House Design Apps in 2026 | Free & Paid Home Planning Tools | Space Build Haldwani",
    description:
      "Looking for the best house design apps? Compare top home design, floor plan and 3D planning apps for Android, iOS and PC, and learn how Space Build in Haldwani turns your app design into a real home.",
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