"use client";
import Image from 'next/image';

export default function MembershipOffers() {
  return (
    <section className="md:py-16 py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
          <div className="animate-on-scroll fade-in-left rounded-sm">
            <Image src="/images/m-Banner1.png" alt="Offer 1" width={600} height={400} className="h-auto w-full max-w-full" />
          </div>
          <div className="animate-on-scroll fade-in-right rounded-sm">
            <Image src="/images/m-Banner2.png" alt="Offer 2" width={600} height={400} className="h-auto w-full max-w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}