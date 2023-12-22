import React, { useEffect } from 'react';
import TwoTitles from './TwoTitles';
import img1 from '../assets/banner4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFetchAboutCeoInfo } from './Api/fetchAboutCeo';
const Ceo = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { data } = useFetchAboutCeoInfo();
  return (
    <section className='align-element grid lg:grid-cols-2 gap-8 lg:gap-20 mt-10 sm:mt-24'>
      <div
        className='flex flex-col gap-5'
        data-aos='fade-right'
        data-aos-duration='3000'
      >
        <h1 className='text-primary text-2xl sm:text-5xl font-semibold mt-3 sm:mt-5 max-w-lg '>
          {data?.title1}
        </h1>
        <p className='paragraph max-w-md'>{data?.paragraph}</p>

        <button className='btn btn-primary self-start'> {data?.button}</button>
      </div>
      <div
        className='h-96 w-full'
        data-aos='fade-left'
        data-aos-duration='3000'
      >
        <img
          src={data?.img}
          alt='banner2'
          className='w-full h-full  object-contain rounded-md'
        />
      </div>
    </section>
  );
};

export default Ceo;
