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
    }, [status]);

 return(
    <div className='user-form'> 
    <h1> Make an Account </h1>
    <Form>
    <Field type="text" name="name" placeholder="Name" />
    {touched.name && errors.name && (
        <p className="error">{errors.name}</p>
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
    mapPropsToValues({ name, email, password, tos}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || true
        };
    },

    validationSchema: Yup.object().shape({
    name: Yup.string().required("Please Fill in the blank"),
    password: Yup.string().required("Please Fill in the blank") 
    }),    



handleSubmit(values, { resetForm ,setErrors, setStatus }) {
    if (values.email === 'John@Doe.com') {
        setErrors({ email: 'That email is already taken'})
    } else {
        axios
        .post("https://diabetesmanager.herokuapp.com/api/users/register", values)
        .then(res => {
            console.log(res)
            setStatus(res.data); 
            resetForm(); 
        })    
        .catch(error => {
            console.log("ERROR", error);
        });
    }   
}
})(SignUp);

export default FormikUserFormSignup;

















