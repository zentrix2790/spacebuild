import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architectural Design Services Certification | Space Build Haldwani",

  description:
    "What certifications matter in architectural design services? Learn about architect registration, qualifications, professional bodies, project certificates, and green ratings, and how to verify them, with guidance from Space Build Haldwani.",

  keywords:
    "architectural design services certification, architect registration India, Council of Architecture registration, architect qualification B.Arch, verify architect registration, architect credentials check, project certificates, structural stability certificate, completion certificate, green building rating, GRIHA IGBC, professional bodies architects, architect certification checklist, design and build Haldwani, house construction Haldwani, interior designer Haldwani, interior design Haldwani, home building Uttarakhand, architect verification, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/architectural-design-services-certification",
  },

  openGraph: {
    title:
      "Architectural Design Services Certification | Space Build Haldwani",
    description:
      "What certifications matter in architectural design services? Learn about architect registration, qualifications, professional bodies, project certificates, and green ratings, and how to verify them, with guidance from Space Build Haldwani.",
    url: "https://www.spacebuild.co.in/architectural-design-services-certification",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architectural Design Services Certification - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Architectural Design Services Certification | Space Build Haldwani",
    description:
      "What certifications matter in architectural design services? Learn about architect registration, qualifications, professional bodies, project certificates, and green ratings, and how to verify them, with guidance from Space Build Haldwani.",
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