import React from 'react'; 

import profileImage from '../assets/octocat.png';

import './Sass/UserProfile.scss';


const UserProfile = () => {
    return(
        <div className="user-profile-info">
            <img src={profileImage} alt="The Octocat" />
            <div className='user-profile-info__user'>
                <p className='user-profile-info__user--fullname'>The Octocat</p>
                <p className='user-profile-info__user--username'>@octocat</p>
                <p className='user-profile-info__user--joined'>Joined 25 Jan 2011</p>
                <p className='user-profile-info__user--user-description'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                    Donec odio. Quisque volutpat mattis eros.
                </p>
            </div>
        </div>
    )
}

export default UserProfile;