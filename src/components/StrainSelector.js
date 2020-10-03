//dependencies & hooks
import React, { useEffect, useContext }from "react";
import axios from 'axios';
import { useParams } from 'react-router'


import { ResultsContext } from '../contexts/ResultsContext'
import StrainCard from './StrainCard'

//components
import CardModal from "./CardModal"

import { DashboardContainer, DashboardBody, AppBody } from '../styles'
import Sidebar from './DashboardSideBar'

//.get request of top five strains returned from DS Kingdom


const { id } = useParams()
//function to set as onclick to .post to backend to save strains
    {
        axios
            .post(`https://med-cabinet-server.herokuapp.com/api/savedstrains/user/${id}`)
            .then(response => {

            })
            .catch(err => {

            })
    }

function StrainSelector() {

    return (
        <AppBody>
        <DashboardContainer>
            <Sidebar />
        <DashboardBody>
        {/* {array.map((data) => (
            <StrainCard 
                {data.something}
            />
        )} */}

        </DashboardBody>

        </DashboardContainer>
        </AppBody>
)};

export default StrainSelector;