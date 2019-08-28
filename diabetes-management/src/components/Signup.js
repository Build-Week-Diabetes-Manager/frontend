import React, { useState, useEffect } from "react"; 
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Field, withFormik } from "formik"; 

 const SignUp = ({ errors, touched, values, status }) => {

    const [newUsers, setNewUsers] = useState({});

    useEffect(() => {
        if (status) {     
            setNewUsers([...newUsers, status]);
        }        
    }, [newUsers]);

 return(
    <div className='user-form'> 
    <h1> Make an Account </h1>
    <Form>
    <Field type="text" name="username" placeholder="Username" />
    {touched.username && errors.username && (
        <p className="error">{errors.username}</p>
    )}

    <Field type="password" name="password" placeholder="Password" />
    {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

    <button type='submit'>Sign Up</button>
     
    </Form> 
    </div>
 )   
}


const FormikUserFormSignup = withFormik({ 
    mapPropsToValues({ username, password, tos}) {
        return {
            username: username || '',
            password: password || '',
            tos: true 
        };
    },

    validationSchema: Yup.object().shape({
    username: Yup.string().required("Please Fill in the blank"),
    password: Yup.string().required("Please Fill in the blank") 
    }),    



handleSubmit(values, { resetForm , props, setStatus }) {
    console.log(values)
        axios
        .post("https://diabetesmanager.herokuapp.com/api/users/register", {username: values.username, password: values.password})
        .then(res => {
            console.log(res)
            setStatus(res.data); 
            props.history.push("/login")
            resetForm(); 
        })    
        .catch(error => {
            console.log("ERROR", error);
        });
       
}
})(SignUp);

export default FormikUserFormSignup;

















