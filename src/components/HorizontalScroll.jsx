import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';
import banner1 from '../assets/banner4.png';
const HorizontalScroll = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-70%']);
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
                Hazem Goma <span className='text-base-content'>Ceo</span> Of Hg
                Group the biggest marketing company in the middle east
              </h2>
            </div>
            <div className='h-screen w-[100vw]  px-10 md:px-10 bg-zinc-900/50 '>
              <div className='grid lg:grid-cols-2 items-center h-full max-w-6xl mx-auto'>
                <div className='grid grid-template-fit gap-4 '>
                  <div>
                    <span className='text-2xl sm:text-6xl font-semibold'>
                      600
                    </span>
                    <p className='paragraph  sm:mt-3'>Prjects Completed</p>
                  </div>
                  <div>
                    <span className='text-2xl sm:text-6xl font-semibold'>
                      100%
                    </span>
                    <p className='paragraph  sm:mt-3'>Clients Satisified</p>
                  </div>
                  <div>
                    <span className='text-2xl sm:text-6xl font-semibold'>
                      56
                    </span>
                    <p className='paragraph  sm:mt-3'>Prjects Completed</p>
                  </div>
                  <div>
                    <span className='text-2xl sm:text-6xl font-semibold'>
                      22
                    </span>
                    <p className='paragraph  sm:mt-3'>Prjects Completed</p>
                  </div>
                </div>
                <div className='w-full'>
                  <img
                    src={banner1}
                    alt=''
                    className='w-full h-[500px] object-contain'
                  />
                </div>
              </div>
            </div>
            <div className='h-screen w-[100vw]  px-10 md:px-10'>
              <div className='h-full flex flex-col gap-y-5 justify-center items-center max-w-5xl mx-auto'>
                <span className='paragraph'>About US ?</span>
                <h1 className='text-2xl md:text-4xl font-bold  text-center leading-[40px] md:leading-[60px]'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Necessitatibus libero impedit saepe velit pariatur voluptas
                  odio et reprehenderit iusto quo.
                </h1>
                <button className='btn btn-primary rounded-2xl btn-outline'>
                  Contact us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HorizontalScroll;
