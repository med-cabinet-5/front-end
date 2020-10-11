//landing from front-end dev/marketing page
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

import axios from 'axios'

//components

import Sidebar from './DashboardSideBar'



//styles
import { AppBody, DashboardContainer, DashboardBody, StrainCardContainer, CardContainer } from '../styles'


// display cards with saved strain info

function SavedStrains () {
    const { id } = useParams()
    const [savedStrains, setSavedStrains ] = useState([])

    useEffect(() => {
        axios
            .get(`https://med-cabinet-server.herokuapp.com/api/savedstrains/user/${id}`)
            .then((res) => {
                setSavedStrains(res.data);
            })
            .catch((err) => console.log(err));
    }, [id]);
    
    return(
        <AppBody>
            <DashboardContainer>
                <Sidebar /> 

                <DashboardBody>

                <h3>Saved Strains!</h3>
                <p> display card modal of saved strains </p>

                <CardContainer>

                </CardContainer>

                </DashboardBody>
            </DashboardContainer>
        </AppBody>
    )
};

export default SavedStrains