//landing from front-end dev/marketing page
import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components"
import { Carousel} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'
import {faSearchLocation} from '@fortawesome/free-solid-svg-icons'
import {faLaptopMedical} from '@fortawesome/free-solid-svg-icons'
import Nav from './Nav';

import { ButtonPrimary, LandingBody } from '../styles'

const CarouselBody = styled.div`
    margin: 5rem 0;
`

const CarouselHeader= styled.h1`
    color: #fafaf1;
    background-color: rgb(50,50,50, 0.3);
    padding: 0.75rem 0;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 800;
    font-size: 1.9rem;
`

const CarouselDiv= styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

`
const CarouselP= styled.p`
    color: #fafaf1;
    font-size: 1.3rem;
    padding: 2% 5%;
    font-family: 'Roboto Condensed', sans-serif;
    letter-spacing: 0.09rem;
`

const Carouselpic = styled.h1`
    margin-top: 10%;
    color: #fafaf1;
    font-size: 4rem;
`



function MarketingLanding () {
    return(
    <div>

    <Nav />

    <CarouselBody>
        <Carousel autoplay effect="fade">
            
    <LandingBody>
        <Carouselpic> <FontAwesomeIcon icon={ faLaptopMedical}/></Carouselpic>

            <CarouselHeader>Find Your Strain</CarouselHeader>
        <CarouselP> Be matched with strains that address your needs. You'll be given recommendations based on desired effects and taste from a database of thousands of strains</CarouselP>
    </LandingBody>
            
    <LandingBody>
        <Carouselpic><FontAwesomeIcon icon={ faSearchLocation} /></Carouselpic>
        <CarouselHeader>Locate Your Strain</CarouselHeader>
        <CarouselP>Locate nearby dispensaries or medical practitioners that can give expert insights.</CarouselP>
    </LandingBody>
            
    <LandingBody>
    <Carouselpic><FontAwesomeIcon icon={ faUserCircle}/></Carouselpic>
        <CarouselHeader>Welcome!</CarouselHeader>
        <CarouselP>Explore what Med Cabinet has to offer!</CarouselP>
        
        <CarouselDiv>
        <ButtonPrimary>
        <Link to="/signup" style={{textDecoration: 'none', color: 'white' }}> Sign-Up</Link>
        </ButtonPrimary>

        <ButtonPrimary>
            <Link to="/login"style={{textDecoration: 'none', color: 'white' }}> Login</Link>
        </ButtonPrimary>

        </CarouselDiv>
    </LandingBody>
    
    </Carousel>
    
    </CarouselBody>
    </div>
    )
};

export default MarketingLanding