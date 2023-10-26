import React, { useEffect } from 'react';
import img1 from '../assets/clients/img1.png';
import img2 from '../assets/clients/img2.png';
import img3 from '../assets/clients/img3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Clients = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    // sm:grid-cols-5 md:grid-cols-6
    <div className='align-element mt-10 sm:mt-24 '>
      <h2 className='text-xl sm:text-4xl text-primary font-bold text-center'>
        Our Clients
      </h2>
      <section className='grid mt-5 sm:mt-10 grid-template-fit  '>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='300'
          data-aos-anchor-placement='center-center'
        >
          <img src={img1} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='500'
          data-aos-anchor-placement='center-center'
        >
          <img src={img2} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='700'
          data-aos-anchor-placement='center-center'
        >
          <img src={img3} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='900'
          data-aos-anchor-placement='center-center'
        >
          <img src={img1} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='1100'
          data-aos-anchor-placement='center-center'
        >
          <img src={img2} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='1300'
          data-aos-anchor-placement='center-center'
        >
          <img src={img3} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='1500'
          data-aos-anchor-placement='center-center'
        >
          <img src={img1} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='1700'
          data-aos-anchor-placement='center-center'
        >
          <img src={img2} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='1900'
          data-aos-anchor-placement='center-center'
        >
          <img src={img3} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='2100'
          data-aos-anchor-placement='center-center'
        >
          <img src={img1} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='2300'
          data-aos-anchor-placement='center-center'
        >
          <img src={img2} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='2500'
          data-aos-anchor-placement='center-center'
        >
          <img src={img3} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='2700'
          data-aos-anchor-placement='center-center'
        >
          <img src={img1} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='2900'
          data-aos-anchor-placement='center-center'
        >
          <img src={img2} className='h-20 grayscale' />
        </div>
        <div
          className='border-2 border-gray-300/10 flex justify-center items-center py-3'
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='3000'
          data-aos-anchor-placement='center-center'
        >
          <img src={img3} className='h-20 grayscale' />
        </div>
      </section>
    </div>
  );
};

export default Clients;
