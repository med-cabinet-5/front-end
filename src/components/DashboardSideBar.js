import React, { useContext }from 'react';
import { DashboardSideBar, DashboardButton } from '../styles'
import { NavLink, Link, Redirect } from 'react-router-dom' 
import logo from '../images/logo.png'
import { useParams } from 'react-router';
import { UserContext } from '../contexts/UserContext'


import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactsIcon from '@material-ui/icons/Contacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar(){
    

    // const logout = () => {
    //     localStorage.removeItem("token");
    //     return <Redirect to="/login" />;
    // }

    const [ user, setUser ] = useContext(UserContext)
    const { id } = useParams()

    return(
        
        // click out/expand for mobile?
        <DashboardSideBar>
            <div className="heading">
                <Link to="/" >
                    <img src={logo} />
                </Link>
            </div>
            
            <div className="hello">
                { user[0] === undefined ? <p> No user logged in </p> : 
                    <h3>
                        Hello { user[0].saved !== undefined ? user[0].saved.first_name : user[0].user.first_name}!
                    </h3>
                } 
            </div>
            

            <div>    
            <NavLink 
                to={`/dashboard/${id}/info`}
                className="sidebar top"
                activeStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(to right, #3d6a25, #7FC559)'
                }}>
                <ContactsIcon 
                style={{
                    margin: '0.75rem'
                }}/> Preferences
            </NavLink>
            
            <NavLink 
                to={`/dashboard/${id}/recommendations`}
                className="sidebar"
                activeStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(to right, #3d6a25, #7FC559)'
                }}>
                <FeaturedPlayListIcon   
                style={{
                    margin: '0.75rem'
                }}/> Recommendations
            </NavLink>


            <NavLink 
                to={`/dashboard/${id}/favorites`} 
                className="sidebar"
                activeStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(to right, #3d6a25, #7FC559)'
                }}
                >
                <FavoriteBorderIcon   
                style={{
                    margin: '0.75rem'
                }}/> Favorites
            </NavLink>

            <NavLink 
                to={`/dashboard/${id}/settings`}
                className="sidebar"
                activeStyle={{
                    color: 'white',
                    backgroundImage: 'linear-gradient(to right, #3d6a25, #7FC559)'
                }}>
                <SettingsIcon   
                style={{
                    margin: '0.75rem'
                }}/>Account Settings
            </NavLink>
            </div>

            <div className="logout">
                <DashboardButton 
                    // onclick={Logout()}
                > Logout <ExitToAppIcon/> </DashboardButton>
            </div>

        </DashboardSideBar>
    )
}

export default Sidebar