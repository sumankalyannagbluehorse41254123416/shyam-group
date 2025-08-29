"use client";
import Image from 'next/image';

export default function DealOfWeek() {
  return (
    <section className="py-10 md:py-16 bg-gray-100">
      <div className="container mx-auto animate-on-scroll zoom-in">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-3xl font-bold text-center mb-2">Deal Of This Week</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Essential equipment for daily living and mobility</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center">
          <a className="block" href="#">
            <div className="rounded-lg hover-scale animate-on-scroll fade-in-left">
              <Image src="/images/Gold Testing Machine.png" alt="Deal 1" width={600} height={400} className=" w-full h-auto max-w-full" />
            </div>
          </a>
          <div className="rounded-lg flex flex-col gap-4">
            <a className="block" href="#">
              <div className="rounded-lg hover-scale animate-on-scroll fade-in-right delay-200">
                <Image src="/images/Fire Resistant Filing Cabinets.png" alt="Deal 2" width={300} height={200} className=" w-full h-auto max-w-full" />
              </div>
            </a>
            <a className="block" href="#">
              <div className="rounded-lg hover-scale animate-on-scroll fade-in-right delay-400">
                <Image src="/images/Currency Counting Machine.png" alt="Deal 3" width={300} height={200} className=" w-full h-auto max-w-full" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}