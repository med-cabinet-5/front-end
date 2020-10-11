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
    background-color: rgb(245, 245, 245, 1);
    min-height: 550px;
    max-width: 350px;
    min-width: 350px;
    border-radius: 36px;
    font-family: 'Roboto Condensed', sans-serif;
    margin: 0.75rem 0 0;

    @media(max-width: 700px){
        margin: 0.5rem 0 1.65rem;
    }
`

export const ButtonPrimary = styled.button`
    margin-bottom: 1rem;
    background-color: #334733;
    color: #fafaf1;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 10px;
    min-width: 40%;
    box-shadow: 3px 3px 3px 0 rgba(51, 71, 51, 0.4);
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
    color: #334733;
`

export const SignupLabels = styled.p`
    color: 334733;
    margin-top: 0.5rem;
    margin-bottom: 1%;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
`

export const LoginLabels = styled.label`
    color: #334733;
    margin-top: 4%;
    margin-bottom: 1%;
    text-transform: uppercase;
    text-align: left;
    width: 100%;
`

export const SignupLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0 0;

    @media(max-width: 700px){
        padding: 0.75rem 0 0;
    }
`

export const SignupLoginHeader = styled.h1`
    color: #334733;
    margin-top: 3rem;
`


// dashboard styles
export const DashboardContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    height: 90vh;
    border-radius: 30px;

    @media(max-width: 1050px){
        margin-top: 3rem;
        width: 95%;
    }

    @media(max-width: 700px){
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
    background-color: #EAEBEA;
    width: 100%;
`

export const DashboardSideBar = styled.div`
    background-color: #334733;
    width: 25%;
    min-width: 210px;
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
        
        h3 {
            color: #F5F5F5;
            font-family: 'Abril Fatface', cursive;
            font-size: 2rem;
            letter-spacing: 0.1rem;
            text-transform: capitalize;
        }

        p {
            color: #F5F5F5;
            font-family: 'Abril Fatface', cursive;
            font-size: 2rem;
            letter-spacing: 0.1rem;
            text-transform: capitalize;
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
        color: #F5F5F5;
        display: flex;
        justify-content: flex-start;
        align-items: center; 
        width: 100%;
        padding-left: 0.75rem;

        @media(max-width: 1300px){
            padding-left: 0.5rem;
            font-size: 1.2rem;
        }

        @media(max-width: 1050px){
            padding-left: 0.25rem;
        }
    
        @media(max-width: 700px){
            padding-left: 0.1rem;
            font-size: 1.1rem;
        }
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
    color: #334733;
    background-color: #F5F5F5;
    border-radius: 10px;
    padding: 0.3rem 1.5rem;
    width: 8.5rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
`

// info form styling
export const InfoHeader = styled.h1`
    color: #334733;
    font-weight: 900;
    letter-spacing: 0.1rem;
`

export const InfoLabels = styled.p`
    color: #334733;
    text-align: left;
    margin-top: 7%;
    margin-bottom: 1%;
    letter-spacing: 0.02rem;
    font-size: 1rem;
    text-transform: uppercase;
`

export const InfoInstructions = styled.div`
    padding-bottom: 3%;
    border-bottom: #334733 solid 2px;
    font-size: 1.1rem;
    letter-spacing: 0.01rem;

    p {
        color: #334733;
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
    background-color: #F5F5F5;
    padding: 0.1rem 0.3rem;
    border: solid 1px #334733;
    width: 100%;
    margin-bottom: 1rem;

    @media(max-width: 1050px){
        padding: 0rem 0.1rem;
    }

    @media(max-width: 700px){

    }
`

export const InfoForm = styled.form`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto Condensed', sans-serif;
    width: 55%;
    background-color: #EAEBEA;
    color: #334733;
    padding: 5%;
    height: 100%;

    @media(max-width: 1050px){
        width: 75%;
    }

    @media(max-width: 700px){
        width: 80%;
    }

    button {
        margin-top: 2rem;
        width: 55%;
    }

    .inputs {
        width: 100%;
        margin-bottom: 3rem;
    }
`

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1.5rem;
    column-gap: 2rem;
    height: 95%; 
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
    padding: 0 2rem;

    @media(max-width: 1500px){
        width: 100%;
        grid-gap: 1rem;
        padding: 0 1.5rem;
    }

    @media(max-width: 1075px){
        grid-template-columns: 1fr 1fr;
        grid-gap: 0.75rem;
        padding: 0 0.75rem;
    }

    @media(max-width: 700px){
        grid-template-columns: 1fr;
        grid-gap: 0.5rem;
        padding: 0 0.5rem;
    }
`

export const StrainCardContainer = styled.div`
    background-color: #F5F5F5;
    color:  #334733;
    font-family: 'Roboto Condensed', sans-serif;
    border-radius: 20px;
    height: 22.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(51, 71, 51, 0.2);
`

export const StatsCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1, h4, h5, p {
        color: #334733;
        font-family: 'Roboto Condensed', sans-serif;
    }

    h1 {
        font-weight: 900;
        letter-spacing: 0.1rem;
        line-height: 1.9rem;
        margin: 0 0 0.5rem;
    }

    h4 {
        font-weight: 800;
        text-align: left;
        width: 30%;
        line-height: 1.1rem;
    }

    h5 {
        margin: 1.5rem 0;
        padding: 0;
        font-size: 1.1rem;
        line-height: 1.1rem;
    }

    p {
        text-align: left;
        width: 65%;
        line-height: 1.1rem;
    }

    div {
        display: flex;
        margin-bottom: 0.2rem;
    }

    .content {
        width: 90%;
        display: flex;
        flex-direction: column;
    }
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #334733;
    padding: 0.5rem 0.25rem;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    width: 100%;

    div {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        img {
            width: 60px;
        }
    }

    h3 {
        color: #F5F5F5;
        font-weight: 800;
        font-size: 1.3rem;
        margin: auto 0;
    }

    button {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #334733;
        color: #F5F5F5;

        img {
            width: 60px;
        }
    }
`

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 92%;
    height: 100%;
    margin: 0.75rem 0 0.5rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }

    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;

        div {
            margin-bottom: 0.2rem;
        }
    }

    .percent {
        display: flex;
        flex-direction: column;
        width: 100%;

        p {
            width: 100%;
            padding: 0;
            margin: 0;
        }
    }

    h4 {
        font-weight: 800;
        text-align: left;
        width: 31%;
        letter-spacing: 0.01rem;
        line-height: 0.95rem;
        padding-right: 0.1rem;
    }

    p {
        text-align: left;
        width: 69%;
        line-height: 1.1rem;
        margin-bottom: 0;
    }

    .button {
        margin-bottom: 1rem;
    }
`

export const CardButton = styled.button`
    background-color: #334733;
    color: #F5F5F5;
    border-radius: 10px;
    padding: 0.4rem 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    font-weight: 800;
`

export const ModalHeader = styled.div`
    background-color: #334733;
    display: flex;
    width: 100%;
    padding: 1.5rem;

    h1 {
        color: #f5f5f5;
        padding: 0;
        margin: 0;
    }

    div {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: auto;

        span {
            width: 50px;
            height: 50px;
        }
    }

    button {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #334733;
        color: #F5F5F5;

        img {
            width: 60px;
        }
    }
`

export const ModalContent = styled.div`
    width: 100%;
    padding: 1.5rem;
    color: #334733;
`