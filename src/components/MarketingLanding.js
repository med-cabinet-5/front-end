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
align-items: center;
background-color: #918383;
min-height: 500px;
max-width: 400px;
min-width: 400px;
`

const LandingButton = styled.button`
margin: 5%;
width: 35%;
background-color: #323232;
color: white;
text-decoration: none;
padding: 1%;
border-radius: 8px;
`

function MarketingLanding () {
    return(
    <LandingContainer>
    <LandingBody>
        <h1>Welcome!</h1>
        <LandingButton>
        <Link to="/signup" style={{textDecoration: 'none', color: 'white' }}> Sign-Up</Link>
        </LandingButton>

        <LandingButton>
        <Link to="/login"style={{textDecoration: 'none', color: 'white' }}> Login</Link>
        </LandingButton>
        
    </LandingBody>
    </LandingContainer>
    )
};

export default MarketingLanding