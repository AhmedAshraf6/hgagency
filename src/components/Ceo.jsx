import React from 'react';
import TwoTitles from './TwoTitles';
import img1 from '../assets/banner4.png';

const Ceo = () => {
  return (
    <section className='align-element grid lg:grid-cols-2 gap-8 lg:gap-20 mt-10 sm:mt-24'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-primary text-2xl sm:text-5xl font-semibold mt-3 sm:mt-5 max-w-lg '>
          Hazem Gomaa Ceo
        </h1>
        <p className='paragraph max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quo iure
          a nobis praesentium explicabo mollitia quam molestias molestiae
          laboriosam.
        </p>
        <p className='paragraph max-w-md'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quo iure
          a nobis praesentium explicabo mollitia quam molestias molestiae
          laboriosam.
        </p>

        <button className='btn btn-primary self-start'>Projects</button>
      </div>
      <div className='h-96 w-full'>
        <img
          src={img1}
          alt='banner2'
          className='w-full h-full  object-contain rounded-md'
        />
      </div>
    </section>
  );
};

export default Ceo;
