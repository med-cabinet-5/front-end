//display user details/strains

import React from "react";
import styled from "styled-components"
import { NavLink } from "react-router-dom";
import SavedStrains from "./SavedStrains";

const DashboardContainer = styled.div`
color: white;
`
const UserInfo = styled.div`
background-color: 
`

function UserDashboard() {
    return (
<DashboardContainer>
    <nav>
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/search" > Explore </NavLink>
        <NavLink to="/logout" >Logout </NavLink>
        
    </nav>
    
    <h2>Welcome Back (name)!</h2>

    <UserInfo>
        <p>Display User Info Here</p>
        <p> (proba) There's a -% chance you're looking for a(n) indica</p>
        <p>Your top ailments: (ailments) </p>
        <p>Your top effects (effects)</p>
        <p>Your top flavors: (flavors)</p>
    </UserInfo>

    <div>
    <SavedStrains/>
    </div>
</DashboardContainer>
)};

export default UserDashboard;