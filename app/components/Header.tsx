'use client'; // Marking this as a client component

import React, { useState } from 'react';
import Myhandles from '../components/ContactMe/Myhandles'; // Assuming Myhandles is a valid component

const Header: React.FC = () => {
  const [showMyhandles, setShowMyhandles] = useState<boolean>(false);

  const handleContactClick = () => {
    setShowMyhandles((prevState) => !prevState);
  };

  return (
    <header className="flex z-10 flex-col justify-center items-center px-6 py-4 w-full text-xl font-semibold text-white shadow-lg bg-slate-900">
      <div className="flex justify-between items-center w-full max-w-[1126px] mx-auto">
        {/* Logo Section */}
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f8fd1064715b441bbd14173bc3442660a5fa06050e10f533246d3f1d5a0827f?placeholderIfAbsent=true&apiKey=c5be69e6972f46129abeb7e6339cd14d"
          alt="Logo"
          className="object-contain w-9 h-9"
        />

        {/* Navigation Links */}
        <nav className="flex items-center gap-8">
          <a
            href="#home"
            className="hover:text-blue-400 transition duration-300"
            data-layername="home"
          >
            Home
          </a>
          <button
            onClick={handleContactClick}
            className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
          >
            Contact Me
          </button>
        </nav>
      </div>

      {/* Conditionally render Myhandles based on state */}
      {showMyhandles && (
        <div className="mt-4 w-full max-w-[1126px] mx-auto">
          <Myhandles />
        </div>
      )}
    </header>
  );
};

export default Header;
