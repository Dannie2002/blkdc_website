import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ children, className = "", index = 0 }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 90 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "expo.out",
        delay: index * 0.2,   // ← stagger based on index
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  return (
    <div ref={cardRef} className={`second-card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
