import React from 'react';
import NykaaLogo from '../assets/NykaaLogo.png';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center py-4 px-4 flex-nowrap">
        <img src={NykaaLogo} alt="Nykaa" className="h-8 mr-6" />
        <div className="flex-grow">
          <div className="flex space-x-6 text-black-900 font-bold">
            <a href="#" className="hover:text-nykaa-pink">Categories</a>
            <a href="#" className="hover:text-nykaa-pink">Brands</a>
            <a href="#" className="hover:text-nykaa-pink">Luxe</a>
            <a href="#" className="hover:text-nykaa-pink">Nykaa Fashion</a>
            <a href="#" className="hover:text-nykaa-pink">Beauty Advice</a>
          </div>
        </div>
        <div className="flex items-center relative">
          <input
            type="text"
            placeholder="Search on Nykaa"
            className="border rounded-l px-4 py-2 w-64 pl-10 focus:outline-none focus:ring-1 focus:ring-red-500"
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          <button className="bg-nykaa-pink text-white px-4 py-1 rounded-lg hover:bg-pink-600 ml-2 font-bold">
            Sign in
          </button>
          <i className="fas fa-shopping-bag text-gray-800 text-xl ml-4"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
