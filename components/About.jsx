"use client";
import Image from "next/image";

function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default function About({ data }) {
  // ✅ Check for valid section data
  if (!data || data.status !== "active") {
    return null;
  }

  const { title, image, shortDescription, subsections = [] } = data;

  // ✅ Predefined animation delays
  const delayClasses = ["delay-100", "delay-200", "delay-300"];

  return (
    <section id="about" className="md:py-16 py-10 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        {/* ✅ About Image */}
        <div className="about-image w-full lg:w-1/2">
          <Image
            src={image && image.trim() !== "" ? image : "/images/about.jpg"}
            alt={title || "About section image"}
            width={600}
            height={400}
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

        {/* ✅ About Content */}
        <div className="about-content w-full lg:w-1/2 ">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 text-gray-800">
            {title || "About Shree Shyam Concreto"}
          </h2>

          {/* ✅ Description (shortDescription from API) */}
          {shortDescription && (
            <div
              className="text-gray-600 leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: shortDescription }}
            />
          )}

          {/* ✅ Stats Section (Dynamic Subsections) */}
          {subsections.length > 0 && (
            <div className="about-stats grid grid-cols-2 sm:grid-cols-3 md:gap-6 gap-3 text-center">
              {subsections.map((stat, index) => {
                const delayClass = delayClasses[index] || "";
                const spanClass = index === 2 ? "col-span-2 md:col-span-1" : "";

                return (
                  <div
                    key={stat.id || index}
                    className={`stat-item bg-white p-6 rounded-xl shadow hover:shadow-lg transition animate-on-scroll zoom-in ${delayClass} ${spanClass}`}
                  >
                    <div className="stat-number text-3xl font-bold text-red-600">
                      {stat.title || "-"}
                    </div>
                    <div
                      className="stat-label text-gray-500 mt-2"
                      dangerouslySetInnerHTML={{
                        __html: stat.description || "No label",
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
