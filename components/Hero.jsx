"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-dark_red text-white py-10 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0 animate__animated animate__fadeInLeft">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-shadow">
            Industry&apos;s 1st Class E-Safe
          </h1>
          <p className="text-lg mb-6 max-w-lg animate__animated animate__fadeInUp animate__delay-1s pl-5 border-l-2 border-white">
            High security safes certified by the Bureau of Indian Standards for
            protection of cash and valuables. Available with a wide range of
            locking options for enhanced security.
          </p>
          <button className="bg-white text-dark_red px-6 py-3 rounded-md font-semibold">
            Shop Now
          </button>

          {/* <div className="mt-6 flex items-center space-x-4 animate__animated animate__fadeInUp animate__delay-2s">
            <span className="text-md">Follow:</span>
            <div className="flex space-x-4">
              {[
                "facebook-fill",
                "twitter-x-fill",
                "instagram-line",
                "linkedin-fill",
              ].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="text-white transition text-2xl"
                >
                  <i className={`ri-${icon}`}></i>
                </a>
              ))}
            </div>
          </div> */}
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center relative animate__animated animate__fadeInRight">
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
            />
          </div>
        </div>
      </div>
    </section>
  );
}
