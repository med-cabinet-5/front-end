//landing from front-end dev/marketing page
import React from 'react';
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


function SavedStrains () {
    return(
    <SavedContainer>
    <SavedBody>
        <h3>Saved Strains!</h3>

    </SavedBody>
    </SavedContainer>
    )
};

export default SavedStrains