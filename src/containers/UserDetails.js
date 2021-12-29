import React from 'react';

import profileImage from '../assets/octocat.png';
import locationIcon from '../assets/icon-location.svg';
import companyIcon from '../assets/icon-company.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import websiteIcon from '../assets/icon-website.svg';

import './UserDetails.scss';

const UserDetails = () => {
    const iconArray = [
            {
                name: 'location-icon',
                icon: locationIcon
            },
            {
                name: 'company-icon',
                icon: companyIcon
            },
            {
                name: 'twitter-icon',
                icon: twitterIcon
            },
            {
                name:'website-icon',
                icon: websiteIcon
            }
            ];

    return(
        <div className='user-details'>
            <div className="user-profile-info">
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
            <table className="user-stats">
                <thead>
                    <tr>
                        <th>Repos</th>
                        <th>Followers</th>
                        <th>Following</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8</td>
                        <td>3839</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>
            <ul className='user-contacts'>
                {
                    iconArray.map((el,index) => {
                    return (
                        <li className={el.name} index={index}>
                            <img src={el.icon} alt={el.name} />
                            {el.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default UserDetails;