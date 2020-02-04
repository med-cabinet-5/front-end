import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import styled from "styled-components";

const FormContainerDiv = styled.div`
display: flex;
flex-direction: column;
`;

function LoginForm() {

  const [credentials, setCredentials] = useState({username:'', password:''})

  const handleChange = e => {
      setCredentials(
          {
              ...credentials,
              [e.target.name]: e.target.value
          }
      );
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
    .post('https://med-cabinet-server.herokuapp.com/api/auth/login', credentials)
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/userinfo/:id');
    })
    .catch(err => console.log(err));
};
  


  return (
    <div className="LoginForm">
      <h1>Login Form</h1>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialState}
        validationSchema={validationSchema}
      >
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

          <div className="user_remember_pass">
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
      </Formik>
    </div>
    
  );
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Please enter a username'),
  password: Yup.string().required('Please enter a password'),
  remember_pass: Yup.boolean()
});

const initialState = {
  username: '',
  password: '',
  remember_pass: false
}

export default FormikLoginForm