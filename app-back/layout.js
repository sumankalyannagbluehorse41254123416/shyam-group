import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"], 
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Authorized Godrej Safe and Locker Dealer - Shree Shyam Concreto",
  description:
    "Shree Shyam Concreto – Authorized Godrej Safe & Locker Dealer in Midnapore. Explore safes, lockers, and security solutions for banks, homes, and offices.",

  openGraph: {
    title: "Authorized Godrej Safe and Locker Dealer - Shree Shyam Concreto",
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
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
