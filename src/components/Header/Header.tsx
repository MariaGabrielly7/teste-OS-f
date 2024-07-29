"use client";

import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const menuItems: string[] = ['Home', 'Board', 'Service', 'Contact Us', 'Blog', 'Join'];
  const authItems: string[] = ['Sign In', 'Sign Up'];

  return (
    <header className="bg-gray-800 text-white relative z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl"></div>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item: string) => (
            <a
              key={item}
              href="#"
              onClick={() => handleItemClick(item.toLowerCase().replace(/\s+/g, ''))}
              className={`relative px-2 py-1 ${selectedItem === item.toLowerCase().replace(/\s+/g, '') ? 'text-white' : 'text-gray-400'} hover:underline after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:transition-transform after:transform ${selectedItem === item.toLowerCase().replace(/\s+/g, '') ? 'after:scale-x-100' : 'after:scale-x-0'}`}
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex space-x-4">
          {authItems.map((item: string) => (
            <a
              key={item}
              href="#"
              onClick={() => handleItemClick(item.toLowerCase().replace(/\s+/g, ''))}
              className={`relative px-2 py-1 ${selectedItem === item.toLowerCase().replace(/\s+/g, '') ? 'text-white' : 'text-gray-400'} hover:underline after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:transition-transform after:transform ${selectedItem === item.toLowerCase().replace(/\s+/g, '') ? 'after:scale-x-100' : 'after:scale-x-0'}`}
            >
              {item}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-blue-900 text-white z-40">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="text-xl"></div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <nav className="flex flex-col items-center space-y-4 py-4 border-b-4 border-blue-700">
            {menuItems.map((item: string) => (
              <a
                key={item}
                href="#"
                onClick={() => handleItemClick(item.toLowerCase().replace(/\s+/g, ''))}
                className={`relative px-2 py-1 ${selectedItem === item.toLowerCase().replace(/\s+/g, '') ? 'text-white' : 'text-gray-400'} hover:underline after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:transition-transform after:transform ${selectedItem === item.toLowerCase().replace(/\s+/g, '') ? 'after:scale-x-100' : 'after:scale-x-0'}`}
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex flex-col items-center space-y-4 pb-4 pt-4 border-t border-blue-700">
            {authItems.map((item: string) => (
              <a
                key={item}
                href="#"
                onClick={() => handleItemClick(item.toLowerCase().replace(/\s+/g, ''))}
                className={`relative px-2 py-1 ${selectedItem === item.toLowerCase().replace(/\s+/g, '') ? 'text-white' : 'text-gray-400'} hover:underline after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-white after:transition-transform after:transform ${selectedItem === item.toLowerCase().replace(/\s+/g, '') ? 'after:scale-x-100' : 'after:scale-x-0'}`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
