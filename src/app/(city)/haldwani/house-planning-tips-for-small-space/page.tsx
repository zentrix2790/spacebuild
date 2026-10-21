import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "House Planning Tips for Small Space | Space Build Haldwani",

  description:
    "Explore smart house planning tips for small space with Space Build Haldwani. Discover space-saving layouts, storage ideas, natural lighting and modern home design solutions.",

  keywords:
    "house planning tips for small space, small house planning, small home design ideas, space saving home design, small house floor plan, compact home planning, small house interior design, modern small house design, space optimization ideas, small home architecture, smart storage solutions, compact house layout, affordable house planning, small bedroom design, small living room design, modular kitchen for small homes, Space Build Haldwani, house planning in Haldwani, residential architect Haldwani, home design tips India",

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
      "https://www.spacebuild.co.in/house-planning-tips-for-small-space",
  },

  openGraph: {
    title:
      "House Planning Tips for Small Space | Space Build Haldwani",
    description:
      "Explore smart house planning tips for small space with Space Build Haldwani. Discover space-saving layouts, storage ideas, natural lighting and modern home design solutions.",
    url: "https://www.spacebuild.co.in/house-planning-tips-for-small-space",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "House Planning Tips for Small Space - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "House Planning Tips for Small Space | Space Build Haldwani",
    description:
      "Explore smart house planning tips for small space with Space Build Haldwani. Discover space-saving layouts, storage ideas, natural lighting and modern home design solutions.",
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