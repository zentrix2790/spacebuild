import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Consultant Online: Scenarios and Packages | Space Build Haldwani",

  description:
    "Which online Vastu consultant service fits your situation? Compare packages and deliverables, see scenarios for flats, plots, offices, and renovations, and learn how to vet a consultant, with guidance from Space Build Haldwani.",

  keywords:
    "Vastu consultant online, online Vastu consultant packages, Vastu consultant for flat online, Vastu consultant for plot online, Vastu consultant for office online, Vastu for renovation online, Vastu quick review, Vastu detailed report, Vastu follow-up session, how to vet Vastu consultant, Vastu consultant deliverables, Vastu consultant pricing models, Vastu remedies without demolition, Vastu friendly interior, Vastu shastra tips, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home planning, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/vastu-consultant-online",
  },

  openGraph: {
    title:
      "Vastu Consultant Online: Scenarios and Packages | Space Build Haldwani",
    description:
      "Which online Vastu consultant service fits your situation? Compare packages and deliverables, see scenarios for flats, plots, offices, and renovations, and learn how to vet a consultant, with guidance from Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/vastu-consultant-online",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Online - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Consultant Online: Scenarios and Packages | Space Build Haldwani",
    description:
      "Which online Vastu consultant service fits your situation? Compare packages and deliverables, see scenarios for flats, plots, offices, and renovations, and learn how to vet a consultant, with guidance from Space Build Haldwani.",
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