
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architect for Residential Building in Moradabad | Home Planning by Space Build",

  description:
    "Need an architect for a residential building in Moradabad? Learn about planning, layouts, approvals, costs and selection tips for homes, with guidance from Space Build. Book a free consultation.",

  keywords: [
    "architect for residential building in Moradabad",
    "residential architect Moradabad",
    "home architect",
    "house design Moradabad",
    "residential building design",
    "building plan",
    "floor plan design",
    "3D elevation design",
    "duplex house design",
    "villa design",
    "apartment planning",
    "interior design Moradabad",
    "modular kitchen design",
    "Vastu planning",
    "architect fees",
    "home construction planning",
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
      "https://www.spacebuild.co.in/moradabad/architect-for-residential-building",
  },

  openGraph: {
    title:
      "Architect for Residential Building in Moradabad | Home Planning by Space Build",
    description:
      "Need an architect for a residential building in Moradabad? Learn about planning, layouts, approvals, costs and selection tips for homes, with guidance from Space Build. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/moradabad/architect-for-residential-building",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Building Architect in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Residential Building Architect in Moradabad | Space Build",
    description:
      "Explore residential planning, floor layouts, building approvals, design costs and home architecture services in Moradabad.",
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
