import React, { useState, useContext } from 'react';
import { useParams } from 'react-router';
import axios from 'axios'

//contexts
import { StrainResultsContext }  from "../contexts/StrainResultsContext";
import { StatsResultsContext }  from "../contexts/StatsResultsContext";

//styling
import { InfoHeader, InfoLabels, InfoInstructions, InfoForm, InfoInput, ButtonPrimary, DashboardContainer, DashboardBody, AppBody } from '../styles' 
import { message } from 'antd';
import Sidebar from './DashboardSideBar'


const UserInfoForm = props => {
        const { id } = useParams()
        const [ strainData, setStrainData ] = useContext(StrainResultsContext)
        const [ statsData, setStatsData ] = useContext(StatsResultsContext)

        const [newUserInfo, setNewUserInfo] = useState({
            ailments: '',
            feelings: '',
            taste: '',
        });
        
        const handleChange = e => {
            setNewUserInfo(
                {
                    ...newUserInfo,
                    [e.target.name]: e.target.value
                }
            );
        };
    
        const success = () => {
            const hide = message.loading('Submitting Your Responses...', 0);
            // Dismiss manually and asynchronously
            setTimeout(hide, 2000);
        };

        const addUserInfo = async e => {
            e.preventDefault();
            const joinedInput = { 
                "USER_INPUT_STRING": `${newUserInfo.ailments} ${newUserInfo.feelings} ${newUserInfo.taste}`
            }

            try {   
                const strains = await axios.post('https://med-nlp.herokuapp.com/json', JSON.stringify(joinedInput));
                const stats = await axios.post('https://med-nlp.herokuapp.com/stats', JSON.stringify(joinedInput));
                setStrainData(strains.data)
                setStatsData(stats.data)
                props.history.push(`/dashboard/${id}/recommendations`)
            } catch (e) {
                console.log(e.message)
            };
        }

        return (
            <AppBody>
            <DashboardContainer>
                <Sidebar /> 

                <DashboardBody>

                <InfoForm onSubmit={addUserInfo}>
                <InfoHeader>Preferences Information</InfoHeader>
                    <InfoInstructions>
                        <p>
                        We'll need to get some information from you about the ailments you're experiencing, your desired effects, and what your preferences for taste are. This will help us give you better recommendations based on the information you provide.
                        </p>
                    </InfoInstructions>
                
                <div className="inputs">
                <InfoLabels>Ailments:</InfoLabels>
                <InfoInput
                    type="text"
                    name="ailments"
                    placeholder=" Tell us more about what is bothering you"
                    value={newUserInfo.ailments}
                    onChange={handleChange}
                />
                <InfoLabels>Feelings:</InfoLabels>
                <InfoInput
                    type="text"
                    name="feelings"
                    placeholder=" Tell us what effects you're hoping to experience"
                    value={newUserInfo.feelings}
                    onChange={handleChange}
                />
                <InfoLabels>Preferred Taste:</InfoLabels>
                <InfoInput
                    type="text"
                    name="taste"
                    placeholder=" Tell us if you have any preferences of taste"
                    value={newUserInfo.taste}
                    onChange={handleChange}
                />

                </div>
                <div>
                    <ButtonPrimary onClick={success}> Submit </ButtonPrimary>
                </div>
                </InfoForm>

                </DashboardBody>
            </DashboardContainer>
            </AppBody>
            
        );
    };
    
    export default UserInfoForm;