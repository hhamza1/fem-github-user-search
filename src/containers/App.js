import React from 'react';

import Header from './Header';

import './App.scss';
import SearchBar from './SearchBar';
import Footer from './Footer';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <Footer />
    </div>
  );
}

export default App;
