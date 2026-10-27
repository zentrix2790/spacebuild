
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modular Kitchen Online | Plan and Order Smartly | Space Build Haldwani",

  description:
    "Exploring modular kitchen online options? Learn how to browse designs, share details, review 3D plans and order safely with Space Build Haldwani. Book a free consultation today.",

  keywords: [
    "modular kitchen online",
    "online kitchen design",
    "modular kitchen online India",
    "online kitchen consultation",
    "kitchen 3D design online",
    "modular kitchen enquiry",
    "online kitchen quotation",
    "kitchen design ideas online",
    "modular kitchen Haldwani",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen hardware quality",
    "kitchen site measurement",
    "kitchen installation",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
    "modular kitchen planning",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/modular-kitchen-online",
  },

  openGraph: {
    title:
      "Modular Kitchen Online | Plan and Order Smartly | Space Build Haldwani",
    description:
      "Exploring modular kitchen online options? Learn how to browse designs, share details, review 3D plans and order safely with Space Build Haldwani. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/modular-kitchen-online",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Online Modular Kitchen Planning by Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Online | Space Build Haldwani",
    description:
      "Explore kitchen designs online, discuss your requirements, review 3D plans and plan your modular kitchen with Space Build.",
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
