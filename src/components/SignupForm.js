import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import axios from "axios";
// import styled from "styled-components";

function SignupForm({values, errors, touched, status}){
    const [user, setUser]= useState([])

    useEffect (()=>{
    console.log('status', status)
    status && setUser(users =>[...users, status])
    },[status])


return(
    <div>
        <Form>
        <label>
        First Name:
        <br/>
        <Field
            type='text'
            name='first_name'
            placeholder='First Name'
        />
        {touched.first_name && errors.first_name && (
        <p className='errors'>{errors.first_name}</p>
        )}
        </label>

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

        <label>
            Username:
        <Field
            type='text'
            name='username'
            placeholder='Username'
            />
        </label>

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
        <button type='submit'>Submit!</button>
    </Form>
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
    username: Yup.string().min(4, 'Username must be 4 characters').required('Required Field'),
    password: Yup.string().min(6, 'Password must be 6 characters').required('Required Field'),
}),

handleSubmit (values, { setStatus, props }) {
    axios
        .post("https://med-cabinet-server.herokuapp.com/api/auth/register", values)
        .then(response => {
            console.log("Sign-Up", response);
            setStatus(response.data);
            props.history.push('/login')
        })
        .catch(err => console.log(err.response));
}
})(SignupForm);

export default FormikSignupForm