import React, { useState } from 'react';

//utils
import { axiosWithAuth, useWindowWidth } from '../utils/'

//images
import desktopImage from './images/-desktop.jpg';
import mobileImage from './images/-mobile.jpg';

//styling
import styled from 'styled-components';
const Body = styled.div`
margin: 5%;
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 50%;
border-top: 2px solid #282c34;
`

const Button = styled.button`
margin: 5%;
width: 35%;
background-color: #323232;
color: white;
padding: 1%;
border-radius: 8px;
`

    const UserInfoForm = props => {
        const [newUserInfo, setNewUserInfo] = useState({
            id: '',
            name: '',
            age: '',
            email:'',
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
            props.history.push('/dashboard/:id');
        })
        .catch(err => console.log(err));
    };

    //background image
    const imageUrl = useWindowWidth() >= 650 ? desktopImage : mobileImage;

        return (
            <Body style={{backgroundImage: `url(${imageUrl})` }}>
                <h2>User Information</h2>
                <Form onSubmit={addUserInfo}>
                <p>Age:</p>
                <input
                    label="age:"
                    type="number"
                    name="age"
                    placeholder="Age in Years"
                    value={props.age}
                    onChange={handleChange}
                />
                <p>Preferred Intake Method:</p>
                <input
                    label="age:"
                    type=""
                    name="intake"
                    value={props.intake}
                    onChange={handleChange}
                />
                <p>Symptoms:</p>
                <input
                    label="name"
                    type="text"
                    name="Symptoms"
                    value={props.symptoms}
                    onChange={handleChange}
                />
                <Button> Submit </Button>
                </Form>
            </Body>
            );
    };
    
    export default UserInfoForm;