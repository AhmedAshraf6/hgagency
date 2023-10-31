import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay } from 'swiper/modules';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { useFetchStatsSlider } from './Api/fetchHomePage';
// import required modules

const StatsSlider = () => {
  const { data } = useFetchStatsSlider();

  return (
    <section className='bg-base-content  text-neutral text-lg sm:text-2xl py-3 sm:py-5'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        slidesPerGroup={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        speed={50000}
        modules={[Autoplay]}
        className='mySwiper'
      >
        {data.map((stat) => (
          <SwiperSlide
            className='flex gap-3 items-center whitespace-nowrap'
            key={stat.id}
          >
            <AiFillStar />
            <span> {stat.title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default StatsSlider;
// {
//   allStats.map((stat, index) => {
//     return (
//       <SwiperSlide
//         className='flex gap-3 items-center whitespace-nowrap'
//         key={index}
//       >
//         {({ isActive }) => (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.5 }}
//             animate={{
//               opacity: isActive ? 1 : 0,
//               scale: isActive ? 1 : 0.5,
//             }}
//           >
//             {stat.icon}
//             <span> {stat.title}</span>
//           </motion.div>
//         )}
//       </SwiperSlide>
//     );
//   });
// }
