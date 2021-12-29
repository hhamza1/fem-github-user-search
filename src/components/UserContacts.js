import React from 'react';

import locationIcon from '../assets/icon-location.svg';
import companyIcon from '../assets/icon-company.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import websiteIcon from '../assets/icon-website.svg';

import './UserContacts.scss';


const UserContacts = () => {
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
    return (
        <ul className='user-contacts'>
            {
                iconArray.map((el,index) => {
                return (
                    <li className={el.name} key={index}>
                        <img src={el.icon} alt={el.name} />
                        <span>{el.name}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default UserContacts;