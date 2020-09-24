import React from 'react';
import { DashboardSideBar, DashboardButton } from '../styles'
import { NavLink } from 'react-router-dom' 
import logo from '../images/logo.png'

function Sidebar(){
    return(

        <DashboardSideBar>
            <div>
                <img src={logo} />
            </div>
            
            <NavLink to="/" className="sidebar">
                Recommendations
            </NavLink>


            <NavLink 
                to="/" 
                className="sidebar"
                activeStyle={{
                    color: 'white'
                }}
                >
                &#9825; Favorites
            </NavLink>

            <NavLink 
                to="/dashboard" 
                className="sidebar"
                style={{

                }}>
                Account Settings
            </NavLink>

            <div>
                <DashboardButton> Logout </DashboardButton>
            </div>

        </DashboardSideBar>
    )
}

export default Sidebar