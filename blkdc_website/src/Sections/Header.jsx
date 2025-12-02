"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
  
} from "../Components/ResizeableNavbar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { name: "Home", link: "#" },
    { name: "Projects", link: "#projects" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* ✅ Main Navbar */}
      <Navbar>
        {/* Desktop Navbar */}
        <NavBody>
          <div className="flex items-center flex-1 gap-4">
            <NavbarLogo />
            <NavItems items={items} />
          </div>
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="gradient">Get Started</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navbar */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={menuOpen}>
            {items.map((item, idx) => (
              <a
                href={item.link}
                key={item.name}
                onClick={() => setMenuOpen(false)}
                className="block w-full px-4 py-2 text-sm transition-colors duration-200 rounded-md text-neutral-100 hover:bg-white/10"
              >
                {item.name}
              </a>
            ))}
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

    </div>
  );
}
