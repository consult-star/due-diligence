import "@/app/style/globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import ToTop from "./components/to-top";

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Due Diligence - Case Study Addoha",
  description:
    "Explore the Addoha case study, showcasing meticulous due diligence and intelligent insights that drive strategic growth and impactful outcomes. Learn about the team's innovative approach and hear testimonials from participants.",
  keywords: [
    "Due Diligence",
    "Addoha Case Study",
    "Financial Analysis",
    "Risk Assessment",
    "Strategic Growth",
    "Data-Driven Decisions",
    "Islamic Banking",
    "Project Management",
    "Consulting",
    "Business Strategy",
    "Dr. Selma Haj Khlifa",
    "Innovation in Finance",
  ],
  authors: [
    {
      name: "Dr. Selma Haj Khelifa",
      url: "https://ma.linkedin.com/in/dr-selma-haj-khlifa-53a6a232",
    },
  ],
  publisher: "Groupe ISCAE",
  openGraph: {
    title: "Due Diligence - Case Study Addoha",
    description:
      "A deep dive into the Addoha case study, highlighting how strategic insights and diligent analysis empower organizations to make data-driven decisions. Learn more about the process, outcomes, and testimonials.",
    url: "https://consult-star.github.io/due-diligence",
    type: "website",
    images: [
      {
        url: "https://consult-star.github.io/due-diligence/cover-image.png",
        width: 1920,
        height: 1080,
        alt: "Addoha Case Study - Due Diligence",
      },
    ],
    siteName: "Due Diligence - Case Study Addoha",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  viewport: "width=device-width, initial-scale=1, theme-color=#FFA500",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <NavBar />
        <ToTop />
        {children}
        <Footer />
      </body>
    </html>
  );
}
