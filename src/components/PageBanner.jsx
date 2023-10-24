import React from 'react';
import { Link } from 'react-router-dom';
const PageBanner = ({ title, breadcrumbs }) => {
  return (
    <section
      className=' h-[50vh] bg-cover bg-no-repeat relative bg-fixed'
      style={{
        backgroundImage:
          'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
      }}
    >
      <div className='overlay absolute w-full h-full top-0 left-0 bg-black opacity-50'></div>
      <div className='align-element absolute top-1/2 -translate-y-[50%] text-primary'>
        <h3 className='text-5xl font-bold capitalize z-20'>{title}</h3>
        <p className='mt-3 sm:mt-5'>
          <div className='text-md  text-primary'>
            <ul className='flex gap-3'>
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
