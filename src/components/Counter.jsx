import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { RiTeamLine } from 'react-icons/ri';
import { LiaAwardSolid } from 'react-icons/lia';
import { HiLightBulb } from 'react-icons/hi';
import { PiHandshakeLight } from 'react-icons/pi';
import { useFetchCounterSection } from './Api/fetchHomePage';
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { data, isLoadingCounterSection } = useFetchCounterSection();

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
            {counterOn && (
              <CountUp
                end={data?.counter?.expertTeam?.number}
                duration={3}
                delay={0}
              />
            )}
            +
          </h3>
          <span className='text-gray-400 '>
            {data?.counter?.expertTeam?.name}
          </span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='rounded-full flex justify-center items-center p-2 bg-primary text-base-content'>
          <LiaAwardSolid className='text-2xl sm:text-5xl' />
        </div>
        <div>
          <h3 className='text-2xl sm:text-5xl font-semibold'>
            {counterOn && (
              <CountUp
                end={data?.counter?.nationalAward?.number}
                duration={3}
                delay={0}
              />
            )}
            +
          </h3>
          <span className='text-gray-400 '>
            {data?.counter?.nationalAward?.name}
          </span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='rounded-full flex justify-center items-center p-2 bg-primary text-base-content'>
          <HiLightBulb className='text-2xl sm:text-5xl' />
        </div>
        <div>
          <h3 className='text-2xl sm:text-5xl font-semibold'>
            {counterOn && (
              <CountUp
                end={data?.counter?.projectCompleted?.number}
                duration={3}
                delay={0}
              />
            )}
            +
          </h3>
          <span className='text-gray-400 '>
            {data?.counter?.projectCompleted?.name}
          </span>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='rounded-full flex justify-center items-center p-2 bg-primary text-base-content'>
          <RiTeamLine className='text-2xl sm:text-5xl' />
        </div>
        <div>
          <h3 className='text-2xl sm:text-5xl font-semibold'>
            {counterOn && (
              <CountUp
                end={data?.counter?.happyClients?.number}
                duration={3}
                delay={0}
              />
            )}
            +
          </h3>
          <span className='text-gray-400 '>
            {data?.counter?.happyClients?.name}
          </span>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
//  {counterOn && <CountUp end='200' duration={3} delay={0} />}+
