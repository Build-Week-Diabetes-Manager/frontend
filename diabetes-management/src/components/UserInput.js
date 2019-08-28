import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import DateTimePicker from 'react-datetime-picker';
import axiosWithAuth from '../utils/axiosWithAuth';

const glucoseOptions = [
    { value: 57, label: 'unspecified blood glucose measurement' },
    { value: 58, label: 'pre-breakfast blood glucose measurement' },
    { value: 59, label: 'post-breakfast blood glucose measurement' },
    { value: 60, label: 'pre-lunch blood glucose measurement' },
    { value: 61, label: 'post-lunch blood glucose measurement' },
    { value: 62, label: 'pre-supper blood glucose measurement' },
    { value: 63, label: 'post-supper blood glucose measurement' },
];

const insulineType = [
    {value: 33, label: 'Regular insuline dose'},
    {value: 34, label: 'NPH insuline dose'},
    {value: 35, label: 'UltraLente insuline dose'},
]

const UserInput = () => {

    const [glucose, setGlucose] = useState({ timestamp: '', code: '', value: ''});
    const [dose, setDose] = useState({ timestamp: '', code: '', value: ''});

    const handleGlucoseSelect = selectedOption => {
        setGlucose({...glucose, code: selectedOption.value });
        console.log(`Option selected:`, selectedOption);
    };

    const handleGlucoseChange = event => {
        setGlucose({ ...glucose, value: parseInt(event.target.value) })
    };

    const handleDoseChange = event => {
        setDose({ ...dose, [event.target.name]: event.target.value })
    };

    const handleGlucoseSubmit = event => {
        event.preventDefault();
        setGlucose({...glucose, timestamp: currentTime()})
        console.log(glucose);
    }

    const handleDoseSubmit = event => {
        event.preventDefault();
        setDose({...dose, timestamp: currentTime()})
        console.log(dose);
    }

    const currentTime = () => {
        const time = new Date().toISOString();
        return(`${time.substr(0,10)} ${time.substr(11,5)}`);
    }

    return (
        <>
        <form onSubmit={event => handleGlucoseSubmit(event)}>
            <label>Glucose Measurement Time</label>
            <Select
                value={glucose.code}
                onChange={event => handleGlucoseSelect(event)}
                options={glucoseOptions}
            />
            <label>Glucose Measurement</label>
            <input type="number" name="glucose measurement" onChange={event => handleGlucoseChange(event)} value={glucose.value} />
            <button type="submit">Submit</button>
        </form>
        {/* <form onSubmit={event => handleDoseSubmit(event)}>
            <label>
                Regular insuline:
                <input type="number" name={33} onChange={event => handleDoseChange(event)} value={dose.value} />
            </label>
            <label>
                NPH Insuline:
                <input type="number" name={34} onChange={event => handleDoseChange(event)} value={dose.value} />
            </label>
            <label>
                UltraLente Insuline:
                <input type="number" name={35} onChange={event => handleDoseChange(event)} value={dose.value} />
            </label>
            <button>Submit</button>
        </form> */}
        </>
    )
}

export default UserInput;