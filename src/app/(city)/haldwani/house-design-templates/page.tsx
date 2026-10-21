import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "House Design Templates | Space Build Haldwani",

  description:
    "Thinking of using a house design template or ready-made plan? Learn the types, benefits, limits, how to adapt a template to your plot, climate, structure, and approvals, and when to customize, with Space Build Haldwani.",

  keywords:
    "house design templates, ready made house plans, readymade house design, standard house plans, house plan templates, 2BHK house plan template, 3BHK house plan template, duplex house plan template, adapt house plan to plot, house plan customization, house plan approval, house plan structural check, stock house plans, house plan copyright, house plan for small plot, design and build Haldwani, house construction Haldwani, interior designer Haldwani, interior design Haldwani, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/house-design-templates",
  },

  openGraph: {
    title:
      "House Design Templates | Space Build Haldwani",
    description:
      "Thinking of using a house design template or ready-made plan? Learn the types, benefits, limits, how to adapt a template to your plot, climate, structure, and approvals, and when to customize, with Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/house-design-templates",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "House Design Templates - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "House Design Templates | Space Build Haldwani",
    description:
      "Thinking of using a house design template or ready-made plan? Learn the types, benefits, limits, how to adapt a template to your plot, climate, structure, and approvals, and when to customize, with Space Build Haldwani.",
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