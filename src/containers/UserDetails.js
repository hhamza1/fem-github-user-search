import React from 'react';


import './Sass/UserDetails.scss';
import UserContacts from '../components/UserContacts';
import UserProfile from '../components/UserProfile';
import UserStats from '../components/UserStats';
import UserDescription from '../components/UserDescription';

const UserDetails = () => {
    return(
        <div className='user-details'>
            <UserProfile />
            <UserDescription />
            <UserStats />
            <UserContacts />
        </div>
    )
}

export default UserDetails;