import React from 'react';
import logo from "../images/logo.png";
import darklogo from '../images/darklogo.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLogo = styled.img`
    max-height: 200px;

    @media(max-width: 700px){
        max-height: 100px;
    }
`
const Header = styled.header`
    height: 15rem;
    padding: 0;
    margin: 0;

    @media(max-width: 700px){
        height: 7.75rem;
    }
`

function Nav(){
    return(
        <Header className="App-header">
            <Link to="/">
                <NavLogo src={darklogo} alt="Logo" />
            </Link>
        </Header>
    )
}

export default Nav