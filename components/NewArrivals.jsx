"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const seoTitle = [
  "Godrej Defender Prime Safe",
  "Godrej E-Swipe Home Locker",
  "Godrej Centiguard 560EL",
  "Valumatic Godrej Counting Machine",

]

// Utility to strip HTML tags
function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default function NewArrivals({ data }) {
  if (!data) {
    return null;
  }

  console.log("NewArrivals Data:", data);

  return (
    <section className="md:py-16 py-8 bg-white" id="shop">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex justify-between items-center mb-12 relative">
          <p className="text-xl md:text-3xl font-bold md:text-center text-left w-full">
            {data.title || "New Arrivals"}
          </p>
          <div className="flex gap-3 absolute right-0 top-0">
            <button className="arrival-prev h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-[var(--dark-red)] hover:text-white cursor-pointer ">
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            <button className="arrival-next h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-[var(--dark-red)] hover:text-white cursor-pointer ">
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            575: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{ nextEl: ".arrival-next", prevEl: ".arrival-prev" }}
          className="arrivalSwiper"
        >
          {data?.subsections.map((item, index) => (
            <SwiperSlide key={item.id || index}>
              <div className="bg-white rounded-lg border border-gray-200 group  transition-shadow duration-300 transform cursor-pointer">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image || "/assets/images/list_section.png"}
                    alt={item.title || "Product"}
                    width={300}
                    height={192}
                    className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
                  />
                  <div className="absolute top-2 right-2 bg-[var(--dark-red)] text-white text-xs font-bold px-2 py-1 rounded-full transform transition-transform duration-300 group-hover:scale-105">
                    NEW
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:min-h-34">
                  {
                    seoTitle.includes(item.title) ?
                     <h3 className="text-lg text-center text-[var(--dark-red)] font-semibold mb-1">
                    {item.title || "Untitled"}
                  </h3> :
                   <p className="text-lg text-center text-[var(--dark-red)] font-semibold mb-1">
                    {item.title || "Untitled"}
                  </p>
                  }
                 
                  {item.description && (
                    <p className="text-sm text-gray-600 text-center">
                      {stripHtmlTags(item.description)}
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
