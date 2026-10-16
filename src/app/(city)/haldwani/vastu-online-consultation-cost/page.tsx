import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Online Consultation Cost: What Affects Fees & Value | Space Build",

  description:
    "Curious about Vastu online consultation cost? Learn what shapes the fee, what a fair service includes, which charges to watch for and how to choose wisely. Honest guidance from Space Build, Haldwani. Visit spacebuild.co.in.",

  keywords:
    "Vastu online consultation cost, online Vastu consultation charges, Vastu online consultation fees, cost of online Vastu consultant, Vastu consultation cost India, online Vastu for home cost, online Vastu for shop cost, online Vastu for plot cost, Vastu floor plan review cost, Vastu video call consultation charges, affordable online Vastu consultation, Vastu consultant online, online Vastu service, Vastu consultant in Haldwani, Vastu consultant near me, Vastu remedies without demolition, Vastu consultant Uttarakhand, Vastu consultant Nainital district, Space Build Haldwani, Space Build Vastu",

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
      "https://www.spacebuild.co.in/haldwani/vastu-online-consultation-cost",
  },

  openGraph: {
    title:
      "Vastu Online Consultation Cost: What Affects Fees & Value | Space Build",
    description:
      "Curious about Vastu online consultation cost? Learn what shapes the fee, what a fair service includes, which charges to watch for and how to choose wisely. Honest guidance from Space Build, Haldwani. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/haldwani/vastu-online-consultation-cost",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Online Consultation Cost - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Online Consultation Cost: What Affects Fees & Value | Space Build",
    description:
      "Curious about Vastu online consultation cost? Learn what shapes the fee, what a fair service includes, which charges to watch for and how to choose wisely. Honest guidance from Space Build, Haldwani. Visit spacebuild.co.in.",
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