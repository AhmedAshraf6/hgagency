import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { RiTeamLine } from 'react-icons/ri';
import { LiaAwardSolid } from 'react-icons/lia';
import { HiLightBulb } from 'react-icons/hi';
import { PiHandshakeLight } from 'react-icons/pi';
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
      className='mt-10 sm:mt-24 counter grid text-primary align-element gap-5 grid-template-fit '
    >
      <div className='flex items-center gap-3'>
        <div className='rounded-full flex justify-center items-center p-2 bg-primary text-base-content'>
          <PiHandshakeLight className='text-2xl sm:text-5xl' />
        </div>
        <div>
          <h3 className='text-2xl sm:text-5xl font-semibold'>
            {counterOn && <CountUp end='200' duration={3} delay={0} />}+
          </h3>
          <span className='text-gray-400 '>Expert Team</span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='rounded-full flex justify-center items-center p-2 bg-primary text-base-content'>
          <LiaAwardSolid className='text-2xl sm:text-5xl' />
        </div>
        <div>
          <h3 className='text-2xl sm:text-5xl font-semibold'>
            {counterOn && <CountUp end='27' duration={3} delay={0} />}+
          </h3>
          <span className='text-gray-400 '>National Award</span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='rounded-full flex justify-center items-center p-2 bg-primary text-base-content'>
          <HiLightBulb className='text-2xl sm:text-5xl' />
        </div>
        <div>
          <h3 className='text-2xl sm:text-5xl font-semibold'>
            {counterOn && <CountUp end='192' duration={3} delay={0} />}+
          </h3>
          <span className='text-gray-400 '>Project Completed</span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='rounded-full flex justify-center items-center p-2 bg-primary text-base-content'>
          <RiTeamLine className='text-2xl sm:text-5xl' />
        </div>
        <div>
          <h3 className='text-2xl sm:text-5xl font-semibold'>
            {counterOn && <CountUp end='186' duration={3} delay={0} />}+
          </h3>
          <span className='text-gray-400 '>Happy Clients</span>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
//  {counterOn && <CountUp end='200' duration={3} delay={0} />}+
