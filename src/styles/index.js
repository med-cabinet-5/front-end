import styled from 'styled-components';

// marketing / login / sign up
export const LandingBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(162, 213, 134, 0.8);
    min-height: 550px;
    max-width: 350px;
    min-width: 350px;
    border-radius: 36px;
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0.75rem 0 2.5rem;

    @media(max-width: 700px){
        margin: 0.5rem 0 5rem;
    }
`

export const ButtonPrimary = styled.button`
    margin-bottom: 1rem;
    background-color: #444a44;
    color: #fafaf1;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    border: solid 1px #425937;
    min-width: 40%;
`

// forms
export const Error = styled.p`
    color: red;
    padding: 0;
    margin: 0;
`

export const Columns = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    margin-bottom:1%;
    width: 100%;
`

export const SignUp = styled.p`
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    color: #fafaf1;
`

export const SignupLabels = styled.p`
    color: white;
    margin-top: 0.5rem;
    margin-bottom: 1%;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
`

export const LoginLabels = styled.label`
    color: #fafaf1;
    margin-top: 4%;
    margin-bottom: 1%;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
`

export const SignupLoginContainer = styled.div`
margin-top: 5%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-content: center;
`

export const SignupLoginHeader = styled.h1`
    color: #444a44;
    margin-top: 3rem;
`


// dashboard styles
export const DashboardContainer = styled.div`
    width: 85%;
    background-color: #fafaf1;
    display: flex;
    flex-direction: row;
    height: 90vh;
    border-radius: 30px;

    @media(max-width: 1050px){
        margin-top: 3rem;
    }

    @media(max-width: 1050px){
        margin: 1rem 0;
    }
`

export const DashboardSideBar = styled.div`
    background-color: #444a44;
    width: 25%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    flex-direction: column;

    img {
        width: 100px;
    }

    .sidebar {
        height: 2rem;
        border-bottom: #a2d586;
        font-family: 'Roboto Condensed', sans-serif;
        
    }
`

export const DashboardButton = styled.button`
    color: #444a44;
    background-color: #fafaf1;
    border-radius: 10px;
    padding: 0.15rem 1rem 0.1rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    text-decoration: none;
    border: none;
`

// info form styling
export const InfoHeader = styled.h1`
    color: #444a44;
`

export const InfoLabels = styled.p`
    color: white;
    text-align: left;
    margin-top: 7%;
    margin-bottom: 1%;
`
export const InfoInstructions = styled.div`
    padding-bottom: 3%;
    border-bottom: #323232 solid 2px;
`

export const InfoForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
    background-color: #918383;
    color: black;
    padding: 5%;
`