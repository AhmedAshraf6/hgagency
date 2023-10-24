import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay } from 'swiper/modules';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
// import required modules
const allStats = [
  { title: 'home insraunce', icon: <AiFillStar /> },
  { title: 'home insraunce', icon: <AiFillStar /> },
  { title: 'home insraunce', icon: <AiFillStar /> },
  { title: 'home insraunce', icon: <AiFillStar /> },
  { title: 'home insraunce', icon: <AiFillStar /> },
  { title: 'home insraunce', icon: <AiFillStar /> },
  { title: 'home insraunce', icon: <AiFillStar /> },
  { title: 'home insraunce', icon: <AiFillStar /> },
  { title: 'home insraunce', icon: <AiFillStar /> },
];
const RtlStatsSlider = () => {
  return (
    <section className='  text-primary text-lg sm:text-2xl py-3 sm:py-5 mt-5'>
      <Swiper
        dir='rtl'
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: true,
        }}
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
        className='mySwiper '
      >
        {allStats.map((stat, index) => (
          <SwiperSlide
            className='flex gap-3 items-center whitespace-nowrap'
            key={index}
          >
            <AiFillStar />
            <span> {stat.title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RtlStatsSlider;
