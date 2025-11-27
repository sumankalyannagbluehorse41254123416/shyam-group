"use client";
import Image from "next/image";

function stripHtmlTags(str) {
  if (!str) return "";
  return str.replace(/<[^>]*>/g, "");
}

export default function MembershipOffers({ data }) {
  if (!data || !data.subsections || data.subsections.length === 0) {
    return null;
  }

  return (
    <section className="md:py-16 py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
          {data.subsections.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className={`animate-on-scroll ${
                index === 0 ? "fade-in-left" : "fade-in-right"
              } rounded-sm`}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.alt || item.title || `Offer ${index + 1}`}
                  width={600}
                  height={400}
                  className="h-auto w-full max-w-full rounded-sm object-cover"
                />
              )}
              {item.title && (
                <p className="sr-only">{stripHtmlTags(item.title)}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
