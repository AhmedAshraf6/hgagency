import React from 'react';
import spinner from '../assets/spinner.svg';

const Loading = () => {
  return (
    <div className='text-white flex justify-center '>
      <img src={spinner} alt='loading...' className='h-96' />
    </div>
  );
};

export default Loading;
