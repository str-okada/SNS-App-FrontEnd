import React from 'react'

export default function CloseFriend({user}) {
    const REACT_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className='sidebarFriend'>
            <img src={ REACT_FOLDER + user.profilePicture} alt="2" className='sidebarFriendImg' />
            <span className='sidebarFriendName'>{user.username}</span>
        </li>
    )
}
