//landing from front-end dev/marketing page
import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"
import { Carousel, Icon } from 'antd';

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
// justify-content: center;
// align-items: center;
background-color: rgb(0,181,205, 0.7);
min-height: 500px;
max-width: 400px;
min-width: 400px;
border-radius:36px;
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

const CarouselBody = styled.div`
text-align:center;
margin-top:5%;
`

const CarouselHeader= styled.h1`
color:white;
`

const CarouselDiv= styled.div`
display:flex;
flex-direction:column;
margin-left:35%;
`
const CarouselP= styled.p`
color:white;
font-size: 1.4rem;
`

const Carouselpic=styled.h1`
margin-top:10%;
color:white;
font-size:4.5rem;
`
function MarketingLanding () {
    return(
       <CarouselBody>
        <Carousel autoplay effect="fade">
             
            
    <LandingBody>
        <Carouselpic> <Icon type="experiment" /></Carouselpic>
         <CarouselHeader>Find your strain</CarouselHeader>
        <CarouselP>Find strains based on their effects and taste in a database of thousnads</CarouselP>
    </LandingBody>
            
            
     <LandingBody>
         <Carouselpic><Icon type="book" /></Carouselpic>
        <CarouselHeader>Locate your strain</CarouselHeader>
        <CarouselP>Locate nearby dispensaries or medical practitioners that can give expert insights.</CarouselP>
    </LandingBody>
           
            
    <LandingBody>
    <Carouselpic><Icon type="idcard" /></Carouselpic>
        <CarouselHeader>Welcome!</CarouselHeader>
        <CarouselP>Explore what Med Cabinet has to offer!</CarouselP>
        <CarouselDiv>
        <LandingButton>
        <Link to="/signup" style={{textDecoration: 'none', color: 'white' }}> Sign-Up</Link>
        </LandingButton>

        <LandingButton>
        <Link to="/login"style={{textDecoration: 'none', color: 'white' }}> Login</Link>
        </LandingButton>
        </CarouselDiv>
    </LandingBody>
    
    </Carousel>
    
    </CarouselBody>
    )
};

export default MarketingLanding