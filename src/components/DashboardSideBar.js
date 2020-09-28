import React from 'react';
import { DashboardSideBar, DashboardButton } from '../styles'
import { NavLink, Link } from 'react-router-dom' 
import logo from '../images/logo.png'

import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactsIcon from '@material-ui/icons/Contacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar(){
    return(

        <DashboardSideBar>
            <div className="heading">
                <Link to="/" >
                    <img src={logo} />
                </Link>
            </div>
            
            <div className="hello">
                <h3>Hello, [name]!</h3>
            </div>
            

            <div>    
            <NavLink 
                to="/dashboard/:id/recommendations" 
                className="sidebar top"
                activeStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(to right, #3d6a25, #a2d586)'
                }}>
                <ContactsIcon 
                style={{
                    margin: '0.75rem'
                }}/> Preferences
            </NavLink>
            
            <NavLink 
                to="/dashboard/:id/recommendations" 
                className="sidebar"
                activeStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(to right, #3d6a25, #a2d586)'
                }}>
                <FeaturedPlayListIcon   
                style={{
                    margin: '0.75rem'
                }}/> Recommendations
            </NavLink>


            <NavLink 
                to="/dashboard/:id/favorites" 
                className="sidebar"
                activeStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(to right, #3d6a25, #a2d586)'
                }}
                >
                <FavoriteBorderIcon   
                style={{
                    margin: '0.5rem'
                }}/> Favorites
            </NavLink>

            <NavLink 
                to="/dashboard/:id/settings" 
                className="sidebar"
                activeStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(to right, #3d6a25, #a2d586)'
                }}>
                <SettingsIcon   
                style={{
                    margin: '0.5rem'
                }}/>Account Settings
            </NavLink>
            </div>

            <div className="logout">
                <DashboardButton> Logout <ExitToAppIcon/> </DashboardButton>
            </div>

        </DashboardSideBar>
    )
}

export default Sidebar