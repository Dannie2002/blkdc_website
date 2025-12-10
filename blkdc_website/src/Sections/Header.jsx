"use client";
import React, { useState } from "react";
import { Sun, Moon, Globe } from "lucide-react";
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
  const [darkMode, setDarkMode] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("English");

  const items = [
    { name: "Home", link: "#" },
    { name: "About Us", link: "#projects" },
    { name: "Services", link: "#services" },
    { name: "Media Center", link: "#about" },
    { name: "Contact Us", link: "#contact" },
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
            <button
              aria-label="Toggle light/dark mode"
              onClick={() => {
                setDarkMode((prev) => {
                  const next = !prev;
                  if (next) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  return next;
                });
              }}
              className="rounded-md p-2 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#669fca]"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-[#669fca]" />}
            </button>
            <div className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-bold transition-transform duration-200 active:scale-95 bg-[linear-gradient(to_right,#779673,#779673_50%,#5E936C)] text-white shadow-inner hover:shadow-lg"
              >
                <Globe className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">{language}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black/10 z-50">
                  <ul className="py-1" role="listbox" aria-label="Select language">
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 text-sm hover:bg-[#f3f4f6]"
                        onClick={() => { setLanguage("English"); setLangOpen(false); }}
                        role="option"
                        aria-selected={language === "English"}
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-4 py-2 text-sm hover:bg-[#f3f4f6]"
                        onClick={() => { setLanguage("Chichewa"); setLangOpen(false); }}
                        role="option"
                        aria-selected={language === "Chichewa"}
                      >
                        Chichewa
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
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
