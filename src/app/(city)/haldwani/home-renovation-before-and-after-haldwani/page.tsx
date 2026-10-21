
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Renovation Before and After Haldwani | Space Build",
  description:
    "Explore home renovation before and after in Haldwani with Space Build. Discover modern interior upgrades, kitchen makeovers, bathroom improvements and smart renovation ideas.",
  keywords: [
    "home renovation before and after Haldwani",
    "before and after home renovation",
    "home renovation Haldwani",
    "house renovation in Haldwani",
    "home makeover Haldwani",
    "old house renovation",
    "modern home renovation ideas",
    "home remodeling Haldwani",
    "residential renovation services",
    "home interior renovation",
    "kitchen renovation before and after",
    "bathroom renovation Haldwani",
    "living room makeover",
    "bedroom renovation ideas",
    "affordable home renovation",
    "small house renovation",
    "home improvement company Haldwani",
    "renovation contractor Haldwani",
    "modern interior design Haldwani",
    "Space Build Haldwani",
  ],
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/home-renovation-before-and-after-haldwani",
  },
  openGraph: {
    title: "Home Renovation Before and After Haldwani | Space Build",
    description:
      "Explore home renovation before and after in Haldwani with Space Build. Discover modern interior upgrades, kitchen makeovers, bathroom improvements and smart renovation ideas.",
    url: "https://www.spacebuild.co.in/home-renovation-before-and-after-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Home Renovation Before and After in Haldwani - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Renovation Before and After Haldwani | Space Build",
    description:
      "Explore modern home renovation transformations, kitchen makeovers, bathroom upgrades and interior ideas in Haldwani with Space Build.",
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
