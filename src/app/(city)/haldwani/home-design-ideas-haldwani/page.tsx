import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Home Design Ideas in Haldwani: Practical Ideas for Every Plot | Space Build",

  description:
    "Looking for home design ideas in Haldwani? Explore practical ideas for layouts, elevations, interiors, balconies, courtyards, Vastu-friendly planning and monsoon-ready design. Space Build, spacebuild.co.in.",

  keywords:
    "home design ideas Haldwani, house design ideas, modern home design ideas, small house design ideas, budget home design ideas, front elevation ideas, duplex house design ideas, Vastu friendly home design, home design for hill facing plot, house design for sloped plot, balcony design ideas, courtyard house design, kitchen design ideas, interior design ideas for home, monsoon friendly house design, house plan Haldwani, architect in Haldwani, home design Nainital district, home design Kathgodam, home design Uttarakhand, Space Build Haldwani, Space Build house design",

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
      "https://www.spacebuild.co.in/haldwani/home-design-ideas-haldwani",
  },

  openGraph: {
    title:
      "Home Design Ideas in Haldwani: Practical Ideas for Every Plot | Space Build",
    description:
      "Looking for home design ideas in Haldwani? Explore practical ideas for layouts, elevations, interiors, balconies, courtyards, Vastu-friendly planning and monsoon-ready design. Space Build, spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/haldwani/home-design-ideas-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Home Design Ideas in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Home Design Ideas in Haldwani: Practical Ideas for Every Plot | Space Build",
    description:
      "Looking for home design ideas in Haldwani? Explore practical ideas for layouts, elevations, interiors, balconies, courtyards, Vastu-friendly planning and monsoon-ready design. Space Build, spacebuild.co.in.",
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