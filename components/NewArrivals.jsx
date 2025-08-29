// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import Image from 'next/image';

// export default function NewArrivals() {
//   return (
//     <section className="md:py-16 py-8 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center mb-12 relative">
//           <h2 className="text-xl md:text-3xl font-bold md:text-center text-left w-full animate-on-scroll fade-in-down">
//             New Arrivals
//           </h2>
//           <div className="flex gap-3 absolute right-0 top-0">
//             <button className="arrival-prev h-7 w-7 md:h-10 md:w-10 flex items-center cursor-pointer justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
//               <i className="ri-arrow-left-s-line text-xl"></i>
//             </button>
//             <button className="arrival-next h-7 w-7 md:h-10 md:w-10 flex items-center cursor-pointer justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
//               <i className="ri-arrow-right-s-line text-xl"></i>
//             </button>
//           </div>
//         </div>
//         <Swiper
//           modules={[Navigation]}
//           spaceBetween={16}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 },
//           }}
//           navigation={{ nextEl: '.arrival-next', prevEl: '.arrival-prev' }}
//           className="arrivalSwiper"
//         >
//           {[
//             { name: 'Biometric Office Locker', img: '/images/1.jpg' },
//             { name: 'Smart Home Security Kit', img: '/images/2.jpg' },
//             { name: 'Currency Sorting Machine', img: '/images/3.jpg' },
//             { name: 'Heavy-Duty Bank Vault', img: '/images/4.jpg' },
//             { name: 'Currency Sorting Machine', img: '/images/5.jpg' },
//           ].map((item, index) => (
//             <SwiperSlide key={item.name}>
//               <div className={`bg-white rounded-lg overflow-hidden transition hover-scale animate-on-scroll flip-in delay-${(index + 1) * 100}`}>
//                 <div className="relative">
//                   <Image src={item.img} alt={item.name} width={300} height={192} className="w-full h-48 object-cover" />
//                   <div className="absolute top-2 right-2 bg-dark_red text-white text-xs font-bold px-2 py-1 rounded-full animate__animated animate__pulse animate__infinite">
//                     NEW
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg text-center text-dark_red font-semibold mb-1">{item.name}</h3>
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
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function NewArrivals() {
  return (
    <section className="md:py-16 py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12 relative">
          <h2 className="text-xl md:text-3xl font-bold md:text-center text-left w-full animate-on-scroll fade-in-down">
            New Arrivals
          </h2>
          <div className="flex gap-3 absolute right-0 top-0">
            <button className="arrival-prev h-7 w-7 md:h-10 md:w-10 flex items-center cursor-pointer justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            <button className="arrival-next h-7 w-7 md:h-10 md:w-10 flex items-center cursor-pointer justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
              <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{ nextEl: '.arrival-next', prevEl: '.arrival-prev' }}
          className="arrivalSwiper"
        >
          {[
            { name: 'Valumatic Counting Machine', img: '/images/1.jpg' },
            { name: ' Key Lock Home Locker', img: '/images/2.jpg' },
            { name: 'Rhino Regal Key Lock', img: '/images/3.jpg' },
            { name: 'Centiguard 560 EL', img: '/images/4.jpg' },
            { name: 'Premium Coffer V1 ', img: '/images/5.jpg' },
          ].map((item, index) => (
            <SwiperSlide key={item.name}>
              <div className={`bg-white rounded-lg overflow-hidden transition hover-scale animate-on-scroll flip-in delay-${(index + 1) * 100}`}>
                <div className="relative">
                  <Image src={item.img} alt={item.name} width={300} height={192} className="w-full h-48 object-cover" />
                  <div className="absolute top-2 right-2 bg-dark_red text-white text-xs font-bold px-2 py-1 rounded-full animate__animated animate__pulse animate__infinite">
                    NEW
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg text-center text-dark_red font-semibold mb-1">{item.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}