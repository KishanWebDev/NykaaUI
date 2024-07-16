import React from 'react';

const CategoriesNavbar = () => {
  return (
    <nav className="bg-white border-b text-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center py-2 px-4">
        <div className="w-full lg:w-auto flex justify-between lg:justify-start items-center lg:space-x-6 text-gray-600">
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Makeup</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Skin</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Hair</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Appliances</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Bath & Body</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Natural</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Mom & Baby</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Health & Wellness</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Men</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Fragrance</a>
          <a href="#" className="hover:text-nykaa-pink py-1 px-2 lg:py-0 lg:px-0">Lingerie & Accessories</a>
        </div>
        <a href="#" className="bg-nykaa-pink text-white px-3 py-1 rounded text-xs font-bold mt-2 lg:mt-0">OFFERS</a>
      </div>
    </nav>
  );
};

export default CategoriesNavbar;

