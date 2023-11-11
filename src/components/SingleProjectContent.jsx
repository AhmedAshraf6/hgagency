import React from 'react';
import { BiUser } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';

const SingleProjectContent = ({ singleProject }) => {
  return (
    <div className='align-element grid md:grid-cols-3 mt-10 sm:mt-24'>
      <div className='md:col-span-2'>
        <h2 className='text-base-content text-xl sm:text-4xl font-bold'>
          {singleProject.projectName}
        </h2>
        <p className='paragraph mt-5'>{singleProject.paragraph1}</p>
        <p className='paragraph mt-5'>{singleProject.paragraph2}</p>
        {/* <div className='accordian mt-5'>
          <details className='collapse collapse-plus'>
            <summary className='m-0 p-0 collapse-title text-lg font-semibold text-primary'>
              who is insurance?
            </summary>
            <div className='collapse-content m-0 p-0'>
              <p className='paragraph'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem a quibusdam deleniti aliquid recusandae quia similique,
                ullam consequatur perspiciatis? Nam.
              </p>
            </div>
          </details>
          <details className='collapse collapse-plus'>
            <summary className='m-0 p-0 collapse-title text-lg font-semibold text-primary'>
              the purchase of insurance?
            </summary>
            <div className='collapse-content m-0 p-0'>
              <p className='paragraph'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
                similique in autem officiis maiores omnis a necessitatibus quas
                voluptatibus nobis tempore consectetur ea sunt minima quam
                possimus exercitationem perferendis sapiente pariatur, aut
                recusandae dolores officia! Voluptate voluptates aliquid
                molestias ad.
              </p>
            </div>
          </details>
        </div> */}
      </div>
      <div className='col-span-1'>
        <div className='card bg-gray-200 p-5 text-black'>
          <h4 className='font-semibold'>Project Overview</h4>
          <p className='paragraph mt-3'>
            {singleProject.paragraph1.slice(0, 70)}
          </p>
          <div className='flex items-center gap-2 mt-3'>
            <div className='avatar placeholder'>
              <div className='bg-base-content  rounded-full w-10  cursor-pointer transition-all duration-200 '>
                <BiUser className='text-lg text-primary' />
              </div>
            </div>
            <div>
              <h6 className='font-semibold'>Client Name</h6>
              <span className='paragraph'>{singleProject.clientName}</span>
            </div>
          </div>
          <div className='flex items-center gap-2 mt-3'>
            <div className='avatar placeholder'>
              <div className='bg-base-content  rounded-full w-10  cursor-pointer transition-all duration-200 '>
                <IoLocationSharp className='text-lg text-primary' />
              </div>
            </div>
            <div>
              <h6 className='font-semibold'>Locations</h6>
              <span className='paragraph'>{singleProject.location}</span>
            </div>
          </div>
          <div className='flex items-center gap-2 mt-3'>
            <div className='avatar placeholder'>
              <div className='bg-base-content  rounded-full w-10  cursor-pointer transition-all duration-200 '>
                <AiOutlineClockCircle className='text-lg text-primary' />
              </div>
            </div>
            <div>
              <h6 className='font-semibold'>Date</h6>
              <span className='paragraph'>
                {singleProject.date.split('T')[0]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectContent;
