import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import CategoriesNavbar from './components/CategoriesNavbar';

import MainContent from './components/MainContent';
import ChatButton from './components/ChatButton';

const App = () => {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />
      <CategoriesNavbar />
      <MainContent />
      <ChatButton />
    </div>
  );
};

export default App;

