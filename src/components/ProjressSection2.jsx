import React, { useState } from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import { motion } from 'framer-motion';
import TwoTitles from './TwoTitles';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useFetchProgressSection } from './Api/fetchHomePage';
import Loading from './Loading';
import { useFetchAboutProgressSection } from './Api/fetchAboutPage';
const ProjressSection2 = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { data, isLoadingProgressSection } = useFetchAboutProgressSection();
  if (isLoadingProgressSection) {
    return <Loading />;
  }
  return (
    <section className='align-element mt-10 sm:mt-24 grid lg:grid-cols-7 gap-3 sm:gap-5 '>
      {/* images */}
      <div className='relative  lg:col-span-3 h-96 '>
        <motion.div
          className=' w-96 h-96 rounded-full border-[20px] border-base-content/25 absolute '
          animate={{
            y: [-20, 20, -20], // Specify the y-axis positions for bouncing
          }}
          transition={{
            repeat: Infinity, // Repeat the animation indefinitely
            duration: 5, // Animation duration per bounce (in seconds)
          }}
        />
        <img
          src={data?.img2}
          alt=''
          className='w-56 h-80 absolute object-cover left-0 sm:left-[20px] grayscale '
        />
        <img
          src={data?.img2}
          alt=''
          className='w-56 h-72 absolute left-[20%] sm:left-[200px]  top-[100px] grayscale border-4 border-base-200 '
        />
      </div>
      {/* Projress */}
      <div className='flex flex-col gap-3 sm:gap-5 lg:col-span-3'>
        <TwoTitles title1={data?.title1} title2={data?.title2} />
        <p className='paragraph'>{data?.paragraph}</p>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          {data?.progress?.map((prog, index) => (
            <div className='mt-5' key={index}>
              <div className='flex justify-between'>
                <h6 className='font-bold'>{prog?.name}</h6>
                <span className='text-gray-400'>{prog?.number}%</span>
              </div>
              <div className='w-full h-2 rounded-xl bg-base-content/20 mt-2 sm:mt-3'>
                <div
                  className={`h-full rounded-xl bg-base-content ${
                    counterOn ? `w-[${prog?.number}%]` : 'w-0'
                  }`}
                  style={{ transition: 'width 2s linear' }}
                ></div>
              </div>
            </div>
          ))}
        </ScrollTrigger>
        <button className='custom-btn self-start '>{data?.button}</button>
      </div>
      <div className='col-span-1  w-20'>
        <div className='rotate-45'>
          <img className='mask mask-star' src={data?.img1} />
        </div>
      </div>
    </section>
  );
};

export default ProjressSection2;
