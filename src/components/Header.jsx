import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
const Header = () => {
  return (
    <nav className='text-primary py-1 sm:py-3 bg-base-content'>
      <div className='align-element flex justify-between items-center gap-3 sm:gap-5 flex-wrap '>
        <div className='flex flex-wrap gap-2'>
          <div className='flex gap-2 items-center'>
            <BsFillTelephoneFill />
            <span>+01231231212</span>
          </div>

          <div className='flex gap-2 items-center'>
            <MdEmail />
            <span>hgagency@mail.com</span>
          </div>
        </div>
        <div className='flex gap-3 '>
          <BiLogoFacebook className='cursor-pointer' />
          <AiOutlineTwitter className='cursor-pointer' />
          <AiFillInstagram className='cursor-pointer' />
          <BsLinkedin className='cursor-pointer' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
