import Aos from 'aos';
import React, { useEffect } from 'react';

const TwoTitles = ({ title1, title2, postition = 'text-start' }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className={postition}>
      <h2
        className='text-base-content'
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        {title1}
      </h2>
      <p
        className='text-primary text-2xl sm:text-5xl font-semibold mt-3 sm:mt-5  '
        data-aos='fade-up'
        data-aos-duration='1000'
      >
        {title2}
      </p>
    </div>
  );
};

export default TwoTitles;
