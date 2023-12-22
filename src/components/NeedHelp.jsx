import React from 'react';
import { Link } from 'react-router-dom';
import TwoTitles from './TwoTitles';
import { FiPhoneCall } from 'react-icons/fi';
import { LuMailOpen } from 'react-icons/lu';
import { useFetchAboutNeedHelp } from './Api/fetchAboutPage';
const NeedHelp = () => {
  const { data } = useFetchAboutNeedHelp();
  return (
    <section
      className=' bg-cover bg-no-repeat  bg-fixed mt-10 sm:mt-24 py-10 lg:py-20 bg-black/50 '
      style={{
        backgroundImage: `url(${data?.img})`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className='overlay  w-full h-full top-0 left-0 bg-black opacity-70'></div>
      <div className='align-element  text-primary  grid lg:grid-cols-2 items-center gap-5 lg:gap-24  py-5 lg:py-10   h-full'>
        <div>
          <TwoTitles title1={data?.span} title2={data?.title} />
          <button className='btn btn-primary mt-3 sm:mt-5'>Our Team</button>
        </div>
        <div className='flex flex-wrap gap-3'>
          <div className='bg-white py-10 px-8 rounded-md  '>
            <div className='avatar placeholder'>
              <div className='bg-gray-200  rounded-full w-10  cursor-pointer hover:bg-base-content transition-all duration-200 hover:border-base-contents'>
                <FiPhoneCall className='text-lg text-base-content' />
              </div>
            </div>
            <h3 className='text-gray-500 text-sm mt-3'>{data?.phoneTitle} </h3>
            <span className='text-black text-md'>{data?.phoneNumber} </span>
          </div>
          <div className='bg-white py-10 px-8 rounded-md  '>
            <div className='avatar placeholder'>
              <div className='bg-gray-200  rounded-full w-10  cursor-pointer hover:bg-base-content transition-all duration-200 hover:border-base-contents'>
                <LuMailOpen className='text-lg text-base-content' />
              </div>
            </div>
            <h3 className='text-gray-500 text-sm mt-3'>{data?.mailTitle} </h3>
            <span className='text-black text-md'>{data?.mailNumber}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeedHelp;
