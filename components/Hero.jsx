"use client";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-dark_red text-white py-10 md:py-24 overflow-hidden"
      id="home"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-shadow">
           Godrej Safe & Locker Dealer – Trusted for 18+ Years
          </h1>
          <p className="text-lg mb-6 max-w-xl pl-5 border-l-2 border-white">
          When it comes to securing valuables, trust matters. As the leading Godrej Safe & Locker Dealer, Shree Shyam Concreto has been serving families, jewellers, offices, and banks for more than 18 years. We provide certified Godrej safes and lockers that ensure lasting protection, security, and peace of mind. We don’t just supply safes—we help safeguard what’s priceless. As your dedicated Godrej Safe & Locker Dealer, your safety becomes our responsibility.
          </p>
        <Link href="#shop" scroll={true} >
            <button className="bg-white text-dark_red px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all cursor-pointer">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center relative ">
          {/* Animated Wave Layers */}
          <div className="absolute inset-0 m-auto w-60 h-60 md:w-[400px] md:h-[400px] rounded-full bg-white/20 animate-water-wave"></div>
          <div className="absolute inset-0 m-auto w-80 h-80 md:w-[500px] md:h-[500px] rounded-full bg-white/30 animate-water-wave [animation-delay:600ms]"></div>

          {/* Static Main Image */}
          <div className="relative z-10 md:scale-110">
            <Image
              src="/images/herro.png"
              alt="Shree Shyam"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
