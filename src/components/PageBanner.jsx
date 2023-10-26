import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PageBanner = ({ title, breadcrumbs, vid, image = '' }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`h-[50vh] bg-cover bg-no-repeat relative bg-fixed bg-[url("${image}")]`}
    >
      {vid && (
        <video
          autoPlay
          loop
          muted
          type={'video/mp4'}
          className='video w-full h-full object-cover  absolute'
          style={{ objectPosition: 'center 30%' }}
          src={vid}
        ></video>
      )}
      {/* <video
        autoPlay
        loop
        muted
        type={'video/mp4'}
        className='video w-full h-full object-cover  absolute'
        style={{ objectPosition: 'center 30%' }}
        src={vid}
      ></video> */}
      <div className='overlay absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
      <div className='align-element absolute top-1/2 -translate-y-[50%] text-primary'>
        <h3
          className='text-5xl font-bold capitalize z-20'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          {title}
        </h3>
        <p className='mt-3 sm:mt-5'>
          <div className='text-md  text-primary'>
            <ul
              className='flex gap-3'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay='300'
            >
              {breadcrumbs?.map((bread, index) => {
                if (bread.link) {
                  return (
                    <li key={index}>
                      {<Link to={`${bread.link}`}>{bread.word}</Link>}
                    </li>
                  );
                } else {
                  return (
                    <li
                      className={`border-l-2 pl-2 ${
                        bread.active && 'text-base-content font-semibold'
                      }  `}
                      key={index}
                    >
                      {bread.word}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </p>
      </div>
    </section>
  );
};

export default PageBanner;
