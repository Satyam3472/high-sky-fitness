
"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Header = ({ adminView, setAdminView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-black shadow-md sticky top-0 z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-auto sm:h-12">
            <Image 
              src="/assets/GYM_LOGO.png" 
              alt="High Sky Fitness Logo" 
              width={100}
              height={100}
              className="h-10 w-auto sm:h-12"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-extrabold text-white leading-none">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">HIGH SKY</span> FITNESS
            </h1>
            <span className="text-xs sm:text-sm text-gray-300 italic">NO PAIN NO GAIN</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {['Exercises','Advantages', 'Membership', 'Gallery'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-orange-500 transition-transform transform hover:scale-105"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => setAdminView(!adminView)}
            className="ml-2 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md text-xs shadow hover:scale-105 transition"
          >
            Admin Panel
          </button>
        </nav>

        <button
          className="lg:hidden text-gray-300 hover:text-orange-500 transition focus:outline-none scale-90"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 space-y-4 border-t border-gray-700">
          {['Exercises','Advantages', 'Membership', 'Gallery'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="block text-gray-200 font-medium hover:text-orange-500 transition"
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => {
              setAdminView(!adminView);
              closeMenu();
            }}
            className="w-full text-center text-sm mt-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-md shadow hover:scale-105 transition"
          >
            Admin Panel
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
