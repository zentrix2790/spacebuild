
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Renovation Contractor in Haldwani | Space Build",
  description:
    "Looking for a home renovation contractor in Haldwani? Learn how to plan home renovations, upgrade kitchens and bathrooms, improve interiors, manage budgets, and choose the right contractor for your property.",
  keywords: [
    "home renovation contractor in Haldwani",
    "home renovation Haldwani",
    "house renovation services Haldwani",
    "renovation company Haldwani",
    "residential renovation contractor",
    "home remodelling Haldwani",
    "affordable home renovation Haldwani",
    "home improvement services Haldwani",
    "kitchen renovation Haldwani",
    "bathroom renovation Haldwani",
    "living room renovation",
    "bedroom renovation Haldwani",
    "interior renovation Haldwani",
    "old house renovation Haldwani",
    "complete home renovation",
    "renovation cost Haldwani",
    "home repair services Haldwani",
    "renovation planning",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/pest-control-for-homes-haldwani",
  },
  openGraph: {
    title: "Home Renovation Contractor in Haldwani | Space Build",
    description:
      "Looking for a home renovation contractor in Haldwani? Learn how to plan home renovations, upgrade kitchens and bathrooms, improve interiors, manage budgets, and choose the right contractor for your property.",
    url: "https://www.spacebuild.co.in/haldwani/pest-control-for-homes-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Home Renovation Contractor in Haldwani - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Renovation Contractor in Haldwani | Space Build",
    description:
      "Plan home renovations, upgrade kitchens and bathrooms, improve interiors, and manage renovation budgets in Haldwani with guidance from Space Build.",
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
