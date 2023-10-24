import React from 'react';
import { LiaAwardSolid } from 'react-icons/lia';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import TwoTitles from './TwoTitles';

const ServicesSection = () => {
  return (
    <section className='align-element mt-10 sm:mt-24'>
      <TwoTitles
        title1='Avaliable Insurance'
        title2='Lorem ipsum dolor sit.'
        postition='text-center'
      />
      {/* services */}
      <div className='mt-12 flex flex-col '>
        {/* Service 1 */}
        <div className='grid grid-template-fit border-t-2 border-base-300 py-5 gap-5 cursor-default relative group overflow-hidden transation duration-1000'>
          <div className='absolute top-0 -left-[100%] group-hover:left-0 bg-white w-full h-full transation duration-1000'></div>
          <div className='flex  justify-start sm:justify-center items-center gap-3 relative '>
            <LiaAwardSolid className='text-6xl ' />
            <h3 className='max-w-[200px] text-2xl font-semibold text-primary group-hover:text-black transation duration-1000 ease-in-out'>
              Mediacal Insurance
            </h3>
            <div className='absolute h-20 w-[1px] bg-base-300 right-16 hidden lg:block'></div>
          </div>
          <div className='paragraph  group-hover:z-10 transation duration-1000'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            alias sapiente incidunt iure repellat? Ab earum, nam distinctio
            pariatur repudiandae ea labore quisquam sint velit qui adipisci
            veniam. Inventore, dolorum? Maiores
          </div>
          <div className='flex justify-start sm:justify-center items-center group-hover:z-10 '>
            <BsFillArrowUpRightCircleFill className='text-4xl sm:text-5xl ' />
          </div>
        </div>
        {/* Service 1 */}
        <div className='grid grid-template-fit border-t-2 border-base-300 py-5 gap-5 cursor-default relative group overflow-hidden transation duration-1000'>
          <div className='absolute top-0 -left-[100%] group-hover:left-0 bg-white w-full h-full transation duration-1000'></div>
          <div className='flex  justify-start sm:justify-center items-center gap-3 relative '>
            <LiaAwardSolid className='text-6xl ' />
            <h3 className='max-w-[200px] text-2xl font-semibold text-primary group-hover:text-black transation duration-1000'>
              Mediacal Insurance
            </h3>
            <div className='absolute h-20 w-[1px] bg-base-300 right-16 hidden lg:block'></div>
          </div>
          <div className='paragraph  group-hover:z-10 transation duration-1000'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            alias sapiente incidunt iure repellat? Ab earum, nam distinctio
            pariatur repudiandae ea labore quisquam sint velit qui adipisci
            veniam. Inventore, dolorum? Maiores
          </div>
          <div className='flex justify-start sm:justify-center items-center group-hover:z-10 '>
            <BsFillArrowUpRightCircleFill className='text-4xl sm:text-5xl ' />
          </div>
        </div>
        {/* Service 1 */}
        <div className='grid grid-template-fit border-t-2 border-base-300 py-5 gap-5 cursor-default relative group overflow-hidden transation duration-1000'>
          <div className='absolute top-0 -left-[100%] group-hover:left-0 bg-white w-full h-full transation duration-1000'></div>
          <div className='flex  justify-start sm:justify-center items-center gap-3 relative '>
            <LiaAwardSolid className='text-6xl ' />
            <h3 className='max-w-[200px] text-2xl font-semibold text-primary group-hover:text-black transation duration-1000'>
              Mediacal Insurance
            </h3>
            <div className='absolute h-20 w-[1px] bg-base-300 right-16 hidden lg:block'></div>
          </div>
          <div className='paragraph  group-hover:z-10 transation duration-1000'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            alias sapiente incidunt iure repellat? Ab earum, nam distinctio
            pariatur repudiandae ea labore quisquam sint velit qui adipisci
            veniam. Inventore, dolorum? Maiores
          </div>
          <div className='flex justify-start sm:justify-center items-center group-hover:z-10 '>
            <BsFillArrowUpRightCircleFill className='text-4xl sm:text-5xl ' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
<div className='grid lg:grid-cols-3 border-t-2 border-base-300 pt-5'>
  <div className='flex  justify-start sm:justify-center items-center gap-3 relative '>
    <LiaAwardSolid className='text-6xl' />
    <h3 className='max-w-[200px] text-2xl font-semibold text-primary'>
      Mediacal Insurance
    </h3>
    <div className='absolute h-20 w-[1px] bg-base-300 right-16'></div>
  </div>
  <div className=' '>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates alias
    sapiente incidunt iure repellat? Ab earum, nam distinctio pariatur
    repudiandae ea labore quisquam sint velit qui adipisci veniam. Inventore,
    dolorum? Maiores eius earum omnis dignissimos ut perferendis reiciendis
    nulla excepturi.
  </div>
  <div className=''>Lorem, ipsum dolor sit</div>
</div>;
