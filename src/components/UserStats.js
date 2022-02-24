import React from 'react';

import './Sass/UserStats.scss';


const UserStats = ({userData}) => {
    return(
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
                    <td>{userData.public_repos}</td>
                    <td>{userData.followers}</td>
                    <td>{userData.following}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserStats;