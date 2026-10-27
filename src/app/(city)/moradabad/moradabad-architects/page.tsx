
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Moradabad Architects | Choosing the Right Team for Your Home | Space Build",

  description:
    "Searching for Moradabad architects? Learn about services, design styles, selection tips, fees and planning steps for homes, with guidance from Space Build. Book a free consultation today.",

  keywords: [
    "Moradabad architects",
    "architects in Moradabad",
    "residential architects",
    "house design Moradabad",
    "home architect",
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
      "https://www.spacebuild.co.in/moradabad/architects",
  },

  openGraph: {
    title:
      "Moradabad Architects | Choosing the Right Team for Your Home | Space Build",
    description:
      "Searching for Moradabad architects? Learn about services, design styles, selection tips, fees and planning steps for homes, with guidance from Space Build. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/moradabad/architects",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Moradabad Architects - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moradabad Architects | Space Build",
    description:
      "Explore architectural services, home design styles, fees and tips for choosing the right residential architect in Moradabad.",
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
