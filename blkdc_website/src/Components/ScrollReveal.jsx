// components/ScrollReveal.jsx
"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  enableBlur = false,
  baseOpacity = 0,
  blurStrength = 2,
  containerClassName = "",
  textClassName = "",
}) => {
  const containerRef = useRef(null);

  // Split text into spans for animation
  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;
    return children.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = window.lenis?.scrollEl || window;
    const words = el.querySelectorAll(".word");

    // Animate words when element enters viewport
    gsap.fromTo(
      words,
      {
        opacity: baseOpacity,
        y: 30,
        filter: enableBlur ? `blur(${blurStrength}px)` : "none",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2, // slow-motion effect
        ease: "power3.out",
        stagger: 0.08, // small delay between words
        scrollTrigger: {
          trigger: el,
          scroller: scroller,
          start: "top 90%", // animation triggers when element enters viewport
          toggleActions: "play none none none", // plays only once
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [enableBlur, baseOpacity, blurStrength, children]);

  return (
    <div ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p
        className={`text-[clamp(1.6rem,4vw,3rem)] leading-[1.5]  ${textClassName}`}
      >
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;
