import React from 'react';

import locationIcon from '../assets/icon-location.svg';
import companyIcon from '../assets/icon-company.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import websiteIcon from '../assets/icon-website.svg';

import './Sass/UserContacts.scss';


const UserContacts = ({userData}) => {
    const iconArray = [
        {
            name: (userData.location==null?"Not Available":userData.location),
            class: 'location-icon',
            icon: locationIcon
        },
        {
            name: (userData.company==null?"Not Available":userData.company),
            class: 'company-icon',
            icon: companyIcon
        },
        {
            name: (userData.twitter_username==null?"Not Available":userData.twitter_username),
            class: 'twitter-icon',
            icon: twitterIcon
        },
        {
            name: (userData.blog==null?"Not Available":userData.blog),
            class: 'website-icon',
            icon: websiteIcon
        }
    ];
    return (
        <ul className='user-contacts'>
            {
                iconArray.map((el,index) => {
                return (
                    <li className={el.class} key={index}>
                        <img src={el.icon} alt={el.name} />
                        <span>{el.name}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default UserContacts;