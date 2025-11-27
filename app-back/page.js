import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero.jsx";
import Categories from "../components/Categories";
import DealOfWeek from "../components/DealOfWeek";
import NewArrivals from "../components/NewArrivals";
import LockersAndCabinets from "../components/LockersAndCabinets";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import About from "../components/About";
import MembershipOffers from "../components/MembershipOffers";
import Newsletter from "../components/Newsletter";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { fetchFormData } from "@/lib/fetchFormData";
import { fetchPageData } from "@/lib/fetchPageData";
import { headers } from "next/headers";
import WhatsAppButton from "@/components/WhatsAppButton";

export default async function Home() {
  const headerList = await headers();
  const host = headerList.get("host");
  const origin = headerList.get("origin") || null;
  const referer = headerList.get("referer") || null;

  let form = null;
  let fields = null;
  let newArrivals = null;
  let categoriesData = null;
  let lockersAndCabinets = null;
  let dealOfWeek = null;
  let aboutshreeshyamconcreto = null;
  let features = null;
  let testimonial = null;
  let membershipOffers = null;

  try {
    const formDataResponse = await fetchFormData(
      { host, origin, referer },
      "b11bd68a-513c-4d07-ad32-2af4cce759bb"
    );
    form = formDataResponse?.form || null;
    fields = formDataResponse?.fields || null;
  } catch (error) {
    console.log("Error fetching form data:", error);
  }

  try {
    const response = await fetchPageData(
      { host, origin, referer },
      "ec6a4195-9734-4cf6-8014-b14e480277ba"
    );

    const pageItemdataWithSubsection =
      response.pageItemdataWithSubsection || [];

    categoriesData = pageItemdataWithSubsection.find(
      (item) => item.slug === "explore-our-security-products-14"
    );

    dealOfWeek = pageItemdataWithSubsection.find(
      (item) => item.slug === "exclusive-locker-safe-offers-14"
    );
    console.log("dealOfWeek", dealOfWeek);
    newArrivals = pageItemdataWithSubsection.find(
      (item) => item.slug === "new-arrivals-14"
    );

    lockersAndCabinets = pageItemdataWithSubsection.find(
      (item) => item.slug === "safe-lockers-cabinets-14"
    );

    features = pageItemdataWithSubsection.find(
      (item) => item.slug === "shipping-14"
    );

    testimonial = pageItemdataWithSubsection.find(
      (item) => item.slug === "what-our-client-s-say-14"
    );

    aboutshreeshyamconcreto = pageItemdataWithSubsection.find(
      (item) => item.slug === "about-shree-shyam-concreto-14"
    );

    membershipOffers = pageItemdataWithSubsection.find(
      (item) => item.slug === "membershipoffers-14"
    );
  } catch (error) {
    console.log("Error fetching page data:", error);
  }

  return (
    <>
      <Head>
        <title>Shree Shyam Concreto</title>
        <meta charSet="UTF-8" />
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

        <WhatsAppButton/>
        {/* Sequence as requested */}
        <Categories data={categoriesData} />
        <DealOfWeek data={dealOfWeek} />
        <NewArrivals data={newArrivals} />
        <LockersAndCabinets data={lockersAndCabinets} />
        <Features data={features} />
        <Testimonials data={testimonial} />
        <About data={aboutshreeshyamconcreto} />
        <MembershipOffers data={membershipOffers} />
        <Contact form={form} fields={fields} headers={host} />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}
