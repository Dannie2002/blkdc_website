import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageSlider = ({
  slides = [],
  interval = 200,
  className = '',
  children,
  overlay = true,
  overlayClassName = 'bg-[#0b0b0d]/79',
  direction = 'up'
}) => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    
    timeoutRef.current = setTimeout(() => {
      setPrev(current);
      setCurrent((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);

    return () => clearTimeout(timeoutRef.current);
  }, [current, slides, interval]);

  const images = slides.map(slide => slide.image);
  const currentSlide = slides[current];
  const currentOverlay = currentSlide?.overlayClassName || overlayClassName;

  if (!slides || slides.length === 0) {
    return (
      <div className={`relative h-full w-full overflow-hidden ${className}`}>
        {overlay && (
          // Use the default overlay if there are no slides
          <div className={`absolute inset-0 z-10 pointer-events-none ${overlayClassName}`} />
        )}
        <div className="relative z-20 h-full">
          {/* Placeholder for content when no slides are available */}
          <div className="items-start justify-center h-full flex flex-col lg:px-24 lg:space-y-6"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      style={{ perspective: '1000px' }}
    >
      {overlay && (
        <div className={`absolute inset-0 z-10 pointer-events-none ${currentOverlay}`} />
      )}

      {/* Previous image for exit animation */}
      {prev !== null && prev < images.length && images[prev] && (
        <img
          src={images[prev]}
          alt="slide"
          className={`absolute inset-0 h-full w-full object-cover ${direction === 'up' ? 'slider-exit-up' : 'slider-exit-down'}`}
          style={{ zIndex: 0 }}
        />
      )}

      {/* Current image with enter animation */}
      {images[current] && (
        <img
          key={current}
          src={images[current]}
          alt="slide"
          className="absolute inset-0 h-full w-full object-cover slider-enter"
          style={{ zIndex: 0 }}
        />
      )}

      <div className="relative z-20 h-full">
        {/* Use AnimatePresence to handle exit/enter animations for content */}
        <AnimatePresence mode="wait"> {/* mode="wait" ensures exit animation completes before enter */}
          <motion.div
            key={current} // Key changes with current slide, forcing re-mount and re-animation
            initial={{ opacity: 0, y: 20 }} // Initial state for content container
            animate={{ opacity: 1, y: 0 }} // Animate to visible state
            exit={{ opacity: 0, y: -20 }} // Exit animation
            transition={{ duration: 0.5, ease: "easeInOut" }} // Transition for the content container
            // Apply the layout classes here, as this div now directly contains the content
            className="items-start justify-center h-full flex flex-col lg:px-24 lg:space-y-6"
          >
            {currentSlide?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImageSlider;