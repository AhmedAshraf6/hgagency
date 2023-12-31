import React, { useEffect } from 'react';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
// for animation on scroll
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFetchFeaturedProjects } from './Api/fetchHomePage';
import Loading from './Loading';
import { Link } from 'react-router-dom';
const FeaturedProjects = () => {
  const { data, isLoadingFeaturedProjects } = useFetchFeaturedProjects();
  if (isLoadingFeaturedProjects) {
    return <Loading />;
  }
  let b = 0;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className='align-element mt-10 sm:mt-24 '>
      <h1 className='text-xl sm:text-5xl font-bold text-base-content text-center'>
        Featured Projects
      </h1>
      <section className='align-element  grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 sm:mt-10'>
        {/* Card */}
        {data.map((proj) => {
          const a = 200;
          b += a;
          return (
            <Link
              className='bg-cover bg-no-repeat   w-full h-64 relative group overflow-hidden rouned-lg'
              style={{
                backgroundImage: `url(${proj.imgs[0].img})`,
              }}
              data-aos='fade-up'
              data-aos-duration='1000'
              data-aos-delay={b}
              key={proj.id}
              to={`/projects/${proj.id}`}
            >
              <div className='group-hover:bg-black/50 overlay absolute bottom-0 w-full h-full left-0 transition-all duration-700'></div>
              <div className='absolute -bottom-24 group-hover:bottom-24 left-[50%] -translate-x-[50%]  flex flex-col gap-2 items-center transition-all   duration-700 cursor-pointer'>
                <div className='avatar placeholder'>
                  <div className='bg-white  rounded-full w-12  cursor-pointer  transition-all duration-200 '>
                    <div className='text-2xl'>
                      <HiOutlineArrowTrendingUp />
                    </div>
                  </div>
                </div>
                <div className='text-center flex flex-col text-primary'>
                  <span className='text-xs'>{proj.title1}</span>
                  <span className='font-bold'>{proj.title2}</span>
                </div>
              </div>
            </Link>
          );
        })}
        {/* Card */}
      </section>
    </div>
  );
};

export default FeaturedProjects;
