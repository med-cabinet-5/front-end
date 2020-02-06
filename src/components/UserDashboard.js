//display user details/strains
//dependencies & hooks
import React, { useState, useEffect, useContext } from "react";

//router
import { NavLink } from "react-router-dom";

//components
import SavedStrains from "./SavedStrains";
import StrainSelector from "./StrainSelector";
import StrainDetailCard from "./StrainDetailCard";
import StrainMiniCard from "./StrainMiniCard";

//actions
import { fetchSavedStrains, deleteSavedStrains, updateUser } from "../actions";

//contexts
//savedstrains, user

//styles
import styled from "styled-components"
import { drawer } from "antd";

//icons
import settings from "../icons/greysettings.png";
import avatar from "../icons/avatar.png"


const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
color: white;
`

const UserHeader = styled.h4`
display: flex;
color: white;
`

// const NavContainer = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// width: 100%;
// border: purple solid 1px;
// `

const UserNav = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between; 
align-items: center;
width: 25%;
`

const UserResults = styled.div`
display: flex;
flex-direction: column;
background-color: #918383;
width: 50%;
`

const NavLogo = styled.img`
display: flex;
justify-content: center;
max-height: 200px;
padding: 5% 0 0;
margin-bottom:8%;
`

// const [visible, setVisible] = useState(false);

// const showDrawer = () => {
//     setVisible({
//     visible: true,
//     });
// };

// const onClose = () => {
//     setvisible({
//     visible: false,
//     });
// };

function UserDashboard() {
    return (
    <DashboardContainer>
    {/* <NavContainer>

        <NavLink to="/" style={{color: "#1497AB", textDecoration: "underline", }}> Home </NavLink>
        <NavLink to="/search" style={{color: "#1497AB", textDecoration: "underline", }} > Explore </NavLink>
        <NavLink to="/logout" style={{color: "#1497AB", textDecoration: "underline", }} >Logout </NavLink>
        
    </NavContainer> */}

    <UserNav>
        <UserHeader>Welcome Back (name)!</UserHeader>
        <img src={avatar} alt="avatar" />
        </UserNav>
    
    {/* <UserHeader>Welcome Back (name)!</UserHeader> */}
        <span>
        <NavLogo src={settings} alt="Settings" />
        </span>
    <UserResults>
    <StrainSelector />
    </UserResults>

    <SavedStrains />

    </DashboardContainer>
)};

export default UserDashboard;