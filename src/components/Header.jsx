import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#ff91bb] text-white">
      <div className="container mx-auto flex justify-end items-center py-2 px-4 space-x-6 text-sm lg:text-lg">
        <a href="#" className="header-link flex items-center hover:text-black">
          <i className="fas fa-mobile-alt mr-2"></i> Get App
        </a>
        <a href="#" className="header-link flex items-center hover:text-black">
          <i className="fas fa-map-marker-alt mr-2"></i> Store & Events
        </a>
        <a href="#" className="header-link flex items-center hover:text-black">
          <i className="fas fa-gift mr-2"></i> Gift Card
        </a>
        <a href="#" className="flex items-center hover:text-black">
          <i className="fas fa-question-circle mr-2"></i> Help
        </a>
      </div>
    </header>
  );
};

export default Header;
