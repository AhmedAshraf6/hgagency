import React from 'react';
import { TwoTitles } from './index';
import { HiBuildingStorefront } from 'react-icons/hi2';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import { Autoplay } from 'swiper/modules';
const slides = [
  {
    img: img1,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img2,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img3,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img1,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img2,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img3,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img1,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img2,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img3,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img1,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img2,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img3,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img1,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img2,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    img: img3,
    title: 'home insurance',
    paragraph: 'Home Insuance',
    icon: <HiOutlineArrowTrendingUp />,
  },
];
const HomeSlider = () => {
  return (
    <div className='align-element mt-10 sm:mt-24'>
      <TwoTitles
        title1='How it Work'
        title2='The Insurance Journey'
        postition='text-center'
      />
      <div className='card grid md:grid-cols-3 lg:grid-cols-4 mt-20 gap-y-20'>
        <div className='flex flex-col gap-3 items-center relative'>
          <HiBuildingStorefront className='text-base-content text-4xl' />
          {/* <div className='absolute rounded-full bg-base-content text-primary flex justify-center items-center p-1'>
            02
          </div> */}
          <div className='relative'>
            <div className=' avatar placeholder  -right-[50px] bottom-[80px]'>
              <span className=' rounded-full w-6 text-center bg-base-content text-primary'>
                02
              </span>
            </div>
          </div>
          <h3 className='text-primary'>Get Started</h3>
          <p className='paragraph text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, blanditiis?
          </p>
        </div>
        <div className='flex flex-col gap-3 items-center relative'>
          <HiBuildingStorefront className='text-base-content text-4xl' />
          {/* <div className='absolute rounded-full bg-base-content text-primary flex justify-center items-center p-1'>
            02
          </div> */}
          <div className='relative'>
            <div className=' avatar placeholder  -right-[50px] bottom-[80px]'>
              <span className=' rounded-full w-6 text-center bg-base-content text-primary'>
                02
              </span>
            </div>
          </div>
          <h3 className='text-primary'>Get Started</h3>
          <p className='paragraph text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, blanditiis?
          </p>
        </div>
        <div className='flex flex-col gap-3 items-center relative'>
          <HiBuildingStorefront className='text-base-content text-4xl' />
          {/* <div className='absolute rounded-full bg-base-content text-primary flex justify-center items-center p-1'>
            02
          </div> */}
          <div className='relative'>
            <div className=' avatar placeholder  -right-[50px] bottom-[80px]'>
              <span className=' rounded-full w-6 text-center bg-base-content text-primary'>
                02
              </span>
            </div>
          </div>
          <h3 className='text-primary'>Get Started</h3>
          <p className='paragraph text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, blanditiis?
          </p>
        </div>
        <div className='flex flex-col gap-3 items-center relative'>
          <HiBuildingStorefront className='text-base-content text-4xl' />
          {/* <div className='absolute rounded-full bg-base-content text-primary flex justify-center items-center p-1'>
            02
          </div> */}
          <div className='relative'>
            <div className=' avatar placeholder  -right-[50px] bottom-[80px]'>
              <span className=' rounded-full w-6 text-center bg-base-content text-primary'>
                02
              </span>
            </div>
          </div>
          <h3 className='text-primary'>Get Started</h3>
          <p className='paragraph text-center'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Asperiores, blanditiis?
          </p>
        </div>
      </div>
      <section className='text-neutral text-lg sm:text-2xl py-3 sm:py-5 mt-10 sm:mt-20'>
        <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 3000,
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
              spaceBetween: 15,
            },
          }}
          speed={3000}
          modules={[Autoplay]}
          className='mySwiper align-element'
        >
          {slides.map((slide, index) => (
            <SwiperSlide className='flex gap-3 items-center whitespace-nowrap w-full'>
              <div
                className='bg-cover bg-no-repeat w-full h-96 relative group overflow-hidden rouned-lg'
                style={{
                  backgroundImage: `url(${slide.img})`,
                }}
              >
                <div className='group-hover:bg-black/50 overlay absolute bottom-0 w-full h-full left-0 transition-all duration-700'></div>
                <div className='absolute bottom-0 -left-[90%] group-hover:left-0 flex  transition-all   duration-700 cursor-pointer'>
                  <div className='avatar placeholder bg-base-content p-3'>
                    <div className='bg-white  rounded-full w-12  cursor-pointer  transition-all duration-200 '>
                      <div className='text-2xl'>{slide.icon}</div>
                    </div>
                  </div>
                  <div className='px-4 flex flex-col items-start justify-center bg-white'>
                    <span className='text-xs text-base-content'>
                      {slide.title}
                    </span>
                    <span className='text-base font-bold text-black'>
                      {slide.paragraph}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default HomeSlider;
