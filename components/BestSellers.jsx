

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default function BestSellers({ data }) {
  if (!data || !Array.isArray(data.subsections) || data.subsections.length === 0) {
    return null;
  }

  const delayClasses = ["delay-100", "delay-200", "delay-300", "delay-400"];

  return (
    <section className="md:py-16 py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-12 relative">
          <h2 className="text-xl md:text-3xl font-bold md:text-center text-left w-full ">
            {stripHtmlTags(data.title) || "Best Sellers"}
          </h2>

    
          <div className="flex gap-3 absolute right-0 top-0">
            <button className="swiper-button-prev-custom h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-[var(--dark-red)] hover:text-white">
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            <button className="swiper-button-next-custom h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-[var(--dark-red)] hover:text-white">
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{ nextEl: ".swiper-button-next-custom", prevEl: ".swiper-button-prev-custom" }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="bestSellerCarousel"
        >
          {data.subsections.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={[
                  "bg-gray-50 rounded-lg overflow-hidden transition transform hover:scale-105 h-full flex flex-col ",
                  delayClasses[index] || "",
                ].join(" ")}
              >
                {/* Image + Badge */}
                <div className="relative">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title || "Best Seller"}
                      width={300}
                      height={192}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                  {item.badge && (
                    <span className="absolute top-2 right-2 bg-[var(--dark-red)] text-white text-xs font-bold px-2 py-1 rounded">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <div className="p-4 flex-1 flex items-center justify-center">
                  <h3 className="text-lg text-[var(--dark-red)] font-semibold text-center">
                    {stripHtmlTags(item.title)}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
