import React from 'react';
import phone from '../assets/phone.png';
import map from '../assets/map.png';
import email from '../assets/email.png';
import openingHours from '../assets/openinghours.png';
const ContactInfo = () => {
  return (
    <section className='align-element mt-10 sm:mt-24 grid grid-template-fit gap-5 '>
      <div className='card  bg-white text-neutral-content'>
        <div className='card-body items-center text-center'>
          <img className='w-14 h-14' src={map} alt='location' />
          <h3 className='text-lg text-black font-bold'>Office Location</h3>
          <p className='paragraph'>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
      <div className='card  bg-white text-neutral-content'>
        <div className='card-body items-center text-center'>
          <img className='w-14 h-14' src={email} alt='location' />
          <h3 className='text-lg text-black font-bold'>Office Location</h3>
          <p className='paragraph'>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
      <div className='card  bg-white text-neutral-content'>
        <div className='card-body items-center text-center'>
          <img className='w-14 h-14' src={phone} alt='location' />
          <h3 className='text-lg text-black font-bold'>Office Location</h3>
          <p className='paragraph'>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
      <div className='card  bg-white text-neutral-content'>
        <div className='card-body items-center text-center'>
          <img className='w-14 h-14' src={openingHours} alt='location' />
          <h3 className='text-lg text-black font-bold'>Office Location</h3>
          <p className='paragraph'>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
