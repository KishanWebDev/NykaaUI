import React from 'react';

const CategoriesNavbar = () => {
  return (
    <nav className="bg-white border-b text-lg">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        <div className="flex space-x-6 text-gray-600">
          <a href="#" className="hover:text-nykaa-pink">Makeup</a>
          <a href="#" className="hover:text-nykaa-pink">Skin</a>
          <a href="#" className="hover:text-nykaa-pink">Hair</a>
          <a href="#" className="hover:text-nykaa-pink">Appliances</a>
          <a href="#" className="hover:text-nykaa-pink">Bath & Body</a>
          <a href="#" className="hover:text-nykaa-pink">Natural</a>
          <a href="#" className="hover:text-nykaa-pink">Mom & Baby</a>
          <a href="#" className="hover:text-nykaa-pink">Health & Wellness</a>
          <a href="#" className="hover:text-nykaa-pink">Men</a>
          <a href="#" className="hover:text-nykaa-pink">Fragrance</a>
          <a href="#" className="hover:text-nykaa-pink">Lingerie & Accessories</a>
        </div>
        <a href="#" className="bg-nykaa-pink text-white px-3 py-1 rounded text-xs font-bold">OFFERS</a>
      </div>
    </nav>
  );
};

export default CategoriesNavbar;
