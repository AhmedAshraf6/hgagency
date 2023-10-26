import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/banner3.png';
import img4 from '../assets/banner4.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const carouselImages = [img1, img2, img3, img4];
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
];
const SingleProductSlider = () => {
  return (
    <div className='align-element mt-10 sm:mt-24'>
      <Swiper
        slidesPerView={1}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Autoplay, Navigation]}
        className='mySwiper align-element'
      >
        {slides.map((slide, index) => (
          <SwiperSlide className='flex gap-3 items-center whitespace-nowrap w-full'>
            <img
              src={slide.img}
              alt=''
              className='w-full  object-contain h-[500px]'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SingleProductSlider;
