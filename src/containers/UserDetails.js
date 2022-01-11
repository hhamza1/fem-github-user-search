import React from 'react';


import './Sass/UserDetails.scss';
import UserContacts from '../components/UserContacts';
import UserProfile from '../components/UserProfile';
import UserStats from '../components/UserStats';

const UserDetails = () => {
    return(
        <div className='user-details'>
            <UserProfile />
            <UserStats />
            <UserContacts />
        </div>
    )
}

export default UserDetails;