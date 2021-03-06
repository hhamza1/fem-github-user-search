import React, {useContext} from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

import './Sass/UserDetails.scss';
import UserContacts from '../components/UserContacts';
import UserProfile from '../components/UserProfile';
import UserStats from '../components/UserStats';

const UserDetails = ({userData}) => {

    const {isDark} = useContext(ThemeContext);

    if(userData.login !== undefined) {
        return (
                <div className={isDark === false ? 'user-details' : 'user-details user-details__dark'}>
                    <UserProfile userData={userData} />
                    <UserStats userData={userData}/>
                    <UserContacts userData={userData}/>
                </div>
        )
    }
    else {
        return(
            <div className={isDark === false ? 'user-details' : 'user-details user-details__dark'}>
                <div className="no-profile">No Profile Available</div>
            </div>
        )
    }
}

export default UserDetails;