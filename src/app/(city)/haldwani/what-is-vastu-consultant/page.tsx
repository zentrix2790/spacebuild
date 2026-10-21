
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "What Is a Vastu Consultant? Meaning, Role & Benefits | Space Build Haldwani",

  description:
    "What is a Vastu consultant? Understand the meaning, role, services and benefits of a Vastu consultant, and how Space Build in Haldwani offers practical, no-demolition guidance. Visit spacebuild.co.in.",

  keywords: [
    "what is Vastu consultant",
    "Vastu consultant meaning",
    "who is a Vastu consultant",
    "what does a Vastu consultant do",
    "Vastu consultant role",
    "Vastu consultant services",
    "Vastu Shastra expert",
    "Vastu expert meaning",
    "Vastu consultant vs architect",
    "is Vastu consultant useful",
    "Vastu consultant in Haldwani",
    "Vastu consultant near me",
    "best Vastu consultant Haldwani",
    "home Vastu consultation",
    "plot Vastu consultation",
    "commercial Vastu consultant",
    "Vastu remedies without demolition",
    "Vastu consultant Uttarakhand",
    "Vastu consultant Nainital district",
    "Vastu consultant Kathgodam",
    "Space Build Haldwani",
    "Space Build Vastu",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/what-is-vastu-consultant",
  },

  openGraph: {
    title:
      "What Is a Vastu Consultant? Meaning, Role & Benefits | Space Build Haldwani",

    description:
      "What is a Vastu consultant? Understand the meaning, role, services and benefits of a Vastu consultant, and how Space Build in Haldwani offers practical, no-demolition guidance. Visit spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/what-is-vastu-consultant",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "What Is a Vastu Consultant? Meaning, Role and Benefits - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "What Is a Vastu Consultant? Meaning, Role & Benefits | Space Build Haldwani",

    description:
      "Understand the role, services and benefits of a Vastu consultant, including practical guidance without demolition from Space Build Haldwani.",

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
