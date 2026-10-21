import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Online Service: Remote Home & Business Vastu Consultation | Space Build",

  description:
    "Looking for a Vastu online service? Learn how remote Vastu consultation works for homes, plots, shops and offices, what to prepare and how to choose a reliable provider. Space Build, Haldwani. Visit spacebuild.co.in.",

  keywords:
    "Vastu online service, online Vastu service India, online Vastu consultation, Vastu consultant online, Vastu expert online, online Vastu for home, online Vastu for plot, online Vastu for shop, online Vastu for office, Vastu floor plan analysis, Vastu video call consultation, remote Vastu consultation, Vastu service Haldwani, Vastu consultant in Haldwani, Vastu consultant near me, Vastu remedies without demolition, Vastu service Uttarakhand, Vastu consultant Nainital district, Space Build Haldwani, Space Build Vastu",

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
    canonical: "https://www.spacebuild.co.in/haldwani/vastu-online-service",
  },

  openGraph: {
    title:
      "Vastu Online Service: Remote Home & Business Vastu Consultation | Space Build",
    description:
      "Looking for a Vastu online service? Learn how remote Vastu consultation works for homes, plots, shops and offices, what to prepare and how to choose a reliable provider. Space Build, Haldwani. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/vastu-online-service",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Online Service - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Online Service: Remote Home & Business Vastu Consultation | Space Build",
    description:
      "Looking for a Vastu online service? Learn how remote Vastu consultation works for homes, plots, shops and offices, what to prepare and how to choose a reliable provider. Space Build, Haldwani. Visit spacebuild.co.in.",
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