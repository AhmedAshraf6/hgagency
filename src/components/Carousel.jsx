import React, { useRef, useState } from 'react';
import banner1 from '../assets/banner4.png';
import banner2 from '../assets/banner3.png';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default function Carousel() {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
        <SwiperSlide>
          <div className='grid sm:grid-cols-2 items-center'>
            {/* info */}
            <div className='flex flex-col items-start justify-start'>
              {/* <div className='flex bg-base-content  p-2 rounded-xl text-primary'>
                <p> Insure Peace Agency</p>
              </div> */}
              <h1 className='text-3xl sm:text-6xl font-bold max-w-lg '>
                Secure Your Bussiness Future
              </h1>
              <p className='text-gray-400 text-sm leading-5  sm:leading-6 my-3 sm:my-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem quia, consectetur, officia modi architecto
                tempore alias sequi facilis temporibus ratione voluptas
                explicabo doloremque nemo aliquid eum iusto. Deleniti, quaerat
                tenetur.
              </p>
              <button className='btn btn-primary'>Discover More</button>
            </div>
            {/* image */}
            <img src={banner1} className='w-full h-[600px]' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid sm:grid-cols-2 '>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              quo nam ipsa dicta natus eaque pariatur alias, quasi provident
              iure.
            </p>
            <img src={banner2} className='w-full object-cover h-auto' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
