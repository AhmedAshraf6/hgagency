import React, { useEffect } from 'react';
import img1 from '../assets/clients/img1.png';
import img2 from '../assets/clients/img2.png';
import img3 from '../assets/clients/img3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFetchOurSponsors } from './Api/fetchHomePage';

const Clients = () => {
  const { data, isLoadingOurSponsors } = useFetchOurSponsors();
  console.log(data);
  useEffect(() => {
    AOS.init();
  }, []);
  // console.log(data);
  let b = 0;

  return (
    // sm:grid-cols-5 md:grid-cols-6
    <div className='align-element mt-10 sm:mt-24 '>
      <h2 className='text-xl sm:text-4xl text-primary font-bold text-center'>
        Our Clients
      </h2>
      <section className='grid mt-5 sm:mt-10 grid-template-fit  '>
        {data?.map((client) => {
          console.log(client);
          const a = 200;
          b += a;
          return (
            <div
              className='border-2 border-gray-300/10 flex justify-center items-center py-3'
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay={b}
              key={client.id}
            >
              <img src={client.img} className='h-20 grayscale' />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Clients;
