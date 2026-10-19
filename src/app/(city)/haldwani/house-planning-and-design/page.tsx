import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "House Planning and Design in Haldwani: Complete Home Planning Guide | Space Build",

  description:
    "Planning a house in Haldwani? Learn how house planning and design works, from plot study and floor plans to 3D elevations, budget, Vastu and approvals. Practical guidance from Space Build, spacebuild.co.in.",

  keywords:
    "house planning and design, house planning Haldwani, house design Haldwani, home design services, house plan and elevation, floor plan design, 3D elevation design, residential house planning, independent house design, duplex house design, budget house design, Vastu friendly house plan, house design as per plot size, home planning guide, map approval Haldwani, architect in Haldwani, house construction planning, house design Nainital district, house design Kathgodam, house design Uttarakhand, Space Build Haldwani, Space Build house design",

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
      "https://www.spacebuild.co.in/haldwani/house-planning-and-design-in-haldwani",
  },

  openGraph: {
    title:
      "House Planning and Design in Haldwani: Complete Home Planning Guide | Space Build",
    description:
      "Planning a house in Haldwani? Learn how house planning and design works, from plot study and floor plans to 3D elevations, budget, Vastu and approvals. Practical guidance from Space Build, spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/haldwani/house-planning-and-design-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "House Planning and Design in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "House Planning and Design in Haldwani: Complete Home Planning Guide | Space Build",
    description:
      "Planning a house in Haldwani? Learn how house planning and design works, from plot study and floor plans to 3D elevations, budget, Vastu and approvals. Practical guidance from Space Build, spacebuild.co.in.",
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