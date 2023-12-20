import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import banner1 from '../assets/banner4.png';
import { useFetchHorizontalSection } from './Api/fetchHomePage';
import { Link } from 'react-router-dom';
const HorizontalScroll = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-70%']);
  const { data } = useFetchHorizontalSection();
  console.log(data);
  return (
    <>
      <section
        ref={targetRef}
        className=' relative h-[500vh]  bg-red-40 text-primary mt-10 sm:mt-24'
      >
        <div className='sticky top-0 left-0 h-screen  flex items-center overflow-hidden'>
          <motion.div
            style={{ x }}
            className='flex transation duration-1000 ease-out'
          >
            <div className='h-screen w-[100vw]  flex justify-center items-center px-10 md:px-10'>
              <h2 className='text-2xl md:text-6xl font-bold text-primary  text-center leading-[40px] md:leading-[90px] max-w-5xl '>
                {data?.mainTitle}
              </h2>
            </div>
            <div className='h-screen w-[100vw]  px-10 md:px-10 bg-zinc-900/50 '>
              <div className='grid lg:grid-cols-2 items-center h-full max-w-6xl mx-auto'>
                <div className='grid grid-template-fit gap-4 '>
                  {data?.hazemInfo?.map((info, index) => (
                    <div key={index}>
                      <span className='text-2xl sm:text-6xl font-semibold'>
                        {info?.number}
                      </span>
                      <p className='paragraph  sm:mt-3'> {info?.name}</p>
                    </div>
                  ))}
                </div>
                <div className='w-full rounded-xl'>
                  <img
                    src={data?.img}
                    alt=''
                    className='w-full h-[500px] object-contain rounded-xl'
                  />
                </div>
              </div>
            </div>
            <div className='h-screen w-[100vw]  px-10 md:px-10'>
              <div className='h-full flex flex-col gap-y-5 justify-center items-center max-w-5xl mx-auto'>
                <span className='paragraph'>{data?.span}</span>
                <h1 className='text-2xl md:text-4xl font-bold  text-center leading-[40px] md:leading-[60px]'>
                  {data?.title}
                </h1>
                <Link
                  className='btn btn-primary rounded-2xl btn-outline'
                  to='/contact'
                >
                  Contact us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HorizontalScroll;
