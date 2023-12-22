import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import { BsFillPatchQuestionFill } from 'react-icons/bs';
import TwoTitles from './TwoTitles';
import { motion } from 'framer-motion';
import { useFetchServicesFaqQuestions } from './Api/fetchServices';

const FaqServiceSection = () => {
  const { data } = useFetchServicesFaqQuestions();
  return (
    <section className='align-element mt-10 sm:mt-24'>
      <div className='grid lg:grid-cols-2 gap-y-5'>
        <div>
          <div className='flex '>
            <img
              src={data?.img1}
              alt=''
              className=' max-w-[300px] w-[300px] max-h-96 object-cover'
            />
            <motion.div
              className='relative z-10 -left-[20px] top-[20px] bg-white/80 rounded-xl h-20  hidden sm:flex text-black items-center flex-wrap px-4 gap-3'
              animate={{
                x: [-20, 20, -20], // Specify the y-axis positions for bouncing
              }}
              transition={{
                repeat: Infinity, // Repeat the animation indefinitely
                duration: 7, // Animation duration per bounce (in seconds)
              }}
            >
              <BsFillPatchQuestionFill className='text-4xl ' />
              <span className='max-w-[100px] font-bold'>{data?.title1}</span>
            </motion.div>
          </div>

          <img
            src={data?.img2}
            alt=''
            className='relative top-0 sm:-top-[30%] left-0 sm:left-[40%] max-w-[300px] w-[300px] max-h-96 object-cover mt-5'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <TwoTitles title1={data?.title2} title2={data?.title3} />
          <div className='accordian mt-5'>
            {data?.questions?.map((quest, index) => (
              <details className='collapse collapse-plus' key={index}>
                <summary className='m-0 p-0 collapse-title text-lg font-semibold text-primary'>
                  {quest.name}
                </summary>
                <div className='collapse-content m-0 p-0'>
                  <p className='paragraph'>{quest.desc}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqServiceSection;
