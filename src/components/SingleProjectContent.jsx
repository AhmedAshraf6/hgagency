import React from 'react';
import { BiUser } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlineClockCircle } from 'react-icons/ai';

const SingleProjectContent = () => {
  return (
    <div className='align-element grid md:grid-cols-3 mt-10 sm:mt-24'>
      <div className='md:col-span-2'>
        <h2 className='text-base-content text-xl sm:text-4xl font-bold'>
          Const Containment
        </h2>
        <p className='paragraph mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          aperiam repudiandae iure beatae fugit earum non nemo voluptas deserunt
          labore repellendus? Eveniet molestias nesciunt praesentium aperiam
          inventore in, nisi sit nostrum consequuntur suscipit assumenda
          sapiente natus a sequi impedit unde nobis laboriosam? Fugit alias
          dolor numquam rem sapiente ab fuga.
        </p>
        <p className='paragraph mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquid
          voluptates maxime similique ab porro rerum quia, modi quibusdam
          officiis dolorem quo a odit praesentium, hic qui accusamus corrupti!
          Voluptatem architecto id adipisci nihil magni, possimus corrupti nam
          esse aperiam sunt iusto accusamus rerum harum pariatur quidem sint
          aspernatur omnis doloremque molestias perferendis exercitationem ullam
          corporis. Consequatur quod esse hic facere harum deleniti fugiat quas
          ex. Enim error voluptates modi!
        </p>
        <div className='accordian mt-5'>
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
        </div>
      </div>
      <div className='col-span-1'>
        <div className='card bg-gray-200 p-5 text-black'>
          <h4 className='font-semibold'>Project Overview</h4>
          <p className='paragraph mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            aliquid.
          </p>
          <div className='flex items-center gap-2 mt-3'>
            <div className='avatar placeholder'>
              <div className='bg-base-content  rounded-full w-10  cursor-pointer transition-all duration-200 '>
                <BiUser className='text-lg text-primary' />
              </div>
            </div>
            <div>
              <h6 className='font-semibold'>Client Name</h6>
              <span className='paragraph'>Alex jones</span>
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
              <span className='paragraph'>Al minya, Egypt</span>
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
              <span className='paragraph'>09 May, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectContent;
