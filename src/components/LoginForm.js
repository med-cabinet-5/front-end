import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from "styled-components";
import {Link} from 'react-router-dom'


const FormContainerDiv = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
justify-content: center;
padding: 5rem;
`

const LoginBody = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #918383;
min-height: 500px;
max-width: 400px;
min-width: 400px;
`

const LoginButton = styled.button`
margin: 5%;
width: 35%;
background-color: #323232;
color: white;
padding: 1%;
border-radius: 8px;
`

const SignUp = styled.p`
font-size: 0.7rem;
`

function LoginForm({values, errors, touched, status}) {
  
  const [user, setUser]= useState([])

  useEffect (()=>{
  console.log('status', status)
  status && setUser(users =>[...users, status])
  },[status])

  return (
    <div className="LoginForm">
      <h1>Login Form</h1>
          <FormContainerDiv>
        <Form>
          <div className="user-username">
          <label htmlFor="user_username">Username: </label>
          <Field
            type="text"
            name="username"
            placeholder="Enter your username here"
          
          />
            {touched.username && errors.username && (
              <p className="errors"> {errors.username}</p>
            )}
          <ErrorMessage name="username" component="div" className="error"/>
          </div>

          <div className="user-password">
          <label htmlFor="user_password">Password: </label>
          <Field
            type="password"
            name="password"
            placeholder="Enter your password here"
            />
              {touched.password && errors.password && (
                <p className="errors"> {errors.password}</p>
              )}
          
          <ErrorMessage name="password" component="div" className="error"/>
          </div>

          <LoginButton type="submit">Submit</LoginButton>
          
          <SignUp> Don't have an account? 
            <Link to="/signup"> Sign-Up</Link>
          </SignUp>
          
        </Form>
        
        </FormContainerDiv>
        </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password}) {
      return {
          username: username || "",
          password: password || ""  
      };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().min(6, 'Username must be 6 characters').required('Required Field'),
    password: Yup.string().min(8, 'Password must be 8 characters').required('Required Field'),
}),
handleSubmit(values, { setStatus, props }) {
  axios
      .post("https://med-cabinet-server.herokuapp.com/api/auth/login", values)
      .then(response => {
          console.log(response);
          setStatus(response.data);
          props.history.push(`/dashboard`)
      })
      .catch(err => console.log(err.response));
}
})(LoginForm);


export default FormikLoginForm