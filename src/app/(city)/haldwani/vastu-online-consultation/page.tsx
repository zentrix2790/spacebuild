import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Online Consultation: Myths and Facts | Space Build Haldwani",

  description:
    "Is a Vastu online consultation worth it? Separate myths from facts: accuracy, guarantees, remedies, costs, and flats. Learn what to expect and how to apply the advice sensibly, with guidance from Space Build Haldwani.",

  keywords:
    "Vastu online consultation, Vastu online consultation myths, Vastu online consultation facts, is online Vastu reliable, online Vastu accuracy, Vastu guarantee myth, Vastu remedies myths, Vastu for flats online, Vastu consultation cost myths, Vastu without demolition, Vastu and interior design, how to apply Vastu advice, Vastu report tips, Vastu consultant red flags, Vastu shastra tips, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home planning, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/vastu-online-consultation",
  },

  openGraph: {
    title:
      "Vastu Online Consultation: Myths and Facts | Space Build Haldwani",
    description:
      "Is a Vastu online consultation worth it? Separate myths from facts: accuracy, guarantees, remedies, costs, and flats. Learn what to expect and how to apply the advice sensibly, with guidance from Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/haldwani/vastu-online-consultation",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Online Consultation: Myths and Facts - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Online Consultation: Myths and Facts | Space Build Haldwani",
    description:
      "Is a Vastu online consultation worth it? Separate myths from facts: accuracy, guarantees, remedies, costs, and flats. Learn what to expect and how to apply the advice sensibly, with guidance from Space Build Haldwani.",
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