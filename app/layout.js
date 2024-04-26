import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import "./icons.css";
import "react-quill/dist/quill.snow.css";
import Script from "next/script";
import GoogleAnalytics from "./GoogleAnalytics";
import { Public_Sans, Karla } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import localFont from "next/font/local";
const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata = {
  alternates: {
    canonical: `https://dolphy.ca`,
  },
  title: "Dolphy - Leading New Construction  Homes Platform in Canada",
  description:
    "Dolphy is your top destination for pre-construction homes marketplace in Canada. 1000+ Pre construction townhomes, detached & condos available at Dolphy.ca.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    images: "/dolphin.jpg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  category: "real estate",
};

const karla = Karla({ subsets: ["latin"] });
const itcSouvenir = localFont({
  src: [
    {
      path: "./Souvenir-DemiItalic.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Souvenir-Medium.otf",
      weight: "500", // Adjust weight to 500 for medium (or as specified in the font file)
      style: "normal",
    },
    {
      path: "./Souvenir-MediumItalic.otf",
      weight: "500", // Adjust weight to 500 for medium (or as specified in the font file)
      style: "italic",
    },
    {
      path: "./Souvenir-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Souvenir-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Souvenir-Demi.otf",
      weight: "900", // Adjust weight to 900 for black (or as specified in the font file)
      style: "normal",
    },
  ],
});

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <NextTopLoader
          color="#00A1FF"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #00A1FF,0 0 5px #00A1FF"
        />
        <GoogleAnalytics />
        {children}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></Script>
      </body>
    </html>
  );
}
