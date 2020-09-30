import styled from 'styled-components';

export const AppBody = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

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

export const DashboardBody = styled.div`
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #767f76;
`

export const DashboardSideBar = styled.div`
    background-color: #444a44;
    width: 25%;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    border-right: 1px solid #3d6a25;

    .heading {
        display: flex;
        justify-content: center;

        img {
            width: 85px;
        }
    }

    .hello {
        height: 10rem;
        display: flex;
        justify-content: center;
        align-items: center;
        
        h3{
            color: #fafaf1;
            font-family: 'Abril Fatface', cursive;
            font-size: 2.4rem;
            letter-spacing: 0.1rem;
        }
    }

    .top {
        border-top: solid 1px #3d6a25;
    }

    .sidebar {
        height: 4rem;
        border-bottom: solid 1px #3d6a25;
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 1.3rem;
        text-decoration: none;
        color: #fafaf1;
        display: flex;
        justify-content: flex-start;
        align-items: center; 
        width: 100%;
        padding-left: 1.5rem;
    }

    .logout {
        height: 10rem;
        display: flex;
        justify-content: center;
        align-items: flex-end; 
        width: 100%;
    }
`

export const DashboardButton = styled.button`
    color: #444a44;
    background-color: #fafaf1;
    border-radius: 10px;
    padding: 0.3rem 1.5rem;
    width: 8.5rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    text-decoration: none;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

// info form styling
export const InfoHeader = styled.h1`
    color: #fafaf1;
    font-weight: 900;
    letter-spacing: 0.1rem;
`

export const InfoLabels = styled.p`
    color: #fafaf1;
    text-align: left;
    margin-top: 7%;
    margin-bottom: 1%;
    letter-spacing: 0.02rem;
    font-size: 1rem;
    text-transform: uppercase;
`

export const InfoInstructions = styled.div`
    padding-bottom: 3%;
    border-bottom: #444a44 solid 2px;
    font-size: 1.1rem;
    letter-spacing: 0.01rem;

    p {
        color: #fafaf1;
        text-align: left;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
        letter-spacing: 0.02rem;
        font-size: 1rem;
    }
`

export const InfoInput = styled.input`
    border-radius: 10px;
    font-size: 1.1rem;
    background-color: #fafaf1;
    padding: 0.1rem 0.3rem;
`

export const InfoForm = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Condensed', sans-serif;
    width: 50%;
    background-color: #767f76;
    color: black;
    padding: 5%;
    height: 100%;

    button{
        margin-top: 2rem;
        width: 50%;
    }
`