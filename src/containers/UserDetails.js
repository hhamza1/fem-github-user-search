import React from 'react';


import './Sass/UserDetails.scss';
import UserContacts from '../components/UserContacts';
import UserProfile from '../components/UserProfile';
import UserStats from '../components/UserStats';

const UserDetails = ({user}) => {
    return(
        <div className='user-details'>
            <UserProfile user={user} />
            <UserStats user={user}/>
            <UserContacts user={user}/>
        </div>
    )
}

export default UserDetails;