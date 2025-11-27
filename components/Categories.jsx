"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

// Utility: strip HTML tags (optional if your API sends HTML in description)
function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default function Categories({ data }) {
  if (!data || !data.subsections || data.subsections.length === 0) {
    return null;
  }

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="flex justify-between items-center  relative">
          <h2 className="text-xl md:text-3xl font-bold md:text-center pr-25 md:pr-0 text-left w-full ">
            {data.title || "Shop By Categories"}
          </h2>

          <div className="flex gap-3 absolute right-0 top-0">
            <button className="category-prev h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-[var(--dark-red)] hover:text-white">
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            <button className="category-next h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-[var(--dark-red)] hover:text-white">
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>
        <p className="md:text-center text-gray-600 text-lg mx-auto max-w-3xl mt-2 mb-12">
          Choose from a wide range of Godrej security solutions designed for
          homes, showrooms, offices, and financial institutions.
        </p>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          navigation={{ nextEl: ".category-next", prevEl: ".category-prev" }}
          className="categorySwiper"
        >
          {data.subsections.map((category, index) => (
            <SwiperSlide key={category.id || index}>
              <div
                className={`bg-gray-100 group p-4 rounded-lg text-center ${
                  (index + 1) * 100
                }`}
              >
                {/* Category Image */}
                <div className="mx-auto rounded-full flex items-center justify-center mb-4 transform transition-transform duration-500 group-hover:scale-x-[-1]">
                  <Image
                    src={category.image || "/assets/images/list_section.png"}
                    alt={category.title || "Category"}
                    width={120}
                    height={120}
                    className="h-36 w-36 object-cover"
                  />
                </div>

                {/* Category Name */}
                <p className="text-xl font-semibold">
                  {category.title || "Untitled"}
                </p>

                {/* Optional Description */}
                {category.description && (
                  <p className="text-sm text-gray-600 mt-1">
                    {/* {stripHtmlTags(category.description)} */}
                  </p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
