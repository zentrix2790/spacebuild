
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Renovation Services in Haldwani | Space Build Haldwani",

  description:
    "Explore home renovation services in Haldwani, from kitchens, bathrooms, and flooring to waterproofing, wiring, ceilings, and full-home remodeling. Learn how to plan, budget, and choose a provider with Space Build Haldwani.",

  keywords: [
    "home renovation services in Haldwani",
    "house renovation Haldwani",
    "kitchen renovation Haldwani",
    "bathroom renovation Haldwani",
    "flooring renovation",
    "waterproofing services",
    "electrical upgrade services",
    "plumbing upgrade services",
    "false ceiling renovation",
    "full home renovation",
    "old house renovation",
    "renovation planning",
    "renovation budget",
    "renovation contractor Haldwani",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home remodeling Uttarakhand",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/home-renovation-services-in-haldwani",
  },

  openGraph: {
    title: "Home Renovation Services in Haldwani | Space Build Haldwani",

    description:
      "Explore home renovation services in Haldwani, from kitchens, bathrooms, and flooring to waterproofing, wiring, ceilings, and full-home remodeling. Learn how to plan, budget, and choose a provider with Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/home-renovation-services-in-haldwani",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Home Renovation Services in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Home Renovation Services in Haldwani | Space Build Haldwani",

    description:
      "Explore kitchen, bathroom, flooring, waterproofing, electrical, plumbing, and full-home renovation services in Haldwani.",

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
