import React, { useState, useEffect, useContext} from 'react';
import {UserContext} from "../provider/UserProvider"
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../App.scss';

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {
  const [users, setUsers] = useState([]);
  const [isRegistered, setIsRegistered] =useState(false)
console.log(users)
  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  const {user, setUser} = useContext(UserContext)

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
        <button className="submit-btn" type="submit">Login!</button>
      </Form>
      <button className="switch-route"><Link className="route-link" to="/"> Don't have an account? Click here to sign up.</Link> </button>
    </div>

    </>
  );
};


const FormikUserFormLogin = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      password: password || '',
      username: username || '',
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Please enter your username'),
    password: Yup.string().required('Please enter a password')
  }),
  

  handleSubmit(values, { props, setStatus, setUser }) {
    console.log("users value",values)
    axios
      .post('https://diabetesmanager.herokuapp.com/api/users/login', values)
      .then(res => {
        console.log("this is my res", res)
        setStatus(res.data);
        props.history.push("/dashboard")
        localStorage.setItem("token", res.data.token)
        console.log(res.data)
        setUser({message: res.data.message})
      })
      .catch(err => console.log(err.response));
  }
})(UserForm);

export default FormikUserFormLogin;

