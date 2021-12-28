import React from 'react';

import Header from './Header';

import './App.scss';
import SearchBar from './SearchBar';
import Footer from './Footer';
import UserDetails from './UserDetails';


const App = () => {
  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <UserDetails />
      <Footer />
    </div>
  );
}

export default App;
