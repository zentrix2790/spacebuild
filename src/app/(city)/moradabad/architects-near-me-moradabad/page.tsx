
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architects Near Me in Moradabad | How to Find a Local Expert | Space Build",

  description:
    "Searching for architects near me in Moradabad? Learn the benefits of choosing local, what to check and how to compare options, with guidance from Space Build. Book a free consultation today.",

  keywords: [
    "architects near me Moradabad",
    "local architect Moradabad",
    "architect in Moradabad",
    "residential architect",
    "home architect",
    "house design Moradabad",
    "building plan",
    "floor plan design",
    "3D elevation design",
    "architect fees",
    "site visit",
    "interior design Moradabad",
    "modular kitchen design",
    "Vastu planning",
    "home construction planning",
    "Space Build Haldwani",
    "Space Build",
    "custom home design",
    "home renovation",
    "design consultation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/moradabad/architects-near-me",
  },

  openGraph: {
    title:
      "Architects Near Me in Moradabad | How to Find a Local Expert | Space Build",
    description:
      "Searching for architects near me in Moradabad? Learn the benefits of choosing local, what to check and how to compare options, with guidance from Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/moradabad/architects-near-me",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Local Architects in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Architects Near Me in Moradabad | Space Build",
    description:
      "Learn how to find and compare local architects in Moradabad for home design, floor plans, interiors and construction planning.",
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
