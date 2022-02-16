import React from 'react';

import locationIcon from '../assets/icon-location.svg';
import companyIcon from '../assets/icon-company.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import websiteIcon from '../assets/icon-website.svg';

import './Sass/UserContacts.scss';


const UserContacts = ({user}) => {
    const iconArray = [
        {
            name: (user.location==null?"Not Available":user.location),
            class: 'location-icon',
            icon: locationIcon
        },
        {
            name: (user.company==null?"Not Available":user.company),
            class: 'company-icon',
            icon: companyIcon
        },
        {
            name: (user.twitter_username==null?"Not Available":user.twitter_username),
            class: 'twitter-icon',
            icon: twitterIcon
        },
        {
            name: (user.blog==null?"Not Available":user.blog),
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