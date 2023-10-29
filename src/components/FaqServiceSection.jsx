import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import { BsFillPatchQuestionFill } from 'react-icons/bs';
import TwoTitles from './TwoTitles';
import { motion } from 'framer-motion';

const FaqServiceSection = () => {
  return (
    <section className='align-element mt-10 sm:mt-24'>
      <div className='grid lg:grid-cols-2 gap-y-5'>
        <div>
          <div className='flex '>
            <img
              src={img1}
              alt=''
              className=' max-w-72 max-h-96 object-cover'
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
              <span className='max-w-[100px] font-bold'>
                Have any Question?
              </span>
            </motion.div>
          </div>

          <img
            src={img2}
            alt=''
            className='relative top-0 sm:-top-[30%] left-0 sm:left-[40%] max-w-72 max-h-96 object-cover mt-5'
          />
        </div>
        <div className='flex flex-col gap-5'>
          <TwoTitles
            title1='Faq Question'
            title2='Have any questions And answers'
          />
          <div className='accordian mt-5'>
            <details className='collapse collapse-plus'>
              <summary className='m-0 p-0 collapse-title text-lg font-semibold text-primary'>
                who is insurance?
              </summary>
              <div className='collapse-content m-0 p-0'>
                <p className='paragraph'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem a quibusdam deleniti aliquid recusandae quia
                  similique, ullam consequatur perspiciatis? Nam.
                </p>
              </div>
            </details>
            <details className='collapse collapse-plus'>
              <summary className='m-0 p-0 collapse-title text-lg font-semibold text-primary'>
                the purchase of insurance?
              </summary>
              <div className='collapse-content m-0 p-0'>
                <p className='paragraph'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum similique in autem officiis maiores omnis a
                  necessitatibus quas voluptatibus nobis tempore consectetur ea
                  sunt minima quam possimus exercitationem perferendis sapiente
                  pariatur, aut recusandae dolores officia! Voluptate voluptates
                  aliquid molestias ad.
                </p>
              </div>
            </details>
            <details className='collapse collapse-plus'>
              <summary className='m-0 p-0 collapse-title text-lg font-semibold text-primary'>
                the purchase of insurance?
              </summary>
              <div className='collapse-content m-0 p-0'>
                <p className='paragraph'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum similique in autem officiis maiores omnis a
                  necessitatibus quas voluptatibus nobis tempore consectetur ea
                  sunt minima quam possimus exercitationem perferendis sapiente
                  pariatur, aut recusandae dolores officia! Voluptate voluptates
                  aliquid molestias ad.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqServiceSection;
