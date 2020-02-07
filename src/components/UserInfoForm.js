import React, { useState } from 'react';
import axios from 'axios'

//styling
import styled from "styled-components";
import { } from "antd";

const InfoBody = styled.div`
margin: 5%;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const InfoHeader = styled.h1`
color: white
`

const InfoLabels = styled.p`
color: white;
text-align: left;
margin-top: 7%;
margin-bottom: 1%;
`
const InfoInstructions = styled.div`
padding-bottom: 3%;
border-bottom: #323232 solid 2px;
`

const InfoForm = styled.form`
display: flex;
flex-direction: column;
width: 50%;
border-top: 2px solid #323232;
background-color: #918383;
color: black;
padding: 5%;
`

const InfoButton = styled.button`
margin: 5%;
width: 35%;
background-color: #323232;
color: white;
padding: 1%;
border-radius: 8px;
`

    const UserInfoForm = props => {
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

    const addUserInfo = async e => {
        e.preventDefault();
        const joinedInput = { 
            "USER_INPUT_STRING": `${newUserInfo.ailments} ${newUserInfo.feelings} ${newUserInfo.taste}`
        }
        try {
            const strains = await axios.post('https://med-cab-ds.herokuapp.com/json', JSON.stringify(joinedInput));
            const stats = await axios.post('https://med-cab-ds.herokuapp.com/stats', JSON.stringify(joinedInput));
            //set results to context to use as {strains, stats} dispatch
            props.history.push('dashboard')
        } catch (e) {
            console.log(e.message)
        };
    }

        return (
            <InfoBody >
                <InfoForm onSubmit={addUserInfo}>
                <InfoHeader>User Information</InfoHeader>
                    <InfoInstructions>
                        <InfoLabels>
                            We'll need to get some information from you about the ailments you're experiencing, your desired effects, and what your preferences for taste are. This will help us give you better recommendations based on the information you provide.
                        </InfoLabels>
                    </InfoInstructions>

                <InfoLabels>Ailments:</InfoLabels>
                <input
                    type="text"
                    name="ailments"
                    placeholder="Tell us more about what is bothering you"
                    value={newUserInfo.ailments}
                    onChange={handleChange}
                />
                <InfoLabels>Feelings:</InfoLabels>
                <input
                    type="text"
                    name="feelings"
                    placeholder="Tell us what effects you're hoping to experience"
                    value={newUserInfo.feelings}
                    onChange={handleChange}
                />
                <InfoLabels>Preferred Taste:</InfoLabels>
                <input
                    type="text"
                    name="taste"
                    placeholder="Tell us if you have any preferences of taste"
                    value={newUserInfo.taste}
                    onChange={handleChange}
                />
                <InfoButton> Submit </InfoButton>
                </InfoForm>
            </InfoBody>
        );
    };
    
    export default UserInfoForm;