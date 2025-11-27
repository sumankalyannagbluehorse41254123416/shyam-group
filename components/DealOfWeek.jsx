"use client";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function LockersAndCabinets({ data }) {
  if (!data || !data.subsections || data.subsections.length === 0) {
    return null;
  }

  // Split first item as main, rest as side items
  const [mainItem, ...sideItems] = data.subsections;

  // Phone number for call
  const phoneNumber = "9475540692";
  const callLink = `tel:${phoneNumber}`;

  return (
    <section className="md:py-16 py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="md:text-center text-left mb-8">
          <h2 className="text-xl md:text-3xl font-bold mb-2">
            {data?.title || "SAFE LOCKERS & CABINETS"}
          </h2>

          {/* ✅ Use dangerouslySetInnerHTML for HTML description */}
          {data?.shortDescription && (
            <div
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              dangerouslySetInnerHTML={{ __html: data.shortDescription }}
            />
          )}
        </div>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
          {/* Main Image */}
          {mainItem && (
            <a href={callLink} className="block">
              <div className="rounded-lg overflow-hidden animate-on-scroll fade-in-left transition-transform duration-500 transform">
                <Image
                  src={mainItem.image || "/images/placeholder.jpg"}
                  alt={mainItem.alt || mainItem.title || "Locker image"}
                  width={600}
                  height={400}
                  className="w-full h-auto max-w-full rounded-lg object-cover"
                />
              </div>
            </a>
          )}

          {/* Side Images */}
          <div className="rounded-lg flex flex-col gap-4">
            {sideItems.slice(0, 2).map((item, index) => (
              <a key={index} href={callLink} className="block">
                <div
                  className={`rounded-lg overflow-hidden animate-on-scroll fade-in-right transition-transform duration-500 transform delay-${
                    (index + 1) * 200
                  }`}
                >
                  <Image
                    src={item.image || "/images/placeholder.jpg"}
                    alt={item.alt || item.title || "Locker image"}
                    width={300}
                    height={300}
                    className="w-full lg:h-[190px] max-w-full rounded-lg object-cover"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
