import React, {useState, useEffect} from 'react';

import Header from './Header';

import './Sass/App.scss';
import SearchBar from './SearchBar';
import Footer from './Footer';
import UserDetails from './UserDetails';


const App = () => {

  const [user, setUser] = useState('octocat');
  const [userData, setUserData] = useState([]);
  const [dark, isDark] = useState(false);
  //const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/octocat`)
    .then(res => res.json())
    .then(data => setUserData(data));
  }, []);



  const submitHandler = async e => {
    e.preventDefault();
      await fetch(`https://api.github.com/users/${user}`)
      .then(profile => profile.json())
      .then(data =>  setUserData(data));
  }

  return (
    <div className='App'>
      <Header />
      <SearchBar
        user={user}
        submitHandler={submitHandler}
        setUser={setUser}
        />
      <UserDetails userData={userData}/>
      <Footer />
    </div>
  );
}

export default App;
