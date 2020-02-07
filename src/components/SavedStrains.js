//landing from front-end dev/marketing page
import React from 'react';

//components
import CardModal from "./CardModal"

//actions


//styles
import styled from "styled-components"


const SavedContainer = styled.div`
margin-top: 5%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
justify-content: center;
`

const SavedBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #918383;
min-height: 500px;
max-width: 400px;
min-width: 400px;
`

//.get to retrieve saved strains, display cards with saved strain info

function SavedStrains () {
    return(
    <SavedContainer>
    <SavedBody>
        <h3>Saved Strains!</h3>
        <p> display card modal of saved strains </p>
    </SavedBody>
    </SavedContainer>
    )
};

export default SavedStrains