import React from 'react';


import './Sass/UserDetails.scss';
import UserContacts from '../components/UserContacts';
import UserProfile from '../components/UserProfile';
import UserStats from '../components/UserStats';

const UserDetails = ({userData, isLoaded}) => {
    return(
        <div className='user-details'>
            <UserProfile userData={userData} />
            <UserStats userData={userData}/>
            <UserContacts userData={userData}/>
        </div>
    )
}

export default UserDetails;