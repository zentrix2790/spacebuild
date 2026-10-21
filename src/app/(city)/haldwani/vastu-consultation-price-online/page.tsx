import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Consultation Price Online: Fees, Factors & Value | Space Build",

  description:
    "Wondering about Vastu consultation price online? Learn what affects online Vastu fees, what is included, how to compare offers and avoid hidden charges. Honest guidance from Space Build, Haldwani. Visit spacebuild.co.in.",

  keywords:
    "Vastu consultation price online, online Vastu consultation fees, online Vastu consultant charges, Vastu consultation cost online, Vastu consultant price India, Vastu floor plan analysis fee, Vastu video call consultation price, online Vastu for home cost, online Vastu for shop cost, online Vastu for plot cost, affordable Vastu consultation, Vastu service charges, Vastu consultant online, Vastu consultant in Haldwani, Vastu consultant near me, Vastu remedies without demolition, Vastu consultant Uttarakhand, Vastu consultant Nainital district, Space Build Haldwani, Space Build Vastu",

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
      "https://www.spacebuild.co.in/vastu-consultation-price-online",
  },

  openGraph: {
    title:
      "Vastu Consultation Price Online: Fees, Factors & Value | Space Build",
    description:
      "Wondering about Vastu consultation price online? Learn what affects online Vastu fees, what is included, how to compare offers and avoid hidden charges. Honest guidance from Space Build, Haldwani. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/vastu-consultation-price-online",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultation Price Online - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Consultation Price Online: Fees, Factors & Value | Space Build",
    description:
      "Wondering about Vastu consultation price online? Learn what affects online Vastu fees, what is included, how to compare offers and avoid hidden charges. Honest guidance from Space Build, Haldwani. Visit spacebuild.co.in.",
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