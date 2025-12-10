import React, { useState } from 'react';
import { Search, Phone, Mail } from 'lucide-react';

const TopBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return; // Don't search for empty strings
    console.log("Searching for:", searchQuery);
    // Here you would typically redirect to a search results page
    // or call an API with the searchQuery.
  };

  return (
    <div className="bg-[#003521] text-[#fffced] px-4 lg:px-12 py-2 relative z-50">
      <div className="mx-auto flex items-center justify-between">
        {/* Left Side: Contact Info */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+265 123 456 789</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@balakadistrictcouncil.gov.mw</span>
          </div>
        </div>

        {/* Right Side: Search Bar */}
        <div className="flex items-center gap-4 ml-auto">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#005434] rounded-full py-1.5 pl-4 pr-10 text-sm text-[#ffffff] placeholder-gray-300 focus:outline-none focus:bg-white/30 transition-colors"
            />
            <button type="submit" aria-label="Submit search" className="absolute right-3 top-1/2 -translate-y-1/2 text-white">
              <Search size={18} />
            </button>
          </form>
          {/* Social media icons can be added here later */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;