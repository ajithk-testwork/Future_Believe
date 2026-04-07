import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const ScrollButtons = () => {
  // State to manage the visibility of the buttons
  const [isVisibleUp, setIsVisibleUp] = useState(false);
  const [isVisibleDown, setIsVisibleDown] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show "Up" button only after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisibleUp(true);
      } else {
        setIsVisibleUp(false);
      }

      // Hide "Down" button when the user reaches the very bottom of the page
      const isBottom = window.innerHeight + Math.round(window.scrollY) >= document.documentElement.scrollHeight - 50;
      if (isBottom) {
        setIsVisibleDown(false);
      } else {
        setIsVisibleDown(true);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    // Changed position to bottom-24 to avoid overlapping your hero slider controls
    <div className="fixed bottom-24 right-6 flex flex-col gap-4 z-[99]">

      {/* Scroll Up Button */}
      <button
        onClick={scrollToTop}
        className={`
    p-3 rounded-full shadow-xl cursor-pointer transition-all duration-300 ease-in-out
    bg-[#612c7e] text-white
    hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 
    focus:outline-none focus:ring-2 focus:ring-purple-400
    ${isVisibleUp ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}
  `}
      >
        <ArrowUp size={24} strokeWidth={2.5} />
      </button>

      {/* Scroll Down Button */}
      <button
        onClick={scrollToBottom}
        className={`
    p-3 rounded-full shadow-xl cursor-pointer transition-all duration-300 ease-in-out
    bg-[#612c7e] text-white
    hover:shadow-lg hover:shadow-purple-500/50 hover:-translate-y-1 
    focus:outline-none focus:ring-2 focus:ring-purple-400
    ${isVisibleUp ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}
  `}
      >
        <ArrowDown size={24} strokeWidth={2.5} />
      </button>

    </div>
  );
};

export default ScrollButtons;