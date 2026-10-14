
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Haldwani Architecture Services | Space Build Haldwani",

  description:
    "Explore architecture services in Haldwani, from house planning and elevation design to approval drawings, 3D views, renovation design, and site support. Learn what each service includes, with guidance from Space Build Haldwani.",

  keywords: [
    "Haldwani architecture services",
    "architectural services Haldwani",
    "house planning services",
    "building design services",
    "elevation design services",
    "approval drawing services",
    "working drawing services",
    "3D architectural visualization",
    "renovation design services",
    "commercial building design",
    "interior architecture services",
    "site supervision services",
    "architectural consultation",
    "home design Haldwani",
    "design and build Haldwani",
    "house construction Haldwani",
    "interior designer Haldwani",
    "interior design Haldwani",
    "home building Uttarakhand",
    "Space Build Haldwani",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/architecture-services",
  },

  openGraph: {
    title: "Haldwani Architecture Services | Space Build Haldwani",

    description:
      "Explore architecture services in Haldwani, from house planning and elevation design to approval drawings, 3D views, renovation design, and site support. Learn what each service includes, with guidance from Space Build Haldwani.",

    url: "https://www.spacebuild.co.in/haldwani/architecture-services",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Architecture Services | Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Haldwani Architecture Services | Space Build Haldwani",

    description:
      "Explore house planning, elevation design, approval drawings, 3D visualization, renovation design, and site support services in Haldwani.",

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
