
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Moradabad Architect Portfolio | How to Read and Judge Past Work | Space Build",

  description:
    "Reviewing a Moradabad architect portfolio? Learn what to look for in plans, photos and completed homes, and the questions to ask, with guidance from Space Build. Book a free consultation.",

  keywords: [
    "Moradabad architect portfolio",
    "architect portfolio Moradabad",
    "architect past work",
    "residential architect",
    "home architect",
    "house design Moradabad",
    "building plan",
    "floor plan design",
    "3D elevation design",
    "completed projects",
    "architect selection",
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
      "https://www.spacebuild.co.in/moradabad/architect-portfolio",
  },

  openGraph: {
    title:
      "Moradabad Architect Portfolio | How to Read and Judge Past Work | Space Build",
    description:
      "Reviewing a Moradabad architect portfolio? Learn what to look for in plans, photos and completed homes, and the questions to ask, with guidance from Space Build. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/moradabad/architect-portfolio",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Moradabad Architect Portfolio - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moradabad Architect Portfolio | Space Build",
    description:
      "Learn how to evaluate an architect's portfolio by reviewing floor plans, design photos, completed homes and project experience.",
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
