import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import { useFetchFooter } from './Api/fetchHomePage';

const Footer = () => {
  const { data } = useFetchFooter();
  console.log(data?.services);
  return (
    <div className='mt-10 sm:mt-24 '>
      <footer className='footer py-10 text-primary grid grid-template-fit gap-5 sm:gap-10 align-element'>
        <nav>
          <header className='footer-title'>About Us</header>
          <p className='paragraph border-b-2 border-base-300 pb-3 sm:pb-5'>
            {data?.paragraph}
          </p>
          <div className='flex gap-3 mt-3'>
            <div className='avatar placeholder'>
              <div className='border-2 border-base-300  rounded-full w-10  cursor-pointer hover:bg-base-content transition-all duration-200 hover:border-base-contents'>
                <a href={data?.facebookLink} target='_blank'>
                  <FaFacebookF className='text-lg' />
                </a>
              </div>
            </div>
            <div className='avatar placeholder'>
              <div
                className='border-2 border-base-300 rounded-full w-10  cursor-pointer hover:bg-base-content transition-all duration-200 hover:border-base-contents'
                href={data?.twitterLink}
              >
                <a href={data?.twitterLink} target='_blank'>
                  <AiOutlineTwitter className='text-lg' />
                </a>
              </div>
            </div>
            <div className='avatar placeholder'>
              <div
                className='border-2 border-base-300 rounded-full w-10  cursor-pointer hover:bg-base-content transition-all duration-200 hover:border-base-contents'
                href={data?.instagramLink}
              >
                <a href={data?.instagramLink} target='_blank'>
                  <AiOutlineInstagram className='text-lg' />
                </a>
              </div>
            </div>
            <div className='avatar placeholder'>
              <div
                className='border-2 border-base-300 rounded-full w-10  cursor-pointer hover:bg-base-content transition-all duration-200 hover:border-base-contents'
                href={data?.linkedinLink}
              >
                <a href={data?.linkedinLink} target='_blank'>
                  <AiFillLinkedin className='text-lg' />
                </a>
              </div>
            </div>
          </div>
        </nav>
        <nav>
          <header className='footer-title'>Services</header>
          {data?.services.map((ser, index) => (
            <a className='link link-hover' key={index}>
              {ser}
            </a>
          ))}
        </nav>
        {/* <nav>
          <header className='footer-title'>Gallery</header>
          <div className='grid grid-cols-3 gap-3 w-full'>
            <img src={img1} alt='' className='w-20 h-20 object-contain' />
            <img src={img2} alt='' className='w-20 h-20 object-contain' />
            <img src={img1} alt='' className='w-20 h-20 object-contain' />
            <img src={img2} alt='' className='w-20 h-20 object-contain' />
            <img src={img1} alt='' className='w-20 h-20 object-contain' />
            <img src={img2} alt='' className='w-20 h-20 object-contain' />
          </div>
        </nav> */}
        <nav>
          <header className='footer-title'>Official Info</header>
          <p className='paragraph'>{data?.address}</p>
          <div className='flex gap-2 items-center'>
            <MdEmail className='text-base-content' />
            <span className='paragraph'>{data?.mail}</span>
          </div>
          <div className='flex gap-2 items-center'>
            <BsFillTelephoneFill className='text-base-content' />
            <span className='paragraph'>{data?.phone}</span>
          </div>
        </nav>
      </footer>
      <div className='border-t  border-base-300 mt-5 sm:mt-10'>
        <footer className='footer footer-center py-4 align-element'>
          <aside>
            <p className='text-primary'>
              Copyright © 2023 - All right reserved by{' '}
              <span className='text-base-content'>Hg Agency</span>
            </p>
            <h3 className='text-primary flex gap-2 items-center'>
              Designed by
              <a
                href='https://www.facebook.com/ahmedashraf.ahmedashraf.353'
                target='_blank'
                className='flex gap-2 items-center'
              >
                <span className='text-base-content'>ahmed ashraf</span>
                <FaFacebookF className='cursor-pointer' />
              </a>
            </h3>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
