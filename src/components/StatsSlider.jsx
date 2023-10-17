import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AiFillStar } from 'react-icons/ai';
// import required modules
const StatsSlider = () => {
  return (
    <section className='bg-base-content  text-neutral text-lg sm:text-2xl py-3 sm:py-5 '>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
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
        modules={[Autoplay]}
        className='mySwiper align-element'
      >
        <SwiperSlide className='flex gap-3 items-center whitespace-nowrap '>
          <AiFillStar />
          <span> Home Insurence</span>
        </SwiperSlide>
        <SwiperSlide className='flex gap-3 items-center whitespace-nowrap'>
          <AiFillStar />
          <span> Travel Country</span>
        </SwiperSlide>
        <SwiperSlide className='flex gap-3 items-center whitespace-nowrap'>
          <AiFillStar />
          <span> Home Insurence</span>
        </SwiperSlide>
        <SwiperSlide className='flex gap-3 items-center whitespace-nowrap'>
          <AiFillStar />
          <span> Travel Country</span>
        </SwiperSlide>
        <SwiperSlide className='flex gap-3 items-center whitespace-nowrap'>
          <AiFillStar />
          <span> Home Insurence</span>
        </SwiperSlide>
        <SwiperSlide className='flex gap-3 items-center whitespace-nowrap'>
          <AiFillStar />
          <span> Travel Country</span>
        </SwiperSlide>
        <SwiperSlide className='flex gap-3 items-center whitespace-nowrap'>
          <AiFillStar />
          <span> Home Insurence</span>
        </SwiperSlide>
        <SwiperSlide className='flex gap-3 items-center whitespace-nowrap'>
          <AiFillStar />
          <span> Travel Country</span>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default StatsSlider;
