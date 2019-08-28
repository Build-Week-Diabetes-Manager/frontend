import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {
  const [users, setUsers] = useState([]);
console.log(users)
  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
      <>
     
    <div className="user-form">
      <h1>Login</h1>
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}

        

        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">Login In!</button>
      </Form>
      
    </div>

    </>
  );
};


const FormikUserFormLogin =  withFormik({
  mapPropsToValues({ username, password, tos }) {
    return {
      tos: tos || false,
      password: password || '',
      username: username || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter your username'),
    password: Yup.string().required('Please enter a password')
  }),

  handleSubmit(values, { props, setStatus }) {
    console.log(values)
    axios
      .post('https://diabetesmanager.herokuapp.com/api/users/login', values)
      .then(res => {
        setStatus(res.data);
        props.history.push("/dashboard")
        console.log(res.data)
      })
      .catch(err => console.log(err.response));
  }
})(UserForm);

export default FormikUserFormLogin;
