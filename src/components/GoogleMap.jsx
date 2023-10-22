import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { LuMailOpen } from 'react-icons/lu';
import { CiBookmarkMinus } from 'react-icons/ci';
import { PiChatsTeardropBold } from 'react-icons/pi';

const GoogleMap = () => {
  return (
    <div className='mt-10 sm:mt-24'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.247050089167!2d30.7495488755931!3d28.10850150768412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145b24f956203007%3A0x2c7d2fb286d22094!2z2YbYp9iv2Yog2KfZhNmF2YbZitinINin2YTYsdmK2KfYttmK!5e0!3m2!1sen!2seg!4v1697988512702!5m2!1sen!2seg'
        loading='lazy'
        className='w-full h-[60vh]'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
      <div className='max-w-6xl relative bottom-20 left-[50%] -translate-x-[50%]'>
        <div className=' max-w-2xl mx-auto bg-primary rounded-lg grid place-items-center py-4 sm:py-6 px-3 sm:px-6'>
          <h2 className='text-base-content text-sm font-semibold'>
            Drop a message
          </h2>
          <h3 className='text-xl sm:text-3xl max-w-sm text-center font-bold text-black'>
            We are always ready to slove your proplems
          </h3>
          <div className='mt-5 sm:mt-10 flex flex-col  gap-y-5 w-full'>
            <div className='flex flex-wrap sm:flex-nowrap gap-3'>
              <div className='relative  w-full'>
                <input
                  type='text'
                  className='border border-gray-300 focus:border-base-content outline-none py-2 px-4 pr-10 rounded-md bg-primary w-full'
                  placeholder='Full Name'
                />
                <div className='absolute top-0 right-2 h-full flex items-center pointer-events-none'>
                  <AiOutlineUser className='text-base-content text-sm' />
                </div>
              </div>
              <div className='relative w-full'>
                <input
                  type='text'
                  className='border border-gray-300 focus:border-base-content outline-none py-2 px-4 pr-10 rounded-md bg-primary w-full'
                  placeholder='Email Address'
                />
                <div className='absolute top-0 right-2 h-full flex items-center pointer-events-none'>
                  <LuMailOpen className='text-base-content text-sm' />
                </div>
              </div>
            </div>
            <div className='relative  w-full'>
              <input
                type='text'
                className='border border-gray-300 focus:border-base-content outline-none py-2 px-4 pr-10 rounded-md bg-primary w-full'
                placeholder='Subject'
              />
              <div className='absolute top-0 right-2 h-full flex items-center pointer-events-none'>
                <CiBookmarkMinus className='text-base-cotent text-sm' />
              </div>
            </div>
            <div className='relative'>
              <textarea
                className='border border-gray-300 focus:border-base-content outline-none py-2 px-4 pr-10 rounded-md resize-none w-full bg-primary'
                placeholder='Message'
              ></textarea>
              <div className='absolute top-4 right-2 h-full  pointer-events-none'>
                <PiChatsTeardropBold className='text-base-content text-sm' />
              </div>
            </div>
            <button className='btn btn-base-content self-center text-xs'>
              Submit Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
