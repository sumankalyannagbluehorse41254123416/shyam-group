"use client";
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import DealOfWeek from '../components/DealOfWeek';
import NewArrivals from '../components/NewArrivals';
import BestSellers from '../components/BestSellers';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import MembershipOffers from '../components/MembershipOffers';
import Newsletter from '../components/Newsletter';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import 'swiper/swiper-bundle.min.css';
import 'animate.css/animate.min.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shree Shyam Concreto</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet" />
        <style>{`
          @keyframes water-wave {
            0% { transform: scale(1); opacity: 0.4; }
            25% { transform: scale(1.2); opacity: 0.25; }
            50% { transform: scale(1.4); opacity: 0.15; }
            75% { transform: scale(1.2); opacity: 0.25; }
            100% { transform: scale(1); opacity: 0.4; }
          }
          .animate-water-wave {
            animation: water-wave 8s ease-in-out infinite;
          }
          .animate-on-scroll {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
          }
          .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
          }
          .delay-100 { transition-delay: 0.1s; }
          .delay-200 { transition-delay: 0.2s; }
          .delay-300 { transition-delay: 0.3s; }
          .delay-400 { transition-delay: 0.4s; }
          .delay-500 { transition-delay: 0.5s; }
          .fade-in-left.animated { animation: fadeInLeft 0.8s forwards; }
          .fade-in-right.animated { animation: fadeInRight 0.8s forwards; }
          .fade-in-up.animated { animation: fadeInUp 0.8s forwards; }
          .zoom-in.animated { animation: zoomIn 0.8s forwards; }
          .flip-in.animated { animation: flipInX 0.8s forwards; }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes zoomIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes flipInX {
            from { opacity: 0; transform: perspective(400px) rotateX(90deg); }
            to { opacity: 1; transform: perspective(400px) rotateX(0); }
          }
          .hover-scale { transition: transform 0.3s ease; }
          .hover-scale:hover { transform: scale(1.05); }
        `}</style>
      </Head>
      <div className="font-opensans bg-gray-50">
        <Header />
        <Hero />
        <Categories />
        <DealOfWeek />
        <NewArrivals />
        <BestSellers />
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