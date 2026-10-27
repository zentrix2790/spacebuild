
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Moradabad Architectural Firm | Choosing the Right Team for Your Project | Space Build",

  description:
    "Looking for a Moradabad architectural firm? Learn how firms work, what services they offer and how to choose one for your home, with guidance from Space Build. Book a free consultation today.",

  keywords: [
    "Moradabad architectural firm",
    "architectural firm Moradabad",
    "architecture firm",
    "residential architects",
    "home architect",
    "house design Moradabad",
    "building plan",
    "floor plan design",
    "3D elevation design",
    "villa design",
    "duplex house design",
    "interior design Moradabad",
    "modular kitchen design",
    "Vastu planning",
    "architect fees",
    "home construction planning",
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
      "https://www.spacebuild.co.in/moradabad/architectural-firm",
  },

  openGraph: {
    title:
      "Moradabad Architectural Firm | Choosing the Right Team for Your Project | Space Build",
    description:
      "Looking for a Moradabad architectural firm? Learn how firms work, what services they offer and how to choose one for your home, with guidance from Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/moradabad/architectural-firm",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Moradabad Architectural Firm - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moradabad Architectural Firm | Space Build",
    description:
      "Explore architectural firm services and learn how to choose the right team for residential design, floor plans and home construction planning in Moradabad.",
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
