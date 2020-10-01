import React, { useEffect , useState }from 'react';
import { DashboardSideBar, DashboardButton } from '../styles'
import { NavLink, Link, Redirect } from 'react-router-dom' 
import logo from '../images/logo.png'
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import { useParams } from 'react-router';

import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactsIcon from '@material-ui/icons/Contacts';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Sidebar(){
    
    const [user, setUser] = useState([])

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get(' https://med-cabinet-server.herokuapp.com/api/user/')
    //         .then(res => {
    //             console.log('success', res);
    //             setUser(res)
    //         })
    //         .catch(err => console.log(err));

    // }, []);

    // console.log('dashboard user' ,user)


    // const logout = () => {
    //     localStorage.removeItem("token");
    //     return <Redirect to="/login" />;
    // }

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
                <h3>Hello, John!</h3>
            </div>
            

            <div>    
            <NavLink 
                to={`/dashboard/${id}/info`}
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
                to={`/dashboard/${id}/recommendations`}
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
                to={`/dashboard/${id}/favorites`} 
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
                to={`/dashboard/${id}/settings`}
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
                <DashboardButton 
                    // onclick={Logout()}
                > Logout <ExitToAppIcon/> </DashboardButton>
            </div>

        </DashboardSideBar>
    )
}

export default Sidebar