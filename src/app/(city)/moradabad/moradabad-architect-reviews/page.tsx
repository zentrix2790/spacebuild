
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Moradabad Architect Reviews | How to Read and Use Them Wisely | Space Build",

  description:
    "Checking Moradabad architect reviews? Learn how to read ratings, spot fake feedback and verify claims before you hire, with guidance from Space Build. Book a free consultation today.",

  keywords: [
    "Moradabad architect reviews",
    "architect reviews Moradabad",
    "architect ratings",
    "architect testimonials",
    "architect reputation",
    "residential architect",
    "home architect",
    "house design Moradabad",
    "building plan",
    "floor plan design",
    "3D elevation design",
    "architect selection",
    "client feedback",
    "interior design Moradabad",
    "modular kitchen design",
    "Vastu planning",
    "home construction planning",
    "Space Build Haldwani",
    "Space Build",
    "design consultation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/moradabad/architect-reviews",
  },

  openGraph: {
    title:
      "Moradabad Architect Reviews | How to Read and Use Them Wisely | Space Build",
    description:
      "Checking Moradabad architect reviews? Learn how to read ratings, spot fake feedback and verify claims before you hire, with guidance from Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/moradabad/architect-reviews",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Moradabad Architect Reviews - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moradabad Architect Reviews | Space Build",
    description:
      "Learn how to assess architect ratings, verify client feedback and evaluate an architect's reputation before hiring in Moradabad.",
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
