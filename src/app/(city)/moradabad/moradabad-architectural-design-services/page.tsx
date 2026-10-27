
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Moradabad Architectural Design Services | Home Planning by Space Build",

  description:
    "Explore Moradabad architectural design services for homes, villas and renovations. Learn what is included, the process and selection tips with Space Build. Book a free consultation today.",

  keywords: [
    "Moradabad architectural design services",
    "architectural design Moradabad",
    "residential design services",
    "house design Moradabad",
    "building plan design",
    "floor plan design",
    "3D elevation design",
    "villa design",
    "duplex house design",
    "renovation design",
    "interior design Moradabad",
    "modular kitchen design",
    "Vastu planning",
    "space planning",
    "working drawings",
    "Space Build Haldwani",
    "Space Build",
    "custom home design",
    "home renovation",
    "design consultation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/moradabad/architectural-design-services",
  },

  openGraph: {
    title:
      "Moradabad Architectural Design Services | Home Planning by Space Build",
    description:
      "Explore Moradabad architectural design services for homes, villas and renovations. Learn what is included, the process and selection tips with Space Build. Book a free consultation today.",
    url:
      "https://www.spacebuild.co.in/moradabad/architectural-design-services",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architectural Design Services in Moradabad - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Moradabad Architectural Design Services | Space Build",
    description:
      "Explore home, villa and renovation design services, including floor plans, 3D elevations and space planning in Moradabad.",
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
