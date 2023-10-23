import React from 'react';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/banner3.png';
import img4 from '../assets/banner4.png';
const carouselImages = [img1, img2, img3, img4];

const SingleProductSlider = () => {
  return (
    <div className='align-element mt-10 sm:mt-24'>
      <div className='h-[28rem] carousel carousel-center   p-4 space-x-4  rounded-box'>
        {carouselImages.map((image, index) => {
          return (
            <div
              id={`slide${index + 1}`}
              className='carousel-item relative w-full'
            >
              <img src={image} className='w-full object-contain' />
              <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                {index === 0 ? (
                  <a
                    href={`#slide${carouselImages.length}`}
                    className='btn btn-circle'
                  >
                    ❮
                  </a>
                ) : (
                  <a href={`#slide${index}`} className='btn btn-circle'>
                    ❮
                  </a>
                )}
                {index === carouselImages.length - 1 ? (
                  <a href={`#slide1`} className='btn btn-circle'>
                    ❯
                  </a>
                ) : (
                  <a href={`#slide${index + 2}`} className='btn btn-circle'>
                    ❯
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProductSlider;
