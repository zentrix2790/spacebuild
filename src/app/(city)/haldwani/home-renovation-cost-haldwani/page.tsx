
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Renovation Cost Haldwani | Space Build Haldwani",

  description:
    "Understand home renovation cost in Haldwani: indicative per sq ft ranges, room-wise costs for kitchens, bathrooms, flooring, and waterproofing, hidden costs, and ways to save, with a free estimate from Space Build Haldwani.",

  keywords: [
    "home renovation cost Haldwani",
    "house renovation cost",
    "renovation cost per sq ft",
    "kitchen renovation cost",
    "bathroom renovation cost",
    "flooring cost",
    "waterproofing cost",
    "painting cost per sq ft",
    "electrical rewiring cost",
    "plumbing replacement cost",
    "full home renovation cost",
    "partial renovation cost",
    "renovation budget planning",
    "renovation contingency",
    "renovation cost calculator",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home renovation Uttarakhand",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/home-renovation-cost-haldwani",
  },

  openGraph: {
    title: "Home Renovation Cost Haldwani | Space Build Haldwani",

    description:
      "Understand home renovation cost in Haldwani: indicative per sq ft ranges, room-wise costs for kitchens, bathrooms, flooring, and waterproofing, hidden costs, and ways to save, with a free estimate from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/home-renovation-cost-haldwani",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Home Renovation Cost in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Home Renovation Cost Haldwani | Space Build Haldwani",

    description:
      "Explore renovation costs per sq ft, kitchen and bathroom budgets, hidden expenses, and practical ways to save on home renovation in Haldwani.",

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
