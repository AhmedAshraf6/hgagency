import React from 'react';
import { Link } from 'react-router-dom';
import TwoTitles from './TwoTitles';
import banner3 from '../assets/img1.jpg';
import { IoIosClose } from 'react-icons/io';
import { BsPlayCircleFill } from 'react-icons/bs';
import vid from '../assets/hg.mp4';

const VideoHome = () => {
  return (
    <section
      className=' bg-cover bg-no-repeat  bg-fixed mt-10 sm:mt-24 py-10 lg:py-20 bg-black/50 '
      style={{
        backgroundImage: `url(${banner3})`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className='overlay  w-full h-full top-0 left-0 bg-black opacity-70'></div>
      <div className='align-element  text-primary  grid lg:grid-cols-2 items-center gap-5 lg:gap-24  py-5 lg:py-10   h-full'>
        <div>
          <TwoTitles
            title1='Digital Solution?'
            title2='We Focus on Quality Care & Service'
          />
          <button className='btn btn-primary mt-3 sm:mt-5'>About Me</button>
        </div>
        <div className='flex flex-col items-start lg:items-center gap-3'>
          <BsPlayCircleFill
            className=' text-6xl  cursor-pointer  text-base-content'
            onClick={() => document.getElementById('my_modal_1').showModal()}
          />
          <h2>Watch the </h2>
          <h2>Consulting Video </h2>
        </div>
      </div>
      <dialog id='my_modal_1' className='modal '>
        <div className='modal-box bg-transparent overflow-hidden '>
          <div className='modal-action '>
            <form method='dialog'>
              {/* if there is a button in form, it will close the modal */}
              <button className='btn bg-transparent outline-none border-none hover:bg-transparent'>
                <IoIosClose className=' text-primary text-3xl' />
              </button>
            </form>
          </div>
          <video
            autoPlay
            loop
            muted
            type={'video/mp4'}
            className='video w-full h-full object-cover'
            src={vid}
          ></video>
        </div>
      </dialog>
    </section>
  );
};

export default VideoHome;
