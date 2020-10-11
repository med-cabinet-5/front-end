//dependencies & hooks
import React, { useContext }from "react";
import { useParams } from 'react-router'
import { Progress } from 'antd';
import { StrainResultsContext } from '../contexts/StrainResultsContext'
import { StatsResultsContext } from '../contexts/StatsResultsContext'


//components
import StrainCard from './StrainCard'
import Sidebar from './DashboardSideBar'

import { DashboardContainer, DashboardBody, CardContainer, AppBody, StatsCard } from '../styles'


function StrainSelector() {
    const { id } = useParams()

    const [ strainData ] = useContext(StrainResultsContext)    
    console.log('strains', strainData)

    const [ statsData ] = useContext(StatsResultsContext)
    console.log('stats', statsData)

    const splitStats = statsData.proba.split("that your looking for a ", 2)
    console.log('splitStats', splitStats[0], splitStats[1])
    
    return (
        <AppBody>
        <DashboardContainer>
            <Sidebar />
            <DashboardBody>

            <CardContainer>
            
            <StatsCard>
                <h1>Recommended Strains</h1>
                
                <h5>
                    Based on your input, we've gathered the top matched statistics for the following:
                </h5>

                <div className="content">
                    <div>
                        <h4>Strain Type:</h4>
                        <p>
                            {splitStats === undefined ? "there is not a result" : `${splitStats[0]} chance that you're looking for a(n) ${splitStats[1]}`} 
                        </p>
                    </div>

                    <div>
                        <h4>Ailments Treated:</h4>
                        <p>
                            {statsData.top_ailments}
                        </p>
                    </div>
                    <div>
                        <h4>Effects:</h4>
                        <p>
                            {statsData.top_effects}
                        </p>
                    </div>
                    <div>
                        <h4>Flavors:</h4>
                        <p>
                            {statsData.top_flavors}
                        </p>
                    </div>
                </div>
            </StatsCard>

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