import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner1 from '../assets/banner3.png';
import banner2 from '../assets/banner4.png';
const allIngredients = [
  {
    img: banner1,
    label: 'Tomato',
    num: '04',
    h3: 'Cost Containment',
    p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est.',
  },
  {
    img: banner2,
    label: 'Lettuce',
    num: '04',
    h3: 'Cost Containment',
    p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est.1',
  },
  {
    img: banner1,
    label: 'Cheese',
    num: '04',
    h3: 'Cost Containment',
    p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est.',
  },
  {
    img: banner2,
    label: 'asdxcs',
    num: '04',
    h3: 'Cost Containment',
    p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, est.',
  },
];
const [tomato, lettuce, cheese, ll] = allIngredients;
import { BsFillArrowDownCircleFill } from 'react-icons/bs';

const tabs = [tomato, lettuce, cheese, ll];
const MovingSection = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className='mt-10 sm:mt-24'>
      <div className=''>
        <main className='align-element'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='h-[80vh]'
            >
              {selectedTab ? (
                <img
                  src={selectedTab.img}
                  className='h-full w-full object-contain'
                />
              ) : (
                ''
              )}
            </motion.div>
          </AnimatePresence>
        </main>
        <ul className='grid grid-template-fit  sm:gap-5 align-element  bg-[#202123]  text-primary'>
          {tabs.map((item) => (
            <>
              <li
                key={item.label}
                className={`text-xl sm:text-2xl py-5 px-3  relative cursor-default
                ${item === selectedTab && 'selected bg-base-content'}
              `}
                onClick={() => setSelectedTab(item)}
              >
                {selectedTab === item && (
                  <div className='absolute bottom-[70px] left-[0] w-full bg-base-100 py-5 px-3 hidden sm:block'>
                    <div className='flex justify-between text-base-content'>
                      <BsFillArrowDownCircleFill className='text-5xl' />
                      <span className='text-5xl font-semibold'>
                        {selectedTab.num}
                      </span>
                    </div>
                    <h3 className='text-2xl mt-3'>{selectedTab.h3}</h3>
                    <p className='paragraph'>{selectedTab.p}</p>
                  </div>
                )}
                <span className=''> {item.label}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovingSection;
