
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architect in Moradabad | How to Choose the Right One | Space Build",

  description:
    "Looking for an architect in Moradabad? Learn what architects do, how to choose one, costs, process and planning tips for homes, with guidance from Space Build. Book a free consultation.",

  keywords: [
    "architect in Moradabad",
    "architect Moradabad",
    "home architect",
    "house design Moradabad",
    "residential architect",
    "building plan",
    "house floor plan",
    "3D elevation design",
    "interior design Moradabad",
    "modular kitchen design",
    "architect fees",
    "home construction planning",
    "Vastu planning",
    "space planning",
    "Space Build Haldwani",
    "Space Build",
    "custom home design",
    "interior designer",
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
      "https://www.spacebuild.co.in/moradabad/architect",
  },

  openGraph: {
    title:
      "Architect in Moradabad | How to Choose the Right One | Space Build",
    description:
      "Looking for an architect in Moradabad? Learn what architects do, how to choose one, costs, process and planning tips for homes, with guidance from Space Build. Book a free consultation.",
    url: "https://www.spacebuild.co.in/moradabad/architect",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architect in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Architect in Moradabad | Space Build",
    description:
      "Learn how to choose an architect in Moradabad, understand design costs and plan your home with confidence.",
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
