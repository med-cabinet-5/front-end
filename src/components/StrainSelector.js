//dependencies & hooks
import React, { useEffect, useContext }from "react";
import axios from 'axios';
import { useParams } from 'react-router'
import { StrainResultsContext } from '../contexts/StrainResultsContext'
import { StatsResultsContext } from '../contexts/StatsResultsContext'


//components
import StrainCard from './StrainCard'
import Sidebar from './DashboardSideBar'

import { DashboardContainer, DashboardBody, CardContainer, AppBody } from '../styles'


function StrainSelector() {
    const { id } = useParams()

    const [ strainData ] = useContext(StrainResultsContext)    
    console.log('strains', strainData)

    const [ statsData ] = useContext(StatsResultsContext)
    console.log('stats', statsData)

    return (
        <AppBody>
        <DashboardContainer>
            <Sidebar />
            <DashboardBody>

            <CardContainer>
            {strainData.map((data, index) => (
                <StrainCard 
                    key = {index}
                    name = {data.strain}
                    ailments = {data.ailments}
                    flavor = {data.flavor}
                    effects = {data.effects}
                    type = {data.type}
                    description = {data.description}
                />
            )
            )}
            </CardContainer>
            </DashboardBody>

        </DashboardContainer>
        </AppBody>
)};

export default StrainSelector;