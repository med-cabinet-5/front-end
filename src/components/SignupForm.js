import React, { useEffect, useContext } from 'react';
import axios from "axios";

import { UserContext } from '../contexts/UserContext';
import { Link } from "react-router-dom";


//Formik
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

//styles
import { message } from 'antd';
import Nav from './Nav'
import { LandingBody, Error, SignupLoginHeader, Columns, SignupLabels, SignupLoginContainer, ButtonPrimary, SignUp } from '../styles'


function SignupForm({values, errors, touched, status}){

    const [ user, setUser ] = useContext(UserContext)

    const success = () => {
        const hide = message.loading('Signing In...', 0);
        // Dismiss manually and asynchronously
        setTimeout(hide, 2700);
    };

    useEffect (()=>{
    console.log('status', status)
    status && setUser(users =>[...users, status])
    },[status, setUser])

return(
    <div>

    <Nav />
    
    <SignupLoginContainer>
        <LandingBody>
        <SignupLoginHeader>Sign-Up</SignupLoginHeader>
            
                <Form>
                <Columns>
                <SignupLabels>
                    First Name: 
                    </SignupLabels>
                <Field
                    type='text'
                    name='first_name'
                    placeholder='First Name'
                    style={{
                        borderRadius: '8px',
                        padding: '0.1rem 0.5rem',
                        width: '100%',
                        border: 'solid 1px #444a44'
                    }}
                />
                {touched.first_name && errors.first_name && (
                <Error className='errors'>{errors.first_name}</Error>
                )}
                
                </Columns>
                
                <Columns>
                <SignupLabels>
                    Last Name: 
                    </SignupLabels>
                <Field
                    type='text' 
                    name='last_name'
                    placeholder='Last Name'
                    style={{
                        borderRadius: '8px',
                        padding: '0.1rem 0.5rem',
                        width: '100%',
                        border: 'solid 1px #444a44'
                    }}
                />
                {touched.last_name && errors.last_name && (
                <Error className='errors'>{errors.last_name}</Error>
                )}
                
                </Columns>

                <Columns>
                <SignupLabels>
                    E-mail: 
                    </SignupLabels>
                <Field
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    style={{
                        borderRadius: '8px',
                        padding: '0.1rem 0.5rem',
                        width: '100%',
                        border: 'solid 1px #444a44'
                    }}
                />
                {touched.email && errors.email && (
                <Error className='errors'>{errors.email}</Error>
                )}
                
                </Columns>
                
                <Columns>
                <SignupLabels>
                    Username: 
                    </SignupLabels>
                <Field
                    type='text'
                    name='username'
                    placeholder='Username'
                    style={{
                        borderRadius: '8px',
                        padding: '0.1rem 0.5rem',
                        width: '100%',
                        border: 'solid 1px #444a44'
                    }}
                    />
                {touched.username && errors.username && (
                <Error className='errors'>{errors.username}</Error>
                )}
                </Columns>

                <Columns>
                <SignupLabels>
                    Password: 
                    </SignupLabels>
                <Field
                    type='password'
                    name='password'
                    placeholder='Password'
                    style={{
                        borderRadius: '8px',
                        padding: '0.1rem 0.5rem',
                        width: '100%',
                        border: 'solid 1px #444a44', 
                        marginBottom: '1.5rem'
                    }}
                />
                {touched.password && errors.password && (
                <Error className='errors'>{errors.password}</Error>
                )}
                
                </Columns>

                <ButtonPrimary type='submit' onClick={success}>Submit</ButtonPrimary>
                
                <SignUp>Already have an account? Log In 
                    <Link to="/login" style={{color: "#444a44", textDecoration: "underline", }}> Here</Link> 

                </SignUp>

            </Form>
        </LandingBody>
</SignupLoginContainer>
</div>

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
            props.history.push(`/dashboard/${response.data.user.id}/info`)
        })
            .catch(err => console.log(err.message))

    })
    .catch(err => console.log(err.response));
}
})(SignupForm);

export default FormikSignupForm