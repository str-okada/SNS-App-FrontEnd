import { Chat, Notifications, Search } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./Topbar.css";
import { AuthContext } from '../../state/AuthContext'

export default function Topbar() {
    const { user } = useContext(AuthContext);
    const REACT_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className='topbarContainer'>
            <div className='topberLeft'>
                <Link to="/" style={{ textDecoration: "none", color: 'none' }}>
                    <span className='logo'>Okada SNS APP</span>
                </Link>
            </div>
            <div className='topberCenter'>
                <div className='searchbar'>
                    <Search className='searchIcon'></Search>
                    <input type="text" className='searchinput' placeholder='search' />
                </div>
            </div>

            <div className="topberRight">
                <div className="topberItemIcons">
                    <div className="topbarItem">
                        <Chat></Chat>
                        <span className='topIconBadge'>1</span>
                    </div>
                    <div className="topbarItem">
                        <Notifications></Notifications>
                        <span className='topIconBadge'>2</span>
                    </div>
                    <Link to={`/profile/${user.username}`}>
                        <img src={user.profilePicture
                            ? REACT_FOLDER + user.profilePicture
                            : REACT_FOLDER + "/person/noAvatar.png"
                        } alt="1"
                            className='topberImg'
                        />
                    </Link>
                </div>
            </div>

        </div>
    )
}
