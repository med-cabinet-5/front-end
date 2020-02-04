//landing from front-end dev/marketing page
import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"

const Container = styled.div`
display: flex;
justify-content: center;
width: 100%;
`


const LandingBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #D9F9FD;
    min-height: 500px;
    max-width: 300px;
    min-width: 300px;
`

function MarketingLanding () {
    return(
    <Container>
    <LandingBody>
        
        <Link to="/login"> Login</Link>
    
        <Link to="/signup"> Sign-Up</Link>
        
    </LandingBody>
    </Container>
    )
};

export default MarketingLanding