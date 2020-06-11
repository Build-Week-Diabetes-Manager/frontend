import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Yup from "yup";
import { Form, Field, withFormik } from "formik";
import { BrowserRouter as Router,  Link } from "react-router-dom";
import "../../App.scss";
import { Alert } from "react-bootstrap";


const SignUp = ({ errors, touched, values, status }) => {
	const [newUsers, setNewUsers] = useState({});
	const [login, setLogin] = useState(true);

	useEffect(() => {
		if (status) {
			setNewUsers([...newUsers, status]);
		}
	}, [newUsers]);

	return (
		<div className="user-form">
			<img
				className="entryPortalLogo"
				src={require("../../img/logo/mono-flat-logo.svg")}
				href="/"
				alt="Insuline Logo"
			/>
			<h1>Lets Get You Started!</h1>
			<h2>Sign Up</h2>
			<Form>
				<Field type="text" name="username" placeholder="Username" label="Username" />
				{touched.username && errors.username && (
					<p className="error">{errors.username}</p>
				)}

				<Field type="password" name="password" placeholder="Password" />
				{touched.password && errors.password && (
					<p className="error">{errors.password}</p>
				)}

				<button className="submit-btn" type="submit">
					Sign Up
				</button>
			</Form>
			<button className="switch-route">
				<Link className="route-link" to="/login">
					Already have an account? Click here to sign in.
				</Link>
			</button>
		</div>
	);
};

const SignUpForm = withFormik({
	mapPropsToValues({ username, password, tos }) {
		return {
			username: username || "",
			password: password || "",
			tos: true,
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required("Please create a username."),
		password: Yup.string().required("Please use a secure password that isn't your bank password."),
	}),

	handleSubmit(values, { resetForm, props, setStatus }) {
		axios
			.post("https://diabetesmanager.herokuapp.com/api/users/register", {
				username: values.username,
				password: values.password,
			})
			.then((res) => {
				console.log(res);
				window.location.replace("/login");
				alert("Sign up successful, Please log in on the next screen")
				resetForm();
			})
			.catch((error) => {
				console.log("ERROR", error);
			});
	},
})(SignUp);

export default SignUpForm;
