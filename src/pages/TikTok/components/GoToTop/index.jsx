import React, { useRef, useEffect } from 'react';
import './gototop.scss';

const GoToTop = () => {
  const listenerEventRef = useRef(null);
  const goToTopRef = useRef(null);

  const handleClickGoToTop = () => {
    window.scrollTo(0, 250);
  };

  useEffect(() => {
    //   throtting
    let isThrotting = false;
    const scrollFn = () => {
      if (isThrotting) return;
      isThrotting = true;
      listenerEventRef.current = setTimeout(() => {
        if (!goToTopRef.current) return;
        if (window.scrollY > 400) {
          goToTopRef.current.classList.add('active');
        } else {
          goToTopRef.current.classList.remove('active');
        }
        isThrotting = false;
      }, 300);
    };
    listenerEventRef.current = document.addEventListener('scroll', scrollFn);
    return () => {
      clearTimeout(listenerEventRef.current);
    };
  }, []);

  return (
    <div ref={goToTopRef} className="go-to-top">
      <span onClick={handleClickGoToTop}>
        <i className="bx bx-chevrons-up"></i>
      </span>
    </div>
  );
};

export default GoToTop;
