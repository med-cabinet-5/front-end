//display user details/strains

import React, { useState, useEffect } from "react";

//router
import { NavLink } from "react-router-dom";

//components
import SavedStrains from "./SavedStrains";

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

const UserInfo = styled.div`
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
    <UserInfo>
        <p>Display User Info Here</p>
        <p> (proba) There's a -% chance you're looking for a(n) indica</p>
        <p>Your top ailments: (ailments) </p>
        <p>Your top effects (effects)</p>
        <p>Your top flavors: (flavors)</p>
    </UserInfo>
    <SavedStrains />
    </DashboardContainer>
)};

export default UserDashboard;