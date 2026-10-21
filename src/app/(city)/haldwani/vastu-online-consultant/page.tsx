import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Online Consultant | Online Vastu Consultation – Space Build Haldwani",

  description:
    "Looking for a Vastu online consultant? Learn how online Vastu consultations can help with home layouts, entrance direction, bedroom placement, kitchen planning, pooja rooms, and property design with Space Build Haldwani.",

  keywords:
    "Vastu online consultant, online Vastu consultation, online Vastu expert, Vastu consultant online, best online Vastu consultant, home Vastu consultation, online Vastu advice, Vastu for home, house plan Vastu, Vastu home design, Vastu for main entrance, bedroom Vastu, kitchen Vastu, pooja room Vastu, Vastu for new house, Vastu remedies, residential Vastu planning, Vastu Shastra consultation, Space Build Haldwani, online home planning consultation",

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
      "https://www.spacebuild.co.in/haldwani/vastu-online-consultant",
  },

  openGraph: {
    title:
      "Vastu Online Consultant | Online Vastu Consultation – Space Build Haldwani",
    description:
      "Looking for a Vastu online consultant? Learn how online Vastu consultations can help with home layouts, entrance direction, bedroom placement, kitchen planning, pooja rooms, and property design with Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/haldwani/vastu-online-consultant",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Online Consultant - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Online Consultant | Online Vastu Consultation – Space Build Haldwani",
    description:
      "Looking for a Vastu online consultant? Learn how online Vastu consultations can help with home layouts, entrance direction, bedroom placement, kitchen planning, pooja rooms, and property design with Space Build Haldwani.",
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