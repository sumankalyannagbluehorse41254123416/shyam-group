"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="md:py-16 py-8 bg-white">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-12 relative">
          <h2 className="text-xl md:text-3xl font-bold md:text-center text-left w-full animate-on-scroll fade-in-left">
            What Our Client's Say
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
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
          className="mySwiper"
        >
          {[
            { name: 'Rahul Mehta, Kolkata', rating: '⭐⭐⭐⭐⭐', qute:'“Excellent Quality & Service”', text: 'I purchased a Godrej locker from Shree Shyam Concreto and the experience was seamless. The product is sturdy, reliable, and exactly as promised. Highly recommended!' },
            { name: 'Priya Agarwal, Midnapore', rating: '⭐⭐⭐⭐⭐', qute:'“Safe Investment for My Business”', text: ' The strong room door and safe I bought give me complete peace of mind. The team guided me well and installation was quick. Very professional service.' },
            { name: 'Sanjay Kumar, Kharagpur', rating: '⭐⭐⭐⭐⭐',qute:'“Trusted Dealer of Godrej Safes”', text: "Authentic products with warranty and after-sales support. I am very satisfied with my purchase and would definitely recommend them to others." },
          
          ].map((testimonial, index) => (
            <SwiperSlide key={testimonial.name}>
              <div className={`h-60 bg-gray-50 p-6 rounded-lg border flex flex-col justify-between animate-on-scroll fade-in-up delay-${(index + 1) * 100}`}>
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center mr-4">
                    {testimonial.name === 'Another Client' ? (
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">AB</div>
                    ) : (
                      <Image src="/images/man1.avif" alt={testimonial.name} width={48} height={48} className="rounded-full object-cover h-[48px]" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">{testimonial.rating}</div>
                  </div>
                </div>
                 <p className='text-gray-600 font-bold flex-grow'>{testimonial.qute}</p>
                <p className="text-gray-600 flex-grow">{testimonial.text}</p>
               
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}