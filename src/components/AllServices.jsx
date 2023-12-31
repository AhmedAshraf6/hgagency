import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import img3 from '../assets/img3.jpg';
import { useFetchServices } from './Api/fetchServices';

const AllServices = () => {
  const { data } = useFetchServices();
  return (
    <section className='align-element mt-10 sm:mt-24 '>
      <h1 className='text-xl sm:text-4xl text-primary text-center fond-bold'>
        Wr Are Expert for
      </h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5'>
        {data?.map((service) => (
          <div
            className='bg-cover bg-no-repeat   w-full h-44 relative group overflow-hidden rouned-lg'
            style={{
              backgroundImage: `url(${service?.img})`,
            }}
            data-aos='fade-up'
            data-aos-duration='1000'
            data-aos-delay='500'
          >
            <div className='bg-black/50 overlay absolute bottom-0 w-full h-full left-0 transition-all duration-700'></div>
            <div className='absolute bottom-10 left-[50%] -translate-x-[50%]  flex flex-col gap-2 items-center transition-all   duration-700 cursor-pointer'>
              {/* <div className='avatar placeholder'>
                <div className='  w-12  cursor-pointer  transition-all duration-200 '>
                  <AiOutlineShoppingCart className='text-4xl' />
                </div>
              </div> */}
              <div className='text-center flex flex-col text-primary'>
                <span className='font-bold'>{service?.title1}</span>
                <span className='paragraph font-semibold'>
                  {service?.title2}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllServices;
