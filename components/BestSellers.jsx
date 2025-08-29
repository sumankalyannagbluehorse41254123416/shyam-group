// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper';
// import Image from 'next/image';

// export default function BestSellers() {
//   return (
//     <section className="md:py-16 py-8 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-12 relative">
//           <h2 className="text-xl md:text-3xl font-bold md:text-center text-left w-full animate-on-scroll fade-in-left">
//             Best Sellers
//           </h2>
//           <div className="flex gap-3 absolute right-0 top-0">
//             <button className="swiper-button-prev-custom h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
//               <i className="ri-arrow-left-s-line text-xl"></i>
//             </button>
//             <button className="swiper-button-next-custom h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
//               <i className="ri-arrow-right-s-line text-xl"></i>
//             </button>
//           </div>
//         </div>
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop={true}
//           navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           className="bestSellerCarousel"
//         >
//           {[
//             { name: 'Digital Smart Lock DL-3000', img: '/images/5.jpg' },
//             { name: 'Fireproof Document Safe FS-250', img: '/images/6.jpg' },
//             { name: '4K Security Camera System', img: '/images/6.jpg' },
//             { name: 'Hand Sanitizer', img: '/images/7.jpg' },
//             { name: 'Hand Sanitizer', img: '/images/8.jpg' },
//           ].map((item, index) => (
//             <SwiperSlide key={item.name}>
//               <div className={`bg-gray-50 rounded-lg overflow-hidden transition transform hover:scale-105 h-full flex flex-col animate-on-scroll fade-in-up delay-${(index + 1) * 100}`}>
//                 <div className="relative">
//                   <Image src={item.img} alt={item.name} width={300} height={192} className="w-full h-48 object-cover" />
//                   <span className="absolute top-2 right-2 bg-dark_red text-white text-xs font-bold px-2 py-1 rounded">BEST</span>
//                 </div>
//                 <div className="p-4 flex-1 flex items-center justify-center">
//                   <h3 className="text-lg text-dark_red font-semibold text-center">{item.name}</h3>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }





// "use client";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Autoplay } from 'swiper/modules';
// import Image from 'next/image';

// export default function BestSellers() {
//   return (
//     <section className="md:py-16 py-8 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-12 relative">
//           <h2 className="text-xl md:text-3xl font-bold md:text-center text-left w-full animate-on-scroll fade-in-left">
//             Best Sellers
//           </h2>
//           <div className="flex gap-3 absolute right-0 top-0">
//             <button className="swiper-button-prev-custom h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
//               <i className="ri-arrow-left-s-line text-xl"></i>
//             </button>
//             <button className="swiper-button-next-custom h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
//               <i className="ri-arrow-right-s-line text-xl"></i>
//             </button>
//           </div>
//         </div>
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop={true}
//           navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//             1280: { slidesPerView: 4 },
//           }}
//           className="bestSellerCarousel"
//         >
//           {[
//             { name: 'Digital Smart Lock DL-3000', img: '/images/5.jpg' },
//             { name: 'Fireproof Document Safe FS-250', img: '/images/6.jpg' },
//             { name: '4K Security Camera System', img: '/images/6.jpg' },
//             { name: 'Hand Sanitizer', img: '/images/7.jpg' },
//             { name: 'Hand Sanitizer', img: '/images/8.jpg' },
//           ].map((item, index) => (
//             <SwiperSlide key={item.name}>
//               <div className={`bg-gray-50 rounded-lg overflow-hidden transition transform hover:scale-105 h-full flex flex-col animate-on-scroll fade-in-up delay-${(index + 1) * 100}`}>
//                 <div className="relative">
//                   <Image src={item.img} alt={item.name} width={300} height={192} className="w-full h-48 object-cover" />
//                   <span className="absolute top-2 right-2 bg-dark_red text-white text-xs font-bold px-2 py-1 rounded">BEST</span>
//                 </div>
//                 <div className="p-4 flex-1 flex items-center justify-center">
//                   <h3 className="text-lg text-dark_red font-semibold text-center">{item.name}</h3>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function BestSellers() {
  return (
    <section className="md:py-16 py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12 relative">
          <h2 className="text-xl md:text-3xl font-bold md:text-center text-left w-full animate-on-scroll fade-in-left">
            Best Sellers
          </h2>
          <div className="flex gap-3 absolute right-0 top-0">
            <button className="swiper-button-prev-custom h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            <button className="swiper-button-next-custom h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="bestSellerCarousel"
        >
          {[
            { name: 'Digital Smart Lock DL-3000', img: '/images/5.jpg' },
            { name: 'Fireproof Document Safe FS-250', img: '/images/6.jpg' },
            { name: '4K Security Camera System', img: '/images/6.jpg' },
            { name: 'Hand Sanitizer 500ml', img: '/images/7.jpg' },
            { name: 'Hand Sanitizer 1000ml', img: '/images/8.jpg' },
          ].map((item, index) => (
            <SwiperSlide key={item.name}>
              <div className={`bg-gray-50 rounded-lg overflow-hidden transition transform hover:scale-105 h-full flex flex-col animate-on-scroll fade-in-up delay-${(index + 1) * 100}`}>
                <div className="relative">
                  <Image src={item.img} alt={item.name} width={300} height={192} className="w-full h-48 object-cover" />
                  <span className="absolute top-2 right-2 bg-dark_red text-white text-xs font-bold px-2 py-1 rounded">BEST</span>
                </div>
                <div className="p-4 flex-1 flex items-center justify-center">
                  <h3 className="text-lg text-dark_red font-semibold text-center">{item.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}