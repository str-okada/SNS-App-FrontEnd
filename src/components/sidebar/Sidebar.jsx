import React from 'react'
import { Bookmark, Home, Person, Search, Settings, Notifications, MessageRounded } from '@mui/icons-material'
import "./Sidebar.css";
import { Users } from "../../dummyData"
import CloseFriend from '../closeFriend/CloseFriend';
import { Link } from 'react-router-dom';


export default function Sidebar() {

  return (
    <div className='sidebar'>
      <div className="sidebarWrpper">
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <Home className='sidebarIcon' />
            <Link to="/"  style={{textDecoration: "none", color:'black'}}>
              <span className='sidebarListItemText'>Home</span>
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Search className='sidebarIcon' />
            <span className='sidebarListItemText'>Search</span>
          </li>
          <li className='sidebarListItem'>
            <Notifications className='sidebarIcon' />
            <span className='sidebarListItemText'>Notification</span>
          </li>
          <li className='sidebarListItem'>
            <MessageRounded className='sidebarIcon' />
            <span className='sidebarListItemText'>Message</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmark</span>
          </li>
          <li className='sidebarListItem'>
            <Person className='sidebarIcon' />
            <Link to="/profile/shotaro" style={{textDecoration: "none", color:'black'}}>
              <span className='sidebarListItemText'>Profile</span>
            </Link>
          </li>
          <li className='sidebarListItem'>
            <Settings className='sidebarIcon' />
            <span className='sidebarListItemText'>Setting</span>
          </li>
        </ul>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          {Users.map((user) => (
            <CloseFriend user={user} key={user.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
