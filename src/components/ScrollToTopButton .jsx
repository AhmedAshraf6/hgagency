import React, { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';
export default function ScrollToTopCom() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div
      className=' fixed bottom-8 right-4 cursor-pointer z-20'
      onClick={goToTop}
    >
      {showTopBtn && (
        <div className='border-2 border-white/60 rounded-full w-11 h-11 flex justify-center items-center  cursor-pointer hover:bg-base-content transition-all duration-200 hover:border-base-contents group'>
          <BsArrowUp className='text-xl animate-bounce group-hover:text-black' />
        </div>
      )}
    </div>
  );
}
