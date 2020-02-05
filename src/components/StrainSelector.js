import React from "react";
import StrainDetailCard from "./StrainDetailCard";
import StrainMiniCard from "./StrainMiniCard";

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
`

//.get request of top five strains returned from DS Kingdom
//.post to backend to save strains

function StrainSelector() {
    return (
    <SelectorContainer>

    < SelectorBody>
    <h2>Here are the recommended strains for (name!)</h2>
    
    <StrainInfo>
        <p>
            Display Mini Cards
        </p>
        <StrainMiniCard />
        <p>
            Pop-Up <StrainDetailCard /> onclick of MiniCard
        </p>
    </StrainInfo>

    </SelectorBody>


    <div>
        <p>
            Not finding what you're looking for?
        </p>
        
    <SelectorButton> Return to Data Collection </SelectorButton> 
    </div>
    
    </SelectorContainer>
)};

export default StrainSelector;