import React, { useState } from 'react';
import vid from '../assets/hg.mp4';
import {
  Carousel,
  Clients,
  Counter,
  FeaturedProjects,
  HomeSlider,
  HorizontalScroll,
  Loading,
  MovingSection,
  Navbar,
  ProjeressSection,
  RtlStatsSlider,
  ServicesSection,
  StatsSlider,
} from '../components';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import VideoHome from '../components/VideoHome';
import { useFetchHeroSection } from '../components/Api/fetchHomePage';
import { Helmet } from 'react-helmet-async';

const Landing = () => {
  const { data } = useFetchHeroSection();
  return (
    <>
      <Helmet>
        <title>HG Agency - Home</title>
        <meta name='description' content='Hg Agency Marketing Group' />
        <link rel='canonical' href='/' />
      </Helmet>
      <div className='relative h-[89vh] grid place-items-center '>
        <video
          autoPlay
          loop
          muted
          type={'video/mp4'}
          className='video w-full h-full object-cover  absolute'
          style={{ objectPosition: 'center 30%' }}
          src={data.vid}
        ></video>

        <div className='absolute left-0 top-0 inset-0 bg-black/50' />
        <Navbar extraClassess='absolute top-0 left-0' />
        <div className='contetnt z-10  max-w-sm mx-3 text-center'>
          <h3 className='text-primary text-2xl font-bold sm:text-5xl leading-10'>
            {data?.title}
            {/* <span className='text-base-content'>amet.</span> */}
          </h3>
          <p className='text-xs leading-4 sm:leading-6 text-gray-300 mt-2 sm:mt-4'>
            {data?.paragraph}
          </p>
          <button className=' btn btn-primary btn-outline rounded-xl btn-sm mt-4'>
            {data?.button}
          </button>
        </div>
        <BsFillArrowDownCircleFill className='animate-bounce absolute bottom-5 text-2xl cursor-pointer' />
      </div>

      <StatsSlider />
      <FeaturedProjects />
      <VideoHome />
      <ProjeressSection />
      <Counter />
      <HomeSlider />
      <ServicesSection />
      <div className='mt-10 sm:mt-24'>
        <StatsSlider />
        <RtlStatsSlider />
      </div>
      <Clients />
      <HorizontalScroll />
      <MovingSection />
    </>
  );
};

export default Landing;
