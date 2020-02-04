import React, {useState, useEffect} from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'

function SignupForm({values, errors, touched, status}){
const [state, setState]= useState([])

useEffect (()=>{
console.log('status', status)
status && setState(state =>[...state, status])

},[status])


return(
<div>
<Form>
<label>
    Name
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
<Field
type='email'
name='email'
placeholder='Email'
/>
{touched.email && errors.email && (
<p className='errors'>{errors.email}</p>
)}
</label>
<label>
    <Field
    type='text'
    name='username'
    placeholder='Username'
    />
</label>
<label>
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
return{
first_name: first_name || '',
last_name: last_name || '',
email: email || '',
username: username || '',
password: password || ''
}
},

validationSchema: Yup.object().shape({
    fist_name: Yup.string().min(2, 'Name must be 2 character').required('Required Field'),
    last_name: Yup.string().min(2, 'Name must be 2 character').required('Required Field'),
    email: Yup.string().email('Email not valid').required('Required Field'),
    username: Yup.string().min(4, 'Username must be 4 characters').required('Required Field'),
    password: Yup.string().min(6, 'Password must be 6 characters').required('Required Field'),

})


})   


export default FormikSignupForm