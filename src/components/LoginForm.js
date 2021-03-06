import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext' 

//Formik
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

//styles
import { message } from 'antd';
import Nav from './Nav';
import { LandingBody, ButtonPrimary, Error, LoginLabels, SignupLoginHeader, SignupLoginContainer, Columns, SignUp } from '../styles' 

function LoginForm({values, errors, touched, status}) {

  const [user, setUser] = useContext(UserContext)
  
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
      <Nav />
      <SignupLoginContainer>
      <LandingBody>
      <SignupLoginHeader>Login </SignupLoginHeader>
        
        <Form>
        <Columns>
          <LoginLabels htmlFor="user_username">Username: </LoginLabels>
          <Field
            type="text"
            name="username"
            placeholder="Enter username"
            style={{
              borderRadius: '8px',
              padding: '0.1rem 0.5rem',
              width: '100%',
              border: 'solid 1px #444a44'
            }}
          />
            {touched.username && errors.username && (
              <Error className="errors"> {errors.username}</Error>
            )}
        
          </Columns>
          <Columns>
          <LoginLabels htmlFor="user_password">Password: </LoginLabels>
          <Field
            type="password"
            name="password"
            placeholder="Enter password"
            style={{
              borderRadius: '8px',
              padding: '0.1rem 0.5rem',
              width: '100%',
              border: 'solid 1px #444a44',
              marginBottom: '1.5rem'
            }}
            />
              {touched.password && errors.password && (
                <Error className="errors"> {errors.password}</Error>
              )}
          </Columns>

          <ButtonPrimary type="submit" onClick={success}>Submit</ButtonPrimary>
        </Form>


        <SignUp> Don't have an account? 
            <Link to="/signup" style={{color: "#444a44", textDecoration: "underline", }}> Sign-Up</Link>
        </SignUp>
        </LandingBody>

        </SignupLoginContainer>
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
          console.log('Login handleSubmit', response);
          setStatus(response.data);
          localStorage.setItem("token", response.data.token)
          props.history.push(`/dashboard/${response.data.user.id}/info`)
      })
      .catch(err => console.log(err.response));
}
})(LoginForm);

export default FormikLoginForm