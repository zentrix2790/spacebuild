
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen for Small Space in Haldwani | Compact Designs by Space Build",

  description:
    "Planning a modular kitchen for small space in Haldwani? Discover compact layouts, space-saving storage, colours and hardware ideas with Space Build. Book a free consultation today.",

  keywords: [
    "modular kitchen for small space",
    "small kitchen design Haldwani",
    "compact modular kitchen",
    "small kitchen layout",
    "space saving kitchen",
    "small kitchen storage ideas",
    "kitchen for small flat",
    "L shaped small kitchen",
    "straight kitchen design",
    "parallel small kitchen",
    "pull-out storage",
    "corner carousel",
    "light colour kitchen",
    "BWP plywood kitchen",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "modular kitchen Haldwani",
    "custom kitchen",
    "kitchen makeover",
    "kitchen designer",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-small-space",
  },

  openGraph: {
    title:
      "Modular Kitchen for Small Space in Haldwani | Compact Designs by Space Build",
    description:
      "Planning a modular kitchen for small space in Haldwani? Discover compact layouts, space-saving storage, colours and hardware ideas with Space Build. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-small-space",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Compact Modular Kitchen Designs for Small Spaces by Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Modular Kitchen for Small Space in Haldwani | Space Build",
    description:
      "Discover compact kitchen layouts, clever storage solutions, colours and hardware ideas for small Haldwani homes.",
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
