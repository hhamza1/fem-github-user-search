import React from 'react';

import './Sass/UserStats.scss';


const UserStats = () => {
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
                    <td>8</td>
                    <td>3839</td>
                    <td>9</td>
                </tr>
            </tbody>
        </table>
    )
}

export default UserStats;