import React from 'react';

const TwoTitles = ({ title1, title2, postition = 'text-start' }) => {
  return (
    <div className={postition}>
      <h2 className=''>{title1}</h2>
      <p className='text-primary text-2xl sm:text-5xl font-semibold mt-3 sm:mt-5'>
        {title2}
      </p>
    </div>
  );
};

export default TwoTitles;
