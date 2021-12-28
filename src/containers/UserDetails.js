import React from 'react';

import profileImage from '../assets/octocat.png';

import './UserDetails.scss';

const UserDetails = () => {
    return(
        <div className='user-details'>
            <div class="user-profile-info">
                <img src={profileImage} alt="The Octocat" />
                <div className='user-profile-info__user'>
                    <p className='user-profile-info__user--fullname'>The Octocat</p>
                    <p className='user-profile-info__user--username'>@octocat</p>
                    <p className='user-profile-info__user--joined'>Joined 25 Jan 2011</p>
                </div>
            </div>
            <div className='user-description'>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                </p>
            </div>
            <table class="user-stats">
                <tr>
                    <th>Repos</th>
                    <th>Followers</th>
                    <th>Following</th>
                </tr>
                <tr>
                    <td>8</td>
                    <td>3839</td>
                    <td>9</td>
                </tr>
            </table>
        </div>
    )
}

export default UserDetails;