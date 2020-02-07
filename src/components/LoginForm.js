import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router';

//Formik
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

//styles
import styled from "styled-components";
import { message } from 'antd';

const LoginContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: black;
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

const LoginLabels = styled.p`
color: white;
margin-top: 4%;
margin-bottom: 1%;
`

const LoginHeader = styled.h1`
color: white;
margin-top: 3%;
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

const Error = styled.p`
color:red;
`

function LoginForm({values, errors, touched, status}) {
  
  const [user, setUser]= useState([])

  const success = () => {
    const hide = message.loading('Logging in...', 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
  };

  useEffect ( () => {
  console.log('status', status)
  status && setUser(users =>[...users, status])
  },[status])

  return (
    <div className="LoginForm">
      <LoginHeader>Login </LoginHeader>
        <LoginContainer>
        <Form>
            <div className="user-username">
              <LoginLabels>
              <label htmlFor="user_username">Username: </label>
              </LoginLabels>
              <Field
                type="text"
                name="username"
                placeholder="Enter Your Username"
              />
                {touched.username && errors.username && (
                  <Error className="errors"> {errors.username}</Error>
              )}
            {/* <ErrorMessage name="username" component="div" className="error"/> */}
            </div>

            <div className="user-password">
              <LoginLabels>
              <label htmlFor="user_password">Password: </label>
              </LoginLabels>
              <Field
                type="password"
                name="password"
                placeholder="Enter Your Password"
              />
                {touched.password && errors.password && (
                  <Error className="errors"> {errors.password}</Error>
                )}
            {/* <ErrorMessage name="password" component="div" className="error"/> */}
            </div>

          <LoginButton type="submit" onClick={success}>Submit</LoginButton>
          
          <SignUp> Don't have an account? 
            <Link to="/signup" style={{color: "#1497AB", textDecoration: "underline", }}> Sign-Up</Link>
          </SignUp>
          
        </Form>
        
        </LoginContainer>
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
          localStorage.setItem("token", response.data.token)
          // const { id } = useParams()
          // props.history.push(`/dashboard/${id}`)
          props.history.push(`/dashboard`)

      })
      .catch(err => console.log(err.response));
}
})(LoginForm);

export default FormikLoginForm