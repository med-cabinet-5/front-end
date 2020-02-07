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
import { Drawer } from "antd";

//icons
import avatar from "../icons/avatar.png";
import edit from "../icons/edit.png";


const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
color: white;
`

const UserResults = styled.div`
display: flex;
flex-direction: column;
background-color: #918383;
width: 50%;
`

const NavLogo = styled.span`
display: flex;
margin-bottom: 8%;
`



function UserDashboard() {

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true)
    };
    
    const onClose = () => {
        setVisible(false)
    };


    return (
    <DashboardContainer>
    {/* <NavContainer>
        <NavLink to="/" style={{color: "#1497AB", textDecoration: "underline", }}> Home </NavLink>
        <NavLink to="/search" style={{color: "#1497AB", textDecoration: "underline", }} > Explore </NavLink>
        <NavLink to="/logout" style={{color: "#1497AB", textDecoration: "underline", }} >Logout </NavLink>
    </NavContainer> */}

    <div>
        <NavLogo  onClick={showDrawer}>
        <img src={avatar} alt="avatar" />
        </NavLogo>
    
        <Drawer
            title="Hello (Name)" 
            placement="right"
            closable={true}
            onClose={onClose}
            visible={visible}
        >
            <p>Edit User Details <img src={edit} alt="edit pencil" /> </p>
        </Drawer>
    </div>

    <UserResults>
        {/* map results context, display in strain selector as a list, post to saved strains endpoint */}
    <StrainSelector />
    </UserResults>
        {/* display get of saved strains */}
    <SavedStrains />
    </DashboardContainer>
)};

export default UserDashboard;