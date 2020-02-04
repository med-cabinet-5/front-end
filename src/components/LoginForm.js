import React, { useState, useEffect } from 'react';
import { Form, Field, ErrorMessage, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from "styled-components";

const FormContainerDiv = styled.div`
display: flex;
flex-direction: column;
`;

function LoginForm({values, errors, touched, status}) {
  const [user, setUser]= useState([])

  useEffect (()=>{
  console.log('status', status)
  status && setUser(users =>[...users, status])
  },[status])


  return (
    <div className="LoginForm">
      <h1>Login</h1>
        <FormContainerDiv>
        <Form>
          <div className="user-username">
          <label htmlFor="user_username">Username</label>
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
          <label htmlFor="user_password">Password</label>
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

          <button type="submit">Submit</button>
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
  username: Yup.string().required('Please enter a username'),
  password: Yup.string().required('Please enter a password'),
}),
handleSubmit(values, { setStatus, props }) {
  axios
      .post("https://med-cabinet-server.herokuapp.com/api/auth/login", values)
      .then(response => {
          console.log(response);
          setStatus(response.data);
          props.history.push('/login')
      })
      .catch(err => console.log(err.response));
}
})(LoginForm);


export default FormikLoginForm