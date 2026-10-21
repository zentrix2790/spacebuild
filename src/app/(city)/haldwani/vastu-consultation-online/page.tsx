import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Consultation Online: Room-by-Room Guide | Space Build Haldwani",

  description:
    "Get more from a Vastu consultation online with this room-by-room guide. See what to share, what to ask, and which simple adjustments to expect for each area of your home, with guidance from Space Build Haldwani.",

  keywords:
    "Vastu consultation online, room by room Vastu guide, Vastu questions for entrance, Vastu questions for kitchen, Vastu questions for bedroom, Vastu questions for pooja room, Vastu questions for bathroom, Vastu for staircase, Vastu for balcony, Vastu for study room, Vastu checklist for home, Vastu remedies without demolition, Vastu report questions, Vastu friendly interior, Vastu shastra tips, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home planning, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/vastu-consultation-online",
  },

  openGraph: {
    title:
      "Vastu Consultation Online: Room-by-Room Guide | Space Build Haldwani",
    description:
      "Get more from a Vastu consultation online with this room-by-room guide. See what to share, what to ask, and which simple adjustments to expect for each area of your home, with guidance from Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/vastu-consultation-online",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultation Online - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Consultation Online: Room-by-Room Guide | Space Build Haldwani",
    description:
      "Get more from a Vastu consultation online with this room-by-room guide. See what to share, what to ask, and which simple adjustments to expect for each area of your home, with guidance from Space Build Haldwani.",
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