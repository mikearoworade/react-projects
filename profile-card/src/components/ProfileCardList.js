import React from 'react';
import ProfileCard from './ProfileCard';
import './ProfileCardList.css';

const profiles = [
    {
        name: 'Michael Aroworade',
        title: 'Fullstack Developer',
        avatar: 'https://i.pravatar.cc/150?img=3',
        email: 'michael@example.com',
    },
    {
        name: 'Sarah Johnson',
        title: 'UI/UX Designer',
        avatar: 'https://i.pravatar.cc/150?img=5',
        email: 'sarah@example.com',
    },
    {
        name: 'John Doe',
        title: 'Project Manager',
        avatar: 'https://i.pravatar.cc/150?img=8',
        email: 'john@example.com',
    },
];

function ProfileCardList() {
    return (
        <div className="profile-card-list">
            {profiles.map((user, index) => (
                <ProfileCard
                    key={index}
                    name={user.name}
                    title={user.title}
                    avatar={user.avatar}
                    email={user.email}
                />
            ))}
        </div>
    );
}

export default ProfileCardList;
