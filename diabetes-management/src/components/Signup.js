import React, { useState, useEffect } from "react"; 
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Field, withFormik } from "formik"; 

 const SignUp = ({ errors, touched, values, status }) => {

    const [newUsers, setNewUsers] = useState([]);

    useEffect(() => {
        if (status) {  
            console.log(status);           
            setNewUsers([...newUsers, status]);
        }        
    }, [status]);

    
 return(
    <div className='user-form'> 
    <h1>User</h1>
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


const FormikUserSignUpForm = withFormik({
    mapPropsToValues({ username, email, password, tos}) {
        return {
            username: username || '',
            password: password || '',
            tos: tos || true
        };
    },

    validationSchema: Yup.object().shape({
    username: Yup.string().required("Fill in the blank"),
    password: Yup.string().required("Fill in the blank") 
    }),    



handleSubmit(values, { resetForm , props, setStatus }) {
        axios
        .post("https://diabetesmanager.herokuapp.com/api/users/register", values)
        .then(res => {
            console.log(res);
            setStatus(res.data); 
            props.history.push("/login")
            resetForm(); 
        })    
        .catch(error => {
            console.log("ERROR", error);
        }); 
}
})(SignUp);



export default FormikUserSignUpForm;

















