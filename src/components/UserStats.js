import React from 'react';

import './Sass/UserStats.scss';


const UserStats = ({user}) => {
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
                    <td>{user.public_repos}</td>
                    <td>{user.followers}</td>
                    <td>{user.following}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserStats;