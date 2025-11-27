"use client";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default function LockersAndCabinets({ data }) {
  if (!data || !data.subsections || data.subsections.length === 0) {
    return null;
  }

  return (
    <section className="md:py-16 py-8 bg-gray-100" id="service">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="md:text-center text-left mb-8">
          <h2 className="text-xl md:text-3xl font-bold mb-2">
            {data?.title || "SAFE LOCKERS & CABINETS"}
          </h2>
          {data?.shortDescription && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {stripHtmlTags(data.shortDescription)}
            </p>
          )}
        </div>

        {/* Dynamic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {data.subsections.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg border-b-4 ${
                item.borderColor || "border-blue-600"
              } text-center shadow-md hover:shadow-2xl transition-shadow duration-300`}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.alt || item.title || "Locker image"}
                  width={400}
                  height={250}
                  className="mx-auto mb-4 w-full h-auto object-cover"
                />
              )}
              <p
                className={`text-xl font-semibold ${
                  item.textColor || "text-blue-600"
                } mb-2`}
              >
                {item.title}
              </p>
              <p className="text-gray-600">{stripHtmlTags(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
