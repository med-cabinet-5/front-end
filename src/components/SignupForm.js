import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik'
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import axios from "axios";
import styled from "styled-components";

const SignupContainer = styled.div`
margin-top: 5%; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
justify-content: center;
`
const SignupBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #918383;
min-height: 500px;
max-width: 400px;
min-width: 400px;
`

const SignUpButton = styled.button`
margin: 5%;
width: 35%;
background-color: #323232;
color: white;
padding: 1%;
border-radius: 8px;
`

const Login = styled.p`
font-size: 0.7rem;
`


function SignupForm({values, errors, touched, status}){
    const [user, setUser]= useState([])

    useEffect (()=>{
    console.log('status', status)
    status && setUser(users =>[...users, status])
    },[status])


return(
    <SignupContainer>

        <SignupBody>
        <h1>Sign-Up</h1>
            
                <Form>
                <div>
                <label>
                    First Name: 
                <Field
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                />
                {touched.first_name && errors.first_name && (
                <p className='errors'>{errors.first_name}</p>
                )}
                </label>
                </div>
                
                <div>
                <label>
                    Last Name: 
                <Field
                    type='text' 
                    name='last_name'
                    placeholder='Last Name'
                />
                {touched.last_name && errors.last_name && (
                <p className='errors'>{errors.last_name}</p>
                )}
                </label>
                </div>

                <div>
                <label>
                    E-mail: 
                <Field
                    type='email'
                    name='email'
                    placeholder='E-mail'
                />
                {touched.email && errors.email && (
                <p className='errors'>{errors.email}</p>
                )}
                </label>
                </div>
                
                <div>
                <label>
                    Username: 
                <Field
                    type='text'
                    name='username'
                    placeholder='Username'
                    />
                </label>
                </div>

                <div>
                <label>
                    Password: 
                <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                />
                {touched.password && errors.password && (
                <p className='errors'>{errors.password}</p>
                )}
                </label>
                </div>
                <SignUpButton type='submit'>Submit!</SignUpButton>
                
                <Login>Already have an account? 
                    <Link to="/login"> Log In Here</Link>
                </Login>

            </Form>
        </SignupBody>
</SignupContainer>

)
}

const FormikSignupForm = withFormik({
mapPropsToValues({first_name, last_name, email, username, password}){
    return {
    first_name: first_name || '',
    last_name: last_name || '',
    email: email || '',
    username: username || '',
    password: password || ''
    };
},

validationSchema: Yup.object().shape({
    first_name: Yup.string().min(2, 'Name must be 2 character').required('Required Field'),
    last_name: Yup.string().min(2, 'Name must be 2 character').required('Required Field'),
    email: Yup.string().email('Email not valid').required('Required Field'),
    username: Yup.string().min(6, 'Username must be 6 characters').required('Required Field'),
    password: Yup.string().min(8, 'Password must be 8 characters').required('Required Field'),
}),

handleSubmit (values, { setStatus, props }) {
    axios
        .post("https://med-cabinet-server.herokuapp.com/api/auth/register", values)
        .then(response => {
            console.log("Sign-Up", response);
            setStatus(response.data);
            props.history.push('/infoform')
        })
        .catch(err => console.log(err.response));
}
})(SignupForm);

export default FormikSignupForm