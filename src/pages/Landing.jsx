import React, { useState } from 'react';
import banner1 from '../assets/banner4.png';
import banner2 from '../assets/banner3.png';
import vid from '../assets/wolf2.mp4';
import { Carousel, Navbar } from '../components';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const Landing = () => {
  const [loading, setLoading] = useState(true);
  return (
    // <div className='carousel w-full'>
    //   <div id='slide1' className='carousel-item relative w-full'>
    //     <div className='grid md:grid-cols-2 justify-between'>
    //       <h3 className='text-4xl col-span-1 max-w-lg'>
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum non
    //         quis quaerat adipisci excepturi. Saepe nostrum impedit odit tempora.
    //         A beatae, eligendi error enim debitis voluptatum laboriosam. Dolore
    //         magni odio doloribus soluta, illum dolor suscipit recusandae
    //         voluptas. Ratione, fugit voluptas.
    //       </h3>
    //       <div className='col-span-1 text-center'>
    //         <img src={banner1} className='w-[600px] h-[600px] ' />
    //         <div className='absolute flex flex-col gap-4 transform -translate-y-1/2  right-0 top-1/2'>
    //           <a href='#slide4' className='btn btn-circle'>
    //             ❮
    //           </a>
    //           <a href='#slide2' className='btn btn-circle'>
    //             ❯
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div id='slide2' className='carousel-item relative w-full'>
    //     <div className='grid md:grid-cols-2 justify-between'>
    //       <h3 className='text-4xl col-span-1 max-w-lg'>
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
    //         exercitationem nam, illo necessitatibus, repellendus reiciendis a
    //         possimus nesciunt fugiat eum voluptatem atque eligendi nobis earum
    //         velit unde dolorum quasi! Expedita!
    //       </h3>
    //       <div className='col-span-1 text-center'>
    //         <img src={banner2} className='w-full h-full object-cover' />
    //         <div className='absolute flex flex-col gap-4 transform -translate-y-1/2  right-0 top-1/2'>
    //           <a href='#slide1' className='btn btn-circle'>
    //             ❮
    //           </a>
    //           <a href='#slide3' className='btn btn-circle'>
    //             ❯
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='relative h-screen grid place-items-center'>
      {loading && <div>loading...</div>}
      <video
        autoPlay
        loop
        muted
        type={'video/mp4'}
        className='video w-full h-full object-cover absolute'
        src={vid}
        onLoadedData={() => setLoading(false)}
      ></video>

      <div className='absolute left-0 top-0 inset-0 bg-black opacity-50' />
      <Navbar />
      <div className='contetnt z-10  max-w-sm mx-3 text-center'>
        <h3 className='text-primary text-2xl font-bold sm:text-5xl leading-10'>
          Lorem ipsum dolor sit <span className='text-base-content'>amet.</span>
        </h3>
        <p className='text-xs leading-4 sm:leading-6 text-gray-300 mt-2 sm:mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          sit repellendus harum ratione voluptatibus nihil hic recusandae minus,
          facilis itaque, ipsa ut veniam explicabo totam eos doloribus saepe
          aliquid magni.
        </p>
        <button className=' btn btn-primary btn-outline rounded-xl btn-sm mt-4'>
          Contact Us
        </button>
      </div>
      <BsFillArrowDownCircleFill className='animate-bounce absolute bottom-5 text-2xl cursor-pointer' />
    </div>
  );
};

export default Landing;
