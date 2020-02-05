import React from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from "styled-components";

const FormContainerDiv = styled.div `
display: flex;
flex-direction: column;
`;

export default function LoginForm() {
  function handleSubmit(values, actions) {
    console.log(values);

  axios
      .post('https://reqres.in/api/users/', values)
      .then(res => {
        console.log(res.data);
        actions.resetForm();
      })
      .catch(e => console.log(e)) 
  }
  return (
    <div className="LoginForm">
      <h1>Login Form</h1>
          <FormContainerDiv>
        <Form>
        
          <div className="user-username">
          <label htmlFor="user_username">Username</label>
          <Field
            type="text"
            id="user_username"
            name="username"
            placeholder="Enter your username here"
          />
          <ErrorMessage name="username" component="div" className="error"/>
          </div>
          <div className="user-password">
          <label htmlFor="user_password">Password</label>
          <Field
            type="password"
            id="user_password"
            name="password"
            placeholder="Enter your password here"
          />
          <ErrorMessage name="password" component="div" className="error"/>
          </div>
          <div className="user_emember_pass">
          <label htmlFor="user_remember_pass">Remember password?</label>
          <Field
            type="checkbox"
            id="user_remember_pass"
            name="remember_pass"
          />
          <ErrorMessage name="remember_pass" component="div" className="error"/>
          </div>
          <button type="submit">Submit</button>
        </Form>
        </FormContainerDiv>
      
    </div>
    
  );
}

const validationSchema = Yup.object().shape({
  first_name: Yup.string().required('Please enter your first name'),
  last_name: Yup.string().required('Please enter your lastname name'),
  username: Yup.string().required('Please enter a username'),
  password: Yup.string().required('Please enter a password'),
  remember_pass: Yup.boolean()
});

const initialState = {
  first_name: '',
  last_name: '',
  username: '',
  password: '',
  remember_pass: false
}