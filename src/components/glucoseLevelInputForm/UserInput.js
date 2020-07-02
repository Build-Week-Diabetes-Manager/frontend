import React, { useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { getData, postUserBGL } from "../../actions/dataActions";
import axiosWithAuth from "../../utils/axiosWithAuth";

const glucoseOptions = [
	{ value: 57, label: "unspecified blood glucose measurement" },
	{ value: 58, label: "pre-breakfast blood glucose measurement" },
	{ value: 59, label: "post-breakfast blood glucose measurement" },
	{ value: 60, label: "pre-lunch blood glucose measurement" },
	{ value: 61, label: "post-lunch blood glucose measurement" },
	{ value: 62, label: "pre-supper blood glucose measurement" },
	{ value: 63, label: "post-supper blood glucose measurement" },
];

const insulineType = [
	{ value: 33, label: "Regular insuline dose" },
	{ value: 34, label: "NPH insuline dose" },
	{ value: 35, label: "UltraLente insuline dose" },
];

const userId = () => {
	return parseInt(localStorage.getItem("user_id"));
};

const Form = (props) => {
	const [glucose, setGlucose] = useState([{
		timestamp: "",
		code: "",
		value: "",
		user_id: 0,
	}]);

	const [regular, setRegular] = useState({ timestamp: "", code: "", value: "" });
	const [nph, setNph] = useState({ timestamp: "", code: "", value: "" });
	const [UltraLente, setUltraLente] = useState({
		timestamp: "",
		code: "",
		value: "",
    });
    


	//convert these with custom hooks
	//modularize handleselect, and handlechange + edit corresponding input fields
	//add put and delete functionality
	//use newer post function
	//change default state values to null
	//check state.code/state.value and only post if it exists

	// const handleSelector = (event, setter, state) => {
	//     setter({ ...state, code: event.target.value })
	// }

	// const handleChanger = (event, setter, state) => {
	//     setter({ ...state, value: event.target.value })
	// }

	// const handler = (event, setter, state, type) => {
	//     setter({ ...state, [`${type}`]: event.target.value})
	// }

	const handleGlucoseSelect = (selectedOption) => {
		setGlucose({ ...glucose, code: selectedOption.value,timestamp:currentTime(), user_id: userId() });
		console.log(`Option selected:`, selectedOption);
	};

	const handleGlucoseChange = (event) => {
		setGlucose({ ...glucose, value: parseInt(event.target.value) });
	};

	const post = (state) => {
		console.log(state);
		axiosWithAuth()
			.post(`https://diabetesmanager.herokuapp.com/api/manager/manage`, state)
			.then((res) => {
				console.log("post res", res);
				getData(state);
			})
			.catch((err) => console.error(err));
	};
    
	const handleGlucoseSubmit = (event) => {
		console.log("glucose on submit", glucose);
        event.preventDefault();
		props.postUserBGL(glucose);
		props.getData(glucose);
	};

	//refactor to check if state is complete, and modularize
	const handleDoseSubmit = (event) => {
		event.preventDefault();
		setRegular({ ...regular, timestamp: currentTime() });
		setNph({ ...nph, timestamp: currentTime() });
		setUltraLente({ ...UltraLente, timestamp: currentTime() });
		console.log(regular, nph, UltraLente);
		post(regular);
		post(nph);
		post(UltraLente);
		props.getData(regular); //maybe delete later
		props.getData(nph); //maybe delete later
		props.getData(UltraLente); //maybe delete later
		// dsPost(glucose, regular, nph, UltraLente);
	};

	// const handleDoseSelect = (event, setter, state) => {
	//     setter({ ...state, code: event.target.value })
	// };

	const handleRegularSelect = (event) => {
		setRegular({ ...regular, code: event.target.value });
		console.log(event, regular);
	};
	const handleNphSelect = (event) => {
		setNph({ ...nph, code: event.target.value });
	};
	const handleUltraLenteSelect = (event) => {
		setUltraLente({ ...UltraLente, code: event.target.value });
	};

	const handleRegularChange = (event) => {
		setRegular({ ...regular, value: event.target.value });
		console.log(event.target.value);
	};
	const handleNphChange = (event) => {
		setNph({ ...nph, value: event.target.value });
		console.log(event.target.value);
	};
	const handleUltraLenteChange = (event) => {
		setUltraLente({ ...UltraLente, value: event.target.value });
		console.log(event.target.value);
	};

	const currentTime = () => {
		const time = new Date().toISOString();
		return `${time.substr(0, 10)} ${time.substr(11, 5)}`;
	};

	return (
		<>
			<form
				className="user-input-form"
				onSubmit={(event) => handleGlucoseSubmit(event)}
			>
				<label>
					<p>Glucose Measurement Time</p>
				</label>
				<Select
					className="select-drop"
					// value={glucose.code} commented out to get values to display in select dropdown
					onChange={(event) => handleGlucoseSelect(event)}
					options={glucoseOptions}
					placeholder="Select the time of measurement"
				/>
				<label>
					<p>Glucose Measurement</p>
				</label>
				<input
					type="number"
					className="insulin-input"
					placeholder="Enter your blood glucose in mg/dl"
					name="glucose measurement"
					onChange={(event) => handleGlucoseChange(event)}
					value={glucose.value}
				/>
				<button className="button-style-1" type="submit">
					Submit
				</button>
			</form>

			{/* <form
				className="user-input-form"
				onSubmit={(event) => handleDoseSubmit(event, setRegular, regular)}
			>
				<label>
					<div className="insulin-type">
						<p>Regular insuline:</p>
						<input
							className="in-check"
							type="checkbox"
							name={33}
							value={33}
							onChange={(event) => handleRegularSelect(event)}
						/>
					</div>
					<input
						className="insulin-input"
						placeholder="Enter your blood glucose in mg/dl"
						type="number"
						name={33}
						onChange={(event) => handleRegularChange(event)}
						value={regular.value}
					/>
				</label>

				<label>
					<div className="insulin-type">
						<p>NPH Insuline:</p>
						<input
							className="in-check"
							type="checkbox"
							name={34}
							value={34}
							onChange={(event) => handleNphSelect(event)}
						/>
					</div>
					<input
						className="insulin-input"
						placeholder="Enter your blood glucose in mg/dl"
						type="number"
						name={34}
						onChange={(event) => handleNphChange(event)}
						value={nph.value}
					/>
				</label>

				<label>
					<div className="insulin-type">
						<p>UltraLente Insuline:</p>
						<input
							className="in-check"
							type="checkbox"
							name={35}
							value={35}
							onChange={(event) => handleUltraLenteSelect(event)}
						/>
					</div>
					<input
						className="insulin-input"
						placeholder="Enter your blood glucose in mg/dl"
						type="number"
						name={35}
						onChange={(event) => handleUltraLenteChange(event)}
						value={UltraLente.value}
					/>
				</label>

				<button className="button-style-1">Submit</button>
			</form> */}
		</>
	);
};

const mapStateToProps = (state) => {
	// console.log('formstate', state);
	return {
		data: state.diadata,
	};
};

export default connect(mapStateToProps, { getData, postUserBGL })(Form);
