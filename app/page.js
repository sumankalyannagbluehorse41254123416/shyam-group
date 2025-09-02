import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories";
import DealOfWeek from "../components/DealOfWeek";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSellers";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import LockersAndCabinets from "../components/LockersAndCabinets";
import MembershipOffers from "../components/MembershipOffers";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shree Shyam Concreto</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css"
          rel="stylesheet"
        />
      </Head>
      <div className="font-opensans bg-gray-50">
        <Header />
        <Hero />
        <Categories />
        <DealOfWeek />
        <NewArrivals />
        <LockersAndCabinets />
        {/* <BestSellers /> */}
        <Features />
        <Testimonials />
        <About />
        <MembershipOffers />
        <Newsletter />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
