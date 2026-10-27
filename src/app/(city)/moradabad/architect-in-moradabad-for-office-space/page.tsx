
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architect in Moradabad for Office Space | Workplace Design by Space Build",

  description:
    "Need an architect in Moradabad for office space? Learn about layout planning, workstations, lighting, approvals and selection tips for workplaces, with guidance from Space Build. Book a free consultation.",

  keywords: [
    "architect in Moradabad for office space",
    "office architect Moradabad",
    "office interior design",
    "office space planning",
    "workplace design",
    "commercial architect",
    "office layout design",
    "office floor plan",
    "3D office design",
    "conference room design",
    "reception design",
    "office renovation",
    "office furniture layout",
    "commercial interior",
    "modular office design",
    "Space Build Haldwani",
    "Space Build",
    "architect fees",
    "office design consultation",
    "workspace planning",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/moradabad/architect-for-office-space",
  },

  openGraph: {
    title:
      "Architect in Moradabad for Office Space | Workplace Design by Space Build",
    description:
      "Need an architect in Moradabad for office space? Learn about layout planning, workstations, lighting, approvals and selection tips for workplaces, with guidance from Space Build. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/moradabad/architect-for-office-space",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Office Space Architect in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Office Space Architect in Moradabad | Space Build",
    description:
      "Explore office layouts, workplace planning, lighting, workstations and commercial design services in Moradabad.",
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
