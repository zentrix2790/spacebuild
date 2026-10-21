
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Choose a Home Renovation Company in Haldwani | Space Build",
  description:
    "Learn how to choose the best home renovation company in Haldwani. Compare experience, services, budgets, materials, timelines, and renovation contracts with Space Build.",
  keywords: [
    "how to choose home renovation company Haldwani",
    "best home renovation company in Haldwani",
    "home renovation services Haldwani",
    "house renovation contractor Haldwani",
    "affordable home renovation Haldwani",
    "home remodelling company Haldwani",
    "residential renovation services",
    "home interior renovation Haldwani",
    "renovation cost Haldwani",
    "experienced renovation contractors",
    "home improvement company Uttarakhand",
    "renovation planning tips",
    "kitchen renovation Haldwani",
    "bathroom renovation Haldwani",
    "complete home renovation",
    "home renovation experts",
    "renovation company near me",
    "home renovation budget",
    "house remodelling services",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/how-to-choose-home-renovation-company-haldwani",
  },
  openGraph: {
    title:
      "How to Choose a Home Renovation Company in Haldwani | Space Build",
    description:
      "Learn how to choose the best home renovation company in Haldwani. Compare experience, services, budgets, materials, timelines, and renovation contracts with Space Build.",
    url: "https://www.spacebuild.co.in/how-to-choose-home-renovation-company-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose a Home Renovation Company in Haldwani - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "How to Choose a Home Renovation Company in Haldwani | Space Build",
    description:
      "Compare renovation experience, services, budgets, materials, timelines, and contracts before choosing a home renovation company in Haldwani.",
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
