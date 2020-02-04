//landing from front-end dev/marketing page
import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"

const LandingContainer = styled.div`
margin-top: 5%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
justify-content: center;
`

const LandingBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #918383;
min-height: 500px;
max-width: 400px;
min-width: 400px;
`

function MarketingLanding () {
    return(
    <LandingContainer>
    <LandingBody>
        <h1>Welcome!</h1>
    
        <Link to="/signup"> Sign-Up</Link>
        <Link to="/login"> Login</Link>
        
    </LandingBody>
    </LandingContainer>
    )
};

export default MarketingLanding