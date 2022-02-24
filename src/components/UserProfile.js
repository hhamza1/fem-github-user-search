import React from 'react'; 

import './Sass/UserProfile.scss';


const UserProfile = ({userData}) => {
    const dateConverter = (date) => {
        if (date) {
          var newDate = new Date(date);
          return newDate.toDateString().slice(4);
        } else {
          return 'No Date Available';
        }
    }

    return(
        <div className="user-profile-info">
            <img src={userData.avatar_url} alt={(!userData.name ? 'No User' : userData.name)} />
            <div className='user-profile-info__user'>
                <p className='user-profile-info__user--fullname'>{(!userData.name ? 'No Name' : userData.name)}</p>
                <p className='user-profile-info__user--username'>{(!userData.login ? 'No Username' : `@${userData.login}`)}</p>
                <p className='user-profile-info__user--joined'>{(!userData.created_at ? 'No Date' : `Joined ${dateConverter(userData.created_at)}`)}</p>
                <p className='user-profile-info__user--user-description'>
                    {(!userData.bio ? 'No Bio' : userData.bio)}
                </p>
            </div>
        </div>
    )
}

export default UserProfile;