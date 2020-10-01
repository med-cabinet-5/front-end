//dependencies & hooks
import React, { useEffect, useContext }from "react";
import { Link } from "react-router-dom";

import { ResultsContext } from '../contexts/ResultsContext'
import StrainCard from './StrainCard'

//components
import CardModal from "./CardModal"

import { DashboardContainer, DashboardBody, AppBody } from '../styles'
import Sidebar from './DashboardSideBar'

//.get request of top five strains returned from DS Kingdom
//.post to backend to save strains


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