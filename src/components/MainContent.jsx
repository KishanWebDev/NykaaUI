import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';

const MainContent = () => {
  return (
    <main className="container mx-auto mt-6 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <img src={img1} alt="YSL" className="w-full h-60 sm:h-80 object-cover" />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-1">Complimentary Mini Libre</h2>
            <p className="mb-7">On Makeup Orders of ₹4000+</p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <img src={img2} alt="Foxtale" className="w-full h-60 sm:h-80 object-cover" />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">New Launch Alert!</h2>
            <p className="mb-7">Min 10% Off</p>
          </div>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <img src={img3} alt="Quench" className="w-full h-60 sm:h-80 object-cover" />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-0">94% Users Found Brighter Skin</h2>
            <p className="mb-7">Explore the Korean Range!</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
