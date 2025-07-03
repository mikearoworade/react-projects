import React from 'react';

function UserInfo({ name, title }) {
    return (
        <div className="user-info">
            <h2>{name}</h2>
            <p>{title}</p>
        </div>
    );
}

export default UserInfo;
