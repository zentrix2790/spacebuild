import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Online Free Consultation: What to Expect & How to Use It | Space Build",

  description:
    "Looking for a Vastu online free consultation? Learn what a free session can and cannot cover, how to prepare, red flags to avoid and when to choose a full review. Honest guidance from Space Build, Haldwani. Visit spacebuild.co.in.",

  keywords:
    "Vastu online free consultation, free Vastu consultation online, free Vastu tips online, free Vastu advice, free Vastu check for home, free Vastu floor plan check, free Vastu consultation India, online Vastu consultant, online Vastu service, Vastu consultation by video call, free Vastu guidance for flat, free Vastu for shop, Vastu consultant in Haldwani, Vastu consultant near me, Vastu remedies without demolition, Vastu consultant Uttarakhand, Vastu consultant Nainital district, Space Build Haldwani, Space Build Vastu",

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
      "https://www.spacebuild.co.in/haldwani/vastu-online-free-consultation",
  },

  openGraph: {
    title:
      "Vastu Online Free Consultation: What to Expect & How to Use It | Space Build",
    description:
      "Looking for a Vastu online free consultation? Learn what a free session can and cannot cover, how to prepare, red flags to avoid and when to choose a full review. Honest guidance from Space Build, Haldwani. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/haldwani/vastu-online-free-consultation",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Online Free Consultation - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Online Free Consultation: What to Expect & How to Use It | Space Build",
    description:
      "Looking for a Vastu online free consultation? Learn what a free session can and cannot cover, how to prepare, red flags to avoid and when to choose a full review. Honest guidance from Space Build, Haldwani. Visit spacebuild.co.in.",
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