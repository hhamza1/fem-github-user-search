import React from 'react'; 

import './Sass/UserProfile.scss';


const UserProfile = ({user}) => {
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
            <img src={user.avatar_url} alt={(!user.name ? 'No User' : user.name)} />
            <div className='user-profile-info__user'>
                <p className='user-profile-info__user--fullname'>{(!user.name ? 'No Name' : user.name)}</p>
                <p className='user-profile-info__user--username'>{(!user.login ? 'No Username' : `@${user.login}`)}</p>
                <p className='user-profile-info__user--joined'>{(!user.created_at ? 'No Date' : `Joined ${dateConverter(user.created_at)}`)}</p>
                <p className='user-profile-info__user--user-description'>
                    {(!user.bio ? 'No Bio' : user.bio)}
                </p>
            </div>
        </div>
    )
}

export default UserProfile;