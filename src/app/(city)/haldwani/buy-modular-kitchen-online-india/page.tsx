
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Buy Modular Kitchen Online in India | Smart Guide by Space Build Haldwani",

  description:
    "Thinking of buying a modular kitchen online in India? Learn the benefits, risks and checks before you order, with guidance from Space Build Haldwani. Book a free consultation.",

  keywords: [
    "buy modular kitchen online India",
    "modular kitchen online",
    "online kitchen design",
    "modular kitchen price India",
    "online kitchen quotation",
    "modular kitchen 3D design",
    "kitchen cabinets online",
    "modular kitchen Haldwani",
    "BWP plywood kitchen",
    "HDHMR kitchen",
    "kitchen hardware quality",
    "kitchen site measurement",
    "kitchen installation",
    "kitchen warranty",
    "kitchen interior Haldwani",
    "Space Build Haldwani",
    "custom kitchen",
    "kitchen designer",
    "kitchen makeover",
    "modular kitchen consultation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/buy-modular-kitchen-online-india",
  },

  openGraph: {
    title:
      "Buy Modular Kitchen Online in India | Smart Guide by Space Build Haldwani",
    description:
      "Thinking of buying a modular kitchen online in India? Learn the benefits, risks and checks before you order, with guidance from Space Build Haldwani. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/haldwani/buy-modular-kitchen-online-india",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Buy Modular Kitchen Online in India - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Buy Modular Kitchen Online in India | Smart Guide by Space Build Haldwani",
    description:
      "Learn how to choose an online modular kitchen, compare quotations, check materials and plan installation with Space Build Haldwani.",
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
