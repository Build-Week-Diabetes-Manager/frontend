import React, { useState, useEffect, useContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import axios from 'axios';
import * as Yup from 'yup';
import { Form, Field, withFormik } from 'formik';

// Styling
import '../App.scss';

const UserForm = ({ errors, touched, values, handleSubmit, status }) => {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState();
  const [isRegistered, setIsRegistered] =useState(false);
  console.log("LOGIN Users: ", users, "USERID: ", userId, "isRegistered: ", isRegistered);
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
        <button className="submit-btn" type="submit">Login!</button>
      </Form>
      <button className="switch-route"><Link className="route-link" to="/SignUp"> Don't have an account? Click here to sign up.</Link> </button>
    </div>

    </>
  );
};


const Login = withFormik({

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
  

  handleSubmit(values, { props, setUserId }) {
    
    axios
      .post('https://diabetesmanager.herokuapp.com/api/users/login', values)
      .then(res => {
        console.log("this is my res", res)
        localStorage.setItem("user_id", res.data.userId)
        localStorage.setItem("token", res.data.token)
        props.history.push("/dashboard")
      })
      .catch(err => console.log(err.response));
  }
})(UserForm);

export default Login;

