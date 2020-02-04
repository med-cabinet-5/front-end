//landing from front-end dev/marketing page
import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"

const LandingBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; 
    background-color: #D9F9FD;
    min-height: 500px;
    min-width: 300px;
`

function MarketingLanding () {
    return(
    <LandingBody>
        <Link to="/login"> Login</Link>
        <Link to="/signup"> Sign-Up</Link>
    </LandingBody>
    )
};

export default MarketingLanding