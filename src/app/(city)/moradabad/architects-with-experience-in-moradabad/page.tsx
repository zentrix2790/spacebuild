
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architects with Experience in Moradabad | What to Look For | Space Build",

  description:
    "Looking for architects with experience in Moradabad? Learn how to judge real experience, review past work and ask the right questions, with guidance from Space Build. Book a free consultation.",

  keywords: [
    "architects with experience in Moradabad",
    "experienced architect Moradabad",
    "architect in Moradabad",
    "residential architect",
    "home architect",
    "house design Moradabad",
    "building plan",
    "floor plan design",
    "3D elevation design",
    "architect portfolio",
    "architect fees",
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
      "https://www.spacebuild.co.in/moradabad/experienced-architects",
  },

  openGraph: {
    title:
      "Architects with Experience in Moradabad | What to Look For | Space Build",
    description:
      "Looking for architects with experience in Moradabad? Learn how to judge real experience, review past work and ask the right questions, with guidance from Space Build. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/moradabad/experienced-architects",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Experienced Architects in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Experienced Architects in Moradabad | Space Build",
    description:
      "Learn how to evaluate an architect's experience, review portfolios and choose the right professional for your home project in Moradabad.",
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
