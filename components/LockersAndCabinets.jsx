"use client";
export default function LockersAndCabinets() {
  return (
    <section className="md:py-16 py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="md:text-center text-left mb-8">
          <h2 className="text-xl md:text-3xl font-bold mb-2">SAFE LOCKERS & CABINETS</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Using the most advanced technologies backed with rigorous research, we have been designed to protect your valuables in a wide range of adversities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              title: "FOR HOME & OFFICES",
              desc: "Perfectly designed for both residential and commercial use. Compact in size, yet built strong to deliver maximum security.",
              imgSrc: "images/5.jpg",
              alt: "Home & Offices",
              borderColor: "border-blue-600",
              textColor: "text-blue-600",
            },
            {
              title: "FOR INSTITUTIONS",
              desc: " Engineered to meet the strictest safety standards, our safes are built to deliver unmatched strength and reliability.",
              imgSrc: "images/6.jpg",
              alt: "Institutions",
              borderColor: "border-red-600",
              textColor: "text-red-600",
            },
            {
              title: "FOR JEWELLERY SHOPS",
              desc: "Built with advanced, time-tested security features to resist burglary attempts and keep your valuables fully protected.",
              imgSrc: "images/7.jpg",
              alt: "Jewellery Shops",
              borderColor: "border-yellow-600",
              textColor: "text-yellow-600",
            },
          ].map((item, index) => (
            <div
              key={item.title}
              className={`bg-white p-6 rounded-lg border-b-4 ${item.borderColor} text-center shadow-md hover:shadow-2xl transition-shadow duration-300`}
            >
              <img src={item.imgSrc} alt={item.alt} className="mx-auto mb-4 w-full h-auto" />
              <h3 className={`text-xl font-semibold ${item.textColor} mb-2`}>{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}