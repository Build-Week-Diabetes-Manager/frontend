import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserInput = ({ values, errors, touched, isSubmitting }) => {
    return (
        <Form>
            <Field component="select" name="glvls_morn"/>
                <option value="">High</option>
                <option value="">Normal</option>
                <option value="">Low</option>
            <Field component="select" name="glvls_noon"/>
                <option value="">High</option>
                <option value="">Normal</option>
                <option value="">Low</option>
            <Field component="select" name="glvls_eve"/>
                <option value="">High</option>
                <option value="">Normal</option>
                <option value="">Low</option>
            <Field component="select" name="actvty_lvls"/>
                <option value="71">High</option>
                <option value="70">Normal</option>
                <option value="72">Low</option>
            <button type="submit">Submit</button>
        </Form>
    )
}

const FormikUserInput = withFormik({
    mapPropsToValues({ glvls_morn, glvls_noon, glvls_eve, actvty_lvls }) {
        return {
            glvls_morn: glvls_morn || "",
            glvls_noon: glvls_noon || "",
            glvls_eve: glvls_eve || "",
            actvty_lvls: actvty_lvls || 70
        }
    }
})

handleSubmit(values, { resetForm, setErrors, setSubmittin }) {
    
}

export default UserInput;