import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardStart = ({ children, className = "", style = {}, ...props }) => {
const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 90, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: {
        trigger: el,
        start: "top 85%",     // when card enters viewport
        toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card  ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
export default CardStart;
