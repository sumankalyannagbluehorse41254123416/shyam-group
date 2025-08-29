// "use client";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper';
// import Image from 'next/image';

// export default function Categories() {
//   return (
//     <section className="py-12 bg-white">
//       <div className="container mx-auto px-4 relative">
//         <div className="flex justify-between items-center mb-12 relative">
//           <h2 className="text-xl md:text-3xl font-bold md:text-center text-left w-full animate-on-scroll fade-in-left">
//             Shop By Categories
//           </h2>
//           <div className="flex gap-3 absolute right-0 top-0">
//             <button className="category-prev h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
//               <i className="ri-arrow-left-s-line text-xl"></i>
//             </button>
//             <button className="category-next h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
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
//             1024: { slidesPerView: 5 },
//           }}
//           navigation={{ nextEl: '.category-next', prevEl: '.category-prev' }}
//           className="categorySwiper"
//         >
//           {[
//             { name: 'Safes', img: '/images/safes.png' },
//             { name: 'DD Safes', img: '/images/ddsafes.jpg' },
//             { name: 'Strong Room', img: '/images/strong-roof.jpg' },
//             { name: 'Gold Testing', img: '/images/gold-testing.png' },
//             { name: 'Lockers', img: '/images/Locks.jpg' },
//             { name: 'Fling cabinets', img: '/images/currency-handling.jpg' },
//           ].map((category, index) => (
//             <SwiperSlide key={category.name}>
//               <div className={`bg-gray-100 group p-6 rounded-lg text-center animate-on-scroll fade-in-up delay-${(index + 1) * 100}`}>
//                 <div className="bg-white w-28 h-28 mx-auto rounded-full flex items-center justify-center mb-4 transform transition-transform duration-500 group-hover:scale-x-[-1]">
//                   <Image src={category.img} alt={category.name} width={80} height={80} />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }



"use client";
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 relative">
        <div className="flex justify-between items-center mb-12 relative">
          <h2 className="text-xl md:text-3xl font-bold md:text-center text-left w-full animate-on-scroll fade-in-left">
            Shop By Categories
          </h2>
          <div className="flex gap-3 absolute right-0 top-0">
            <button className="category-prev h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
              <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            <button className="category-next h-7 w-7 md:h-10 md:w-10 flex items-center justify-center rounded-full bg-gray-200 shadow-md transition-all hover:bg-dark_red hover:text-white">
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
            1024: { slidesPerView: 5 },
          }}
          navigation={{ nextEl: '.category-next', prevEl: '.category-prev' }}
          className="categorySwiper"
        >
          {[
            { name: 'Safes', img: '/images/Safes.png' },
            { name: 'DD Safes', img: '/images/DD safes.png' },
            { name: 'Strong Room', img: '/images/Strong Room.png' },
            { name: 'Gold Testing', img: '/images/Strong Room-1.png' },
            { name: 'Lockers', img: '/images/Lock.png' },
            // { name: 'Fling cabinets', img: '/images/currency-handling.jpg' },
          ].map((category, index) => (
            <SwiperSlide key={category.name}>
              <div className={`bg-gray-100 group p-4 group  rounded-lg text-center animate-on-scroll fade-in-up delay-${(index + 1) * 100}`}>
                <div className=" mx-auto rounded-full flex items-center justify-center mb-4 transform transition-transform duration-500 group-hover:scale-x-[-1]">
                  <Image src={category.img} alt={category.name} width={120} height={120} className='h-36 w-36 object-cover'/>
                </div>
                <h3 className="text-xl font-semibold ">{category.name}</h3>
              </div>
            </SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}