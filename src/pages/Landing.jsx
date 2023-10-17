import React, { useState } from 'react';
import banner1 from '../assets/banner4.png';
import banner2 from '../assets/banner3.png';
import vid from '../assets/wolf2.mp4';
import {
  Carousel,
  Counter,
  MovingSection,
  Navbar,
  ProjeressSection,
  ServicesSection,
  StatsSlider,
} from '../components';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Landing = () => {
  return (
    <>
      <div className='relative h-screen grid place-items-center '>
        <video
          autoPlay
          loop
          muted
          type={'video/mp4'}
          className='video w-full h-full object-cover absolute'
          src={vid}
        ></video>

        <div className='absolute left-0 top-0 inset-0 bg-black opacity-50' />
        <Navbar />
        <div className='contetnt z-10  max-w-sm mx-3 text-center'>
          <h3 className='text-primary text-2xl font-bold sm:text-5xl leading-10'>
            Lorem ipsum dolor sit{' '}
            <span className='text-base-content'>amet.</span>
          </h3>
          <p className='text-xs leading-4 sm:leading-6 text-gray-300 mt-2 sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, sit repellendus harum ratione voluptatibus nihil hic
            recusandae minus, facilis itaque, ipsa ut veniam explicabo totam eos
            doloribus saepe aliquid magni.
          </p>
          <button className=' btn btn-primary btn-outline rounded-xl btn-sm mt-4'>
            Contact Us
          </button>
        </div>
        <BsFillArrowDownCircleFill className='animate-bounce absolute bottom-5 text-2xl cursor-pointer' />
      </div>
      <StatsSlider />
      <Counter />
      <ServicesSection />
      <MovingSection />
      <ProjeressSection />
    </>
  );
};

export default Landing;
