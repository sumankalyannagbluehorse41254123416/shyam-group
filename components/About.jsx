"use client";
import Image from "next/image";

export default function About() {
  return (
    <section className="md:py-16 py-10 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="about-image w-full lg:w-1/2 animate-on-scroll fade-in-left">
          <Image
            src="/images/about.jpg"
            alt="Shree Shyam Concreto Team"
            width={600}
            height={400}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>
        <div className="about-content w-full lg:w-1/2 animate-on-scroll fade-in-right">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-gray-800">
            About Shree Shyam Concreto
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Founded in 2005, Shree Shyam Concreto Solutions has grown to become
            a leading provider of advanced security products and services in
            Midnapore and surrounding regions. Our mission is to deliver
            innovative, reliable security solutions that protect what matters
            most to our clients.
          </p>
          <div className="about-stats grid grid-cols-2 sm:grid-cols-3 md:gap-6 gap-3 text-center">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "500+", label: "Clients Served" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`stat-item bg-white p-6 rounded-xl shadow hover:shadow-lg transition animate-on-scroll zoom-in delay-${
                  (index + 1) * 100
                } ${index === 2 && "col-span-2"} md:col-span-1`}
              >
                <div className="stat-number text-3xl font-bold text-dark_red">
                  {stat.number}
                </div>
                <div className="stat-label text-gray-500 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
