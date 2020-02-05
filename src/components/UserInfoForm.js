import React, { useState } from 'react';

//utils
import { axiosWithAuth } from '../utils/'

//styling
import styled from "styled-components";
const InfoBody = styled.div`
margin: 5%;
color: white;
`

const InfoForm = styled.form`
display: flex;
flex-direction: column;
width: 50%;
border-top: 2px solid #323232;
background-color: #918383;
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
            feeling: '',
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

    const addUserInfo = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('endpoint', newUserInfo)
        .then(res => {
            console.log('success', res);
            localStorage.setItem( newUserInfo, res.data.payload );
            props.history.push('/dashboard/');
        })
        .catch(err => console.log(err));
    };

        return (
            <InfoBody >
                <h2>User Information</h2>
                <InfoForm onSubmit={addUserInfo}>
                <p>Ailments:</p>
                <input
                    type="text"
                    name="ailments"
                    placeholder="Tell us what is bothering you"
                    // value={ailments}
                    onChange={handleChange}
                />
                <p>Feelings:</p>
                <input
                    type="text"
                    name="feelings"
                    placeholder="Tell us what you're hoping to feel"
                    // value={feelings}
                    onChange={handleChange}
                />
                <p>Preferred Taste:</p>
                <input
                    type="text"
                    name="taste"
                    placeholder="Tell us if you have any preferences of taste"
                    // value={taste}
                    onChange={handleChange}
                />
                <InfoButton> Submit </InfoButton>
                </InfoForm>
            </InfoBody>
            );
    };
    
    export default UserInfoForm;