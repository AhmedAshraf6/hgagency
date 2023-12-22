import React from 'react';
import TwoTitles from './TwoTitles';
import img1 from '../assets/img2.jpg';
import { useFetchAboutWhyChooseUs } from './Api/fetchAboutPage';

const WhyChooseUs = () => {
  const { data } = useFetchAboutWhyChooseUs();
  return (
    <section className='align-element grid lg:grid-cols-2 gap-8 lg:gap-20 mt-10 sm:mt-24'>
      <div className='flex flex-col gap-5'>
        <TwoTitles title1={data?.title1} title2={data?.title1} />
        <p className='paragraph max-w-md'>{data?.paragraph}</p>
        <div className='flex gap-4 flex-wrap lg:flex-nowrap max-w-md'>
          {data?.sections?.map((sec, index) => (
            <div className='flex gap-3 items-center' key={index}>
              <span className='text-2xl lg:text-4xl text-white font-bold'>
                {sec?.number}
              </span>
              <h2> {sec?.name}</h2>
            </div>
          ))}
        </div>
        <button className='btn btn-primary self-start'>{data?.button}</button>
      </div>
      <div className='h-96 w-full'>
        <img
          src={data?.img}
          alt='banner2'
          className='w-full h-full  object-cover rounded-md'
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
