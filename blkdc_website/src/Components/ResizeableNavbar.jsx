"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

function cn(...classes) {
  return classes
    .flatMap((cls) => (Array.isArray(cls) ? cls : [cls]))
    .filter(Boolean)
    .join(" ");
}

export function Navbar({ children, className }) {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("relative inset-x-0 top-0 w-full pointer-events-none", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { visible }) : child
      )}
    </motion.div>
  );
}

export function NavBody({ children, className, visible }) {
  return (
    <motion.div
      initial={{
        backdropFilter: "none",
        boxShadow: "none",
        width: "100%",
        y: 0,
      }}
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34,42,53,0.06), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.04), 0 0 4px rgba(34,42,53,0.08), 0 16px 68px rgba(47,48,55,0.05), 0 1px 0 rgba(255,255,255,0.1) inset"
          : "none",
        width: visible ? "60%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 50 }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full flex-row items-center justify-between px-12 py-2 lg:flex pointer-events-auto",
        visible ? "bg-white/80 dark:bg-neutral-950/80" : "bg-[#eeebe5]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function NavItems({ items = [], className, onItemClick }) {
  const [hovered, setHovered] = useState(null);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center gap-4 text-sm font-medium text-zinc-600 hover:text-zinc-800 lg:flex",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 transition-colors duration-200 dark:text-neutral-300"
          key={idx}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 w-full h-full bg-gray-100 rounded-full dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
}

export function MobileNav({ children, className, visible }) {
  return (
    <motion.div
      initial={{
        width: "100%",
        borderRadius: "2rem",
        y: 0,
      }}
      animate={{
        width: visible ? "92%" : "100%",
        borderRadius: visible ? "16px" : "2rem",
        y: visible ? 12 : 0,
      }}
      transition={{ type: "spring", stiffness: 220, damping: 45 }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1.5rem)] flex-col items-center justify-between bg-transparent py-2 lg:hidden pointer-events-auto",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function MobileNavHeader({ children, className }) {
  return <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>;
}

export function MobileNavMenu({ children, className, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "absolute left-1/2 top-16 z-50 flex w-[calc(100%-1.5rem)] max-w-sm -translate-x-1/2 flex-col gap-4 rounded-2xl border border-white/10 bg-[#0f172a]/95 px-6 py-6 text-neutral-100 shadow-[0_18px_45px_rgba(15,23,42,0.35)]",
            className
          )}
        >
          <div className="flex flex-col gap-3 text-neutral-100">
            {children}
          </div>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="flex flex-col gap-2">
            <NavbarButton className="!bg-white/10 !text-white hover:!bg-white/20">
              Login
            </NavbarButton>
            <NavbarButton variant="gradient" className="!shadow-none">
              Get Started
            </NavbarButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function MobileNavToggle({ isOpen, onClick }) {
  return isOpen ? (
    <FiX
      className="cursor-pointer text-[#0b0b0d] transition-transform duration-200 dark:text-white"
      size={24}
      onClick={onClick}
    />
  ) : (
    <FiMenu
      className="cursor-pointer text-[#0b0b0d] transition-transform duration-200 dark:text-white"
      size={24}
      onClick={onClick}
    />
  );
}

export function NavbarLogo() {
  return (
    <a href="#" className="relative z-20 flex flex-shrink-0 items-center space-x-2 px-2 py-1">
      <img src="https://assets.aceternity.com/logo-dark.png" alt="logo" width={30} height={30} />
      <span className="font-medium text-[#177A96] dark:text-white">Startup</span>
    </a>
  );
}

export function NavbarButton({ href, children, className, variant = "primary" }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-bold transition-transform duration-200 active:scale-95";

  const variants = {
    primary: "bg-white text-[#0b0b0d] shadow-md hover:-translate-y-0.5 dark:bg-white/90 dark:text-black",
    secondary: "bg-transparent text-neutral-800 hover:text-[#177A96] dark:text-white",
    dark: "bg-[#0b0b0d] text-white shadow-md hover:-translate-y-0.5",
    gradient: "bg-gradient-to-r from-[#177A96] via-[#38bdf8] to-[#5176A3] text-white shadow-inner hover:shadow-lg",
  };

  return (
    <a href={href || "#"} className={cn(base, variants[variant], className)}>
      {children}
    </a>
  );
}
