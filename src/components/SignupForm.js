import React, {useState, useEffect} from 'react';
import {withFormik, Form, Field} from 'formik';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
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
background-color: rgb(0,181,205, 0.7);
border-radius:36px;
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

const Columns = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-bottom:1%;
`
const Error = styled.p`
color:red;
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
                <Columns>
                <label>
                    First Name: 
                    </label>
                <Field
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                />
                {touched.first_name && errors.first_name && (
                <Error className='errors'>{errors.first_name}</Error>
                )}
                
                </Columns>
                
                <Columns>
                <label>
                    Last Name: 
                    </label>
                <Field
                    type='text' 
                    name='last_name'
                    placeholder='Last Name'
                />
                {touched.last_name && errors.last_name && (
                <Error className='errors'>{errors.last_name}</Error>
                )}
                
                </Columns>

                <Columns>
                <label>
                    E-mail: 
                    </label>
                <Field
                    type='email'
                    name='email'
                    placeholder='E-mail'
                />
                {touched.email && errors.email && (
                <Error className='errors'>{errors.email}</Error>
                )}
                
                </Columns>
                
                <Columns>
                <label>
                    Username: 
                    </label>
                <Field
                    type='text'
                    name='username'
                    placeholder='Username'
                    />
                {touched.username && errors.username && (
                <Error className='errors'>{errors.username}</Error>
                )}
                </Columns>

                <Columns>
                <label>
                    Password: 
                    </label>
                <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                />
                {touched.password && errors.password && (
                <Error className='errors'>{errors.password}</Error>
                )}
                
                </Columns>
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
        console.log("SignupForm 207", props)
        setStatus(response.data);
        const credentials = {
            username: values.username,
            password: values.password,
        }
        axios.post("https://med-cabinet-server.herokuapp.com/api/auth/login", credentials).then(response => {
            console.log("Response", response.data)
            localStorage.setItem("token", response.data.token)
            props.history.push('/infoform')
        })
            .catch(err => console.log(err.message))

    })
    .catch(err => console.log(err.response));
}
})(SignupForm);

export default FormikSignupForm