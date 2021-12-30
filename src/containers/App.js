import React, {useState, useEffect} from 'react';

import Header from './Header';

import './Sass/App.scss';
import SearchBar from './SearchBar';
import Footer from './Footer';
import UserDetails from './UserDetails';


const App = () => {
  const [user, setUser] = useState([]);

  const searchUser = (e) => {
    console.log(e.target.value);
  }


  return (
    <div className='App'>
      <Header />
      <SearchBar searchUser={searchUser}/>
      <UserDetails />
      <Footer />
    </div>
  );
}

export default App;
