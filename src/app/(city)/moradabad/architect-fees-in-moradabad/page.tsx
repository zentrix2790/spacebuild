
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architect Fees in Moradabad | Charges, Methods and Tips | Space Build",

  description:
    "Wondering about architect fees in Moradabad? Learn how charges are calculated, what affects them and how to compare offers, with guidance from Space Build. Book a free consultation today.",

  keywords: [
    "architect fees in Moradabad",
    "architect charges Moradabad",
    "architect fee per sq ft",
    "residential architect cost",
    "house design cost",
    "building plan charges",
    "3D elevation cost",
    "architect fee percentage",
    "home design fees",
    "interior design cost",
    "modular kitchen design",
    "Vastu planning",
    "home construction planning",
    "architect agreement",
    "design consultation",
    "Space Build Haldwani",
    "Space Build",
    "custom home design",
    "home renovation",
    "architect selection",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/moradabad/architect-fees",
  },

  openGraph: {
    title:
      "Architect Fees in Moradabad | Charges, Methods and Tips | Space Build",
    description:
      "Wondering about architect fees in Moradabad? Learn how charges are calculated, what affects them and how to compare offers, with guidance from Space Build. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/moradabad/architect-fees",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architect Fees in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Architect Fees in Moradabad | Space Build",
    description:
      "Understand architect charges, fee calculation methods and tips for comparing design offers in Moradabad.",
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
