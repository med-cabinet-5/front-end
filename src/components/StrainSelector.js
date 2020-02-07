//dependencies & hooks
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//components
import CardModal from "./CardModal"

//actions
import { saveStrain } from "../actions";
// import { fetchRecs, fetchStats,} from "../actions"

//contexts
//user, results, savedstrain

//styles
import styled from "styled-components";

const SelectorButton = styled.button`
margin: 5%;
width: 35%;
background-color: #323232;
color: white;
text-decoration: none;
padding: 1%;
border-radius: 8px;
`

const SelectorContainer = styled.div`
margin-top: 5%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
justify-content: center;
`

const SelectorBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #918383;
min-height: 500px;
max-width: 400px;
min-width: 400px;
`

const StrainInfo = styled.div`
display: flex;
flex-direction: column;
`

const Not = styled.div`
border-top: #323232 solid 2px;
`

const UserInfo = styled.div`
display: flex;
`

//.get request of top five strains returned from DS Kingdom
//.post to backend to save strains






function StrainSelector() {
    
    // useEffect() fetchRecs, fetchStats

    return (
    <SelectorContainer>
    < SelectorBody>
    <h2>Here are the recommended strains for (name!)</h2>

    <StrainInfo>
        <p>
            <CardModal />
        </p>
        
    </StrainInfo>

    <UserInfo>
        <h2>Additional Information:</h2>
        <p>Stats</p>
    </UserInfo >

    <Not>
        <p>
            Not finding what you're looking for?
        </p>
        <SelectorButton> 
        <Link to="/infoform" style={{color: "#1497AB", textDecoration: "underline", }}>
        Go Back
        </Link>
        </SelectorButton> 
    </Not>
    </SelectorBody>
    </SelectorContainer>
)};

export default StrainSelector;