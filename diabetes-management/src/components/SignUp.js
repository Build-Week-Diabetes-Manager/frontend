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
    <Field type="text" name="name" placeholder="Name" />
    {touched.name && errors.name && (
        <p className="error">{errors.name}</p>
    )}

    <Field type="email" name="email" placeholder="Email" />
    {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

    <Field type="password" name="password" placeholder="Password" />
    {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

    <label className="checkbox-container">
          Accept Terms of Service
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
        </label>

    <button type='submit'>Submit</button>
     
    </Form> 
    </div>
 )   
}


const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, tos}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || true
        };
    },

    validationSchema: Yup.object().shape({
    name: Yup.string().required("Fill in the blank"),
    email: Yup.string().required("Fill in the blank"),
    password: Yup.string().required("Fill in the blank") 
    }),    



handleSubmit(values, { resetForm ,setErrors, setStatus }) {
    if (values.email === 'John@Doe.com') {
        setErrors({ email: 'That email is already taken'})
    } else {
        axios
        .post("", values)
        .then(res => {
            console.log(res);
            setStatus(res.data); 
            resetForm(); 
        })    
        .catch(error => {
            console.log("ERROR", error);
        });
    }   
}
})(SignUp);



export default FormikUserForm;

















