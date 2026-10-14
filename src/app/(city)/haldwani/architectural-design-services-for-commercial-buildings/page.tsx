
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architectural Design Services for Commercial Buildings | Space Build Haldwani",

  description:
    "Explore architectural design services for commercial buildings: shops, offices, clinics, showrooms, and mixed-use spaces. Learn design priorities, stages, deliverables, and how design links to construction with Space Build Haldwani.",

  keywords: [
    "architectural design services for commercial buildings",
    "commercial architecture services",
    "shop design",
    "showroom design",
    "office building design",
    "clinic design",
    "commercial building plans",
    "commercial building approvals",
    "mixed use building design",
    "commercial space planning",
    "commercial working drawings",
    "retail space design",
    "commercial architect",
    "design and build Haldwani",
    "commercial construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "commercial fit-out",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/architectural-design-services-commercial-buildings",
  },

  openGraph: {
    title:
      "Architectural Design Services for Commercial Buildings | Space Build Haldwani",

    description:
      "Explore architectural design services for commercial buildings: shops, offices, clinics, showrooms, and mixed-use spaces. Learn design priorities, stages, deliverables, and how design links to construction with Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/architectural-design-services-commercial-buildings",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architectural Design Services for Commercial Buildings - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Architectural Design Services for Commercial Buildings | Space Build Haldwani",

    description:
      "Explore shop, office, clinic, showroom, and mixed-use building design services with Space Build Haldwani.",

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
