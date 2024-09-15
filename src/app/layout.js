import { Open_Sans } from "next/font/google";
const open_sans = Open_Sans({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-sans" });

import "@/static/styles/main.scss";

import Providers from "@/providers";
import Navigation from "@/components/navigation/Navigation";
import Footer from "@/components/footer/Footer";
import footerData from "@/static/data/footer";
import contactData from "@/static/data/siteData";

export const metadata = {
  metadataBase: new URL(process.env.NODE_ENV === "production" ? "https://pgsfm.uk" : "http://localhost:3000"),
  title: {
    template: `%s | PGSFM`,
    default: contactData.title,
  },
  description: contactData.description,
  keywords: [
    "Guards",
    "Security",
    "Best Guard in UK",
    "Guard Services",
    "Security Services",
    "Facilities",
    "Facilities Management",
    "Facilities Management Services",
    "Facilities Management Services in UK",
    "Professional Guards",
  ],
  authors: [{ name: "Brainloggers", url: "https://brainloggers.co.uk" }],
  openGraph: {
    title: contactData.title,
    description: contactData.description,
    url: "https://pgsfm.uk",
    siteName: contactData.title,
    images: [
      {
        url: contactData.og,
        width: 800,
        height: 600,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: contactData.title,
    description: contactData.description,
    images: [contactData.og],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${open_sans.className}`}>
        <Providers>
          <Navigation />
          {children}
          <Footer contactData={contactData} data={footerData} />
        </Providers>
      </body>
    </html>
  );
}
