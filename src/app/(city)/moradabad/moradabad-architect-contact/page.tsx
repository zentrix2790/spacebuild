
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Moradabad Architect Contact | How to Reach and Brief the Right Expert | Space Build",

  description:
    "Need a Moradabad architect contact? Learn how to find, verify and reach an architect, what to share in your first call and how to prepare, with guidance from Space Build. Book a free consultation.",

  keywords: [
    "Moradabad architect contact",
    "architect contact Moradabad",
    "contact architect",
    "architect in Moradabad",
    "residential architect",
    "home architect",
    "house design Moradabad",
    "building plan",
    "floor plan design",
    "3D elevation design",
    "architect consultation",
    "first meeting with architect",
    "interior design Moradabad",
    "modular kitchen design",
    "Vastu planning",
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
      "https://www.spacebuild.co.in/moradabad/architect-contact",
  },

  openGraph: {
    title:
      "Moradabad Architect Contact | How to Reach and Brief the Right Expert | Space Build",
    description:
      "Need a Moradabad architect contact? Learn how to find, verify and reach an architect, what to share in your first call and how to prepare, with guidance from Space Build. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/moradabad/architect-contact",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Moradabad Architect Contact - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moradabad Architect Contact | Space Build",
    description:
      "Learn how to contact an architect in Moradabad, prepare for your first consultation and explain your home design requirements.",
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
