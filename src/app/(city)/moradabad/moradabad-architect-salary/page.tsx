
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Moradabad Architect Salary | Pay, Experience and Career Growth | Space Build",

  description:
    "Curious about Moradabad architect salary? Learn what affects pay, how it grows with experience and which skills raise earning potential, with insights from Space Build. Book a free consultation.",

  keywords: [
    "Moradabad architect salary",
    "architect salary Moradabad",
    "architect pay India",
    "junior architect salary",
    "senior architect salary",
    "architect career growth",
    "architecture jobs Moradabad",
    "architect skills",
    "architect experience",
    "architect freelance income",
    "residential architect",
    "interior design Moradabad",
    "modular kitchen design",
    "architecture firm",
    "architect internship",
    "Space Build Haldwani",
    "Space Build",
    "design career",
    "home design",
    "design consultation",
  ],

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/moradabad/architect-salary",
  },

  openGraph: {
    title:
      "Moradabad Architect Salary | Pay, Experience and Career Growth | Space Build",
    description:
      "Curious about Moradabad architect salary? Learn what affects pay, how it grows with experience and which skills raise earning potential, with insights from Space Build. Book a free consultation.",
    url:
      "https://www.spacebuild.co.in/moradabad/architect-salary",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Moradabad Architect Salary and Career Growth - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Moradabad Architect Salary | Space Build",
    description:
      "Explore architect salaries, career growth, experience levels and skills that can improve earning potential in Moradabad and India.",
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
