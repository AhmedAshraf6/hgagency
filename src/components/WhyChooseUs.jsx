import React from 'react';
import TwoTitles from './TwoTitles';
import img1 from '../assets/img2.jpg';

const WhyChooseUs = () => {
  return (
    <section className='align-element grid lg:grid-cols-2 gap-8 lg:gap-20 mt-10 sm:mt-24'>
      <div className='flex flex-col gap-5'>
        <TwoTitles
          title1='Why Choose Us'
          title2='Simplify Insurance Coverage Today'
        />
        <p className='paragraph max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quo iure
          a nobis praesentium explicabo mollitia quam molestias molestiae
          laboriosam.
        </p>
        <div className='flex gap-4 flex-wrap lg:flex-nowrap max-w-md'>
          <div className='flex gap-3 items-center'>
            <span className='text-2xl lg:text-4xl text-white font-bold'>
              89K
            </span>
            <h2>Oroject Complated Last Years</h2>
          </div>
          <div className='flex gap-3 items-center'>
            <span className='text-2xl lg:text-4xl text-white font-bold'>
              89K
            </span>
            <h2>Oroject Complated Last Years</h2>
          </div>
        </div>
        <button className='btn btn-primary self-start'>Discover More</button>
      </div>
      <div className='h-96 w-full'>
        <img
          src={img1}
          alt='banner2'
          className='w-full h-full  object-cover rounded-md'
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
