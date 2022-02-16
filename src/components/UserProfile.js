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
            <img src={user.avatar_url} alt="The Octocat" />
            <div className='user-profile-info__user'>
                <p className='user-profile-info__user--fullname'>{user.name}</p>
                <p className='user-profile-info__user--username'>@{user.login}</p>
                <p className='user-profile-info__user--joined'>Joined {dateConverter(user.created_at)}</p>
                <p className='user-profile-info__user--user-description'>
                    {user.bio}
                </p>
            </div>
        </div>
    )
}

export default UserProfile;