
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Hire an Architect in Moradabad | Step-by-Step Guide | Space Build",

  description:
    "Learn how to hire an architect in Moradabad with a clear step-by-step process. Check experience, fees, agreements and questions to ask, with guidance from Space Build. Book a free consultation.",

  keywords: [
    "how to hire an architect in Moradabad",
    "hire architect Moradabad",
    "architect selection",
    "residential architect",
    "home architect",
    "house design Moradabad",
    "building plan",
    "floor plan design",
    "3D elevation design",
    "architect fees",
    "architect agreement",
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
      "https://www.spacebuild.co.in/moradabad/how-to-hire-an-architect",
  },

  openGraph: {
    title:
      "How to Hire an Architect in Moradabad | Step-by-Step Guide | Space Build",
    description:
      "Learn how to hire an architect in Moradabad with a clear step-by-step process. Check experience, fees, agreements and questions to ask, with guidance from Space Build. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/moradabad/how-to-hire-an-architect",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Hire an Architect in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Hire an Architect in Moradabad | Space Build",
    description:
      "Follow a step-by-step guide to choosing an architect, comparing fees, reviewing agreements and planning your home in Moradabad.",
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
