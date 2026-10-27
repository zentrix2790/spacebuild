
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Best Architect in Moradabad | How to Find the Right Fit | Space Build",

  description:
    "Looking for the best architect in Moradabad? Learn the qualities to check, questions to ask, fees and process for your home, with guidance from Space Build. Book a free consultation today.",

  keywords: [
    "best architect in Moradabad",
    "top architect Moradabad",
    "residential architect",
    "home architect",
    "house design Moradabad",
    "building plan",
    "floor plan design",
    "3D elevation design",
    "villa design",
    "duplex house design",
    "interior design Moradabad",
    "modular kitchen design",
    "architect fees",
    "Vastu planning",
    "space planning",
    "home renovation",
    "Space Build Haldwani",
    "Space Build",
    "custom home design",
    "design consultation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/moradabad/best-architect",
  },

  openGraph: {
    title:
      "Best Architect in Moradabad | How to Find the Right Fit | Space Build",
    description:
      "Looking for the best architect in Moradabad? Learn the qualities to check, questions to ask, fees and process for your home, with guidance from Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/moradabad/best-architect",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Architect in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Architect in Moradabad | Space Build",
    description:
      "Find the right architect in Moradabad with tips on experience, portfolio, fees, design process and home planning.",
    images: [
      "https://www.spacebuild.co.in/spacebuild_logo.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Moradabad, Uttar Pradesh",
    "geo.region": "IN-UP",
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
