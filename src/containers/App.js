import React, {useState, useEffect} from 'react';

import Header from './Header';

import './Sass/App.scss';
import SearchBar from './SearchBar';
import Footer from './Footer';
import UserDetails from './UserDetails';

import { ThemeContext } from '../contexts/ThemeContext';


const App = () => {

  const [user, setUser] = useState('octocat');
  const [userData, setUserData] = useState([]);
  const [isDark, setIsDark] = useState(false);

  



  const submitHandler = async e => {
    e.preventDefault();
      await fetch(`https://api.github.com/users/${user}`)
      .then(profile => profile.json())
      .then(data =>  setUserData(data));
  }


  useEffect(() => {
    fetch(`https://api.github.com/users/octocat`)
    .then(res => res.json())
    .then(data => setUserData(data));
  }, []);

  return (
      <ThemeContext.Provider value={{isDark, setIsDark}}>
      <div className={isDark === false ? 'App' : 'App App__dark'}>
        <Header />
        <SearchBar
          user={user}
          submitHandler={submitHandler}
          setUser={setUser}
          userData={userData}
          />
        <UserDetails userData={userData}/>
        <Footer />
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
