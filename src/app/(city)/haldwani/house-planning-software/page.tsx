import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "House Planning Software | Space Build Haldwani",

  description:
    "Choosing house planning software? Learn the types of tools, from free floor plan apps to 3D modelling and professional CAD, what each can and cannot do, how to use them well, and when to involve experts, with Space Build Haldwani.",

  keywords:
    "house planning software, home design software, floor plan software, house plan software free, 3D house planning software, house design software for beginners, CAD software for house plans, BIM software for homes, Sweet Home 3D, SketchUp, Floorplanner, Planner 5D, RoomSketcher, Chief Architect, house plan drawing, plan a house online, house planning tips, design and build Haldwani, house construction Haldwani, interior designer Haldwani, interior design Haldwani, Space Build Haldwani",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/house-planning-software",
  },

  openGraph: {
    title:
      "House Planning Software | Space Build Haldwani",
    description:
      "Choosing house planning software? Learn the types of tools, from free floor plan apps to 3D modelling and professional CAD, what each can and cannot do, how to use them well, and when to involve experts, with Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/house-planning-software",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "House Planning Software - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "House Planning Software | Space Build Haldwani",
    description:
      "Choosing house planning software? Learn the types of tools, from free floor plan apps to 3D modelling and professional CAD, what each can and cannot do, how to use them well, and when to involve experts, with Space Build Haldwani.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.region": "IN-UT",
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