import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import "../Styles/global.css"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button className="scroll-to-top" onClick={() => scroll.scrollToTop({ smooth: true, duration: 500 })}>
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
