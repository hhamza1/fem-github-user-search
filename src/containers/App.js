import React, {useState, useEffect} from 'react';

import Header from './Header';

import './Sass/App.scss';
import SearchBar from './SearchBar';
import Footer from './Footer';
import UserDetails from './UserDetails';


const App = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/octocat`)
    .then(res => res.json())
    .then(data => setUser(data));
  }, []);


  const onChangeHandler = e => {
    setUser(e.target.value);
  }

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${user}`);

    const profileJson = await profile.json();
    console.log(profileJson);
    setUser(profileJson);
  }



  return (
    <div className='App'>
      <Header />
      <SearchBar
        user={user}
        submitHandler={submitHandler}
        onChangeHandler={onChangeHandler}
        />
      <UserDetails user={user}/>
      <Footer />
    </div>
  );
}

export default App;
