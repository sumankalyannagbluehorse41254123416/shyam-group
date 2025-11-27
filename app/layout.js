// app/layout.js
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Godrej Safe & Locker Dealer – Shree Shyam Concreto",
  description:
    "Shree Shyam Concreto – Authorized Godrej Safe & Locker Dealer in Midnapore. Explore safes, lockers, and security solutions for banks, homes, and offices.",
  openGraph: {
    title: "Godrej Safe & Locker Dealer – Shree Shyam Concreto",
    description:
      "Shree Shyam Concreto – Authorized Godrej Safe & Locker Dealer in Midnapore. Explore safes, lockers, and security solutions for banks, homes, and offices.",
    url: "https://godrejlocker.com/",
    siteName: "Shree Shyam Concreto",
    type: "website",
    locale: "en_US",
  },
  keywords: [
    "Godrej Safe Dealer",
    "Godrej Lockers Midnapore",
    "Shree Shyam Concreto",
    "Home Security Solutions",
    "Office Lockers",
    "Bank Safe Lockers",
  ],
};

export default function RootLayout({ children }) {
  const GTM_ID = "GTM-KTBXZBLK";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "Shree Shyam",
    image:
      "https://godrejlocker.com/_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75",
    "@id": "",
    url: "https://godrejlocker.com/",
    telephone: "+91-9475540692",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Keranichotti near Agarwal Marble, Abash, Barua, West Bengal 721102",
      addressLocality: "Midnapore",
      postalCode: "721102",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 22.4519649,
      longitude: 87.3099736,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61582380362037",
      "https://youtube.com/@shyamconcreto?si=h3GnO7udNvpRMCWk",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* Google Tag Manager - head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />

        {/* JSON-LD schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>

      <body className={`${openSans.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {children}
      </body>
    </html>
  );
}
