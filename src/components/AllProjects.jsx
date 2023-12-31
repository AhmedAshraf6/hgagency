import React from 'react';
import { HiOutlineArrowTrendingUp } from 'react-icons/hi2';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import { useFetchProjects } from './Api/fetchHomePage';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const { projects, isLoadingFeaturedProjects } = useFetchProjects();
  if (isLoadingFeaturedProjects) {
    return <Loading />;
  }

  return (
    <section className='align-element mt-10 sm:mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-5 '>
      {/* Card */}
      {projects?.map((project) => (
        <Link
          className='bg-cover bg-no-repeat   w-full h-64 relative group overflow-hidden rouned-lg'
          style={{
            backgroundImage: `url(${project.imgs[0].img})`,
          }}
          key={project.id}
          to={`/projects/${project.id}`}
        >
          <div className='group-hover:bg-black/50 overlay absolute bottom-0 w-full h-full left-0 transition-all duration-700'></div>
          <div className='absolute -bottom-24 group-hover:bottom-24 left-[50%] -translate-x-[50%]  flex flex-col gap-2 items-center transition-all   duration-700 cursor-pointer'>
            <div className='avatar placeholder'>
              <div className='bg-white  rounded-full w-12  cursor-pointer  transition-all duration-200 '>
                <HiOutlineArrowTrendingUp className='text-2xl' />
              </div>
            </div>
            <div className='text-center flex flex-col text-primary'>
              <span className='text-xs'>{project.projectName}</span>
              <span className='font-bold'>{project.projectName}</span>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default AllProjects;
