import React from 'react';
import Avatar from './Avatar';
import UserInfo from './UserInfo';
import ContactButton from './ContactButton';
import './ProfileCard.css';

function ProfileCard({ name, title, avatar, email }) {
    return (
        <div className="profile-card">
            <Avatar image={avatar} />
            <UserInfo name={name} title={title} />
            <ContactButton email={email} />
        </div>
    );
}

export default ProfileCard;
