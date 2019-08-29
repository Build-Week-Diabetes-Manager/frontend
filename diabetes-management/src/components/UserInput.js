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

const Form = () => {

    const [glucose, setGlucose] = useState({ timestamp: '', code: '', value: ''});

    const [regular, setRegular] = useState({ timestamp: '', code: '', value: ''});
    const [nph, setNph] = useState({ timestamp: '', code: '', value: ''});
    const [UltraLente, setUltraLente] = useState({ timestamp: '', code: '', value: ''});
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

    const handleGlucoseSelect = selectedOption => {
        setGlucose({...glucose, code: selectedOption.value });
        console.log(`Option selected:`, selectedOption);
    };

    const handleGlucoseChange = event => {
        setGlucose({ ...glucose, value: parseInt(event.target.value) })
    };

    const post = (state) => {
        axiosWithAuth()
            .post(`https://diabetesmanager.herokuapp.com/api/manager/manage`,state)
            .then(res => console.log('post res', res))
            .catch(err => console.error(err))
    };

    // const post = (state) => {
    //     if(state.timestamp) {
    //         axiosWithAuth()
    //         .post(`https://diabetesmanager.herokuapp.com/api/manager/manage`,state)
    //         .then(res => console.log('post res', res))
    //         .catch(err => console.error(err))
    //     }
    // }

    const handleGlucoseSubmit = event => {
        event.preventDefault();
        setGlucose({...glucose, timestamp: currentTime()})
        console.log(glucose);
        post(glucose);

        // axiosWithAuth()
        //     .post(`https://diabetesmanager.herokuapp.com/api/manager/manage`,glucose)
        //     .then(res => console.log('post res', res))
        //     .catch(err => console.error(err))
    };

    //refactor to check if state is complete, and modularize
    const handleDoseSubmit = event => {
        event.preventDefault();
        setRegular({...regular, timestamp: currentTime()})
        setNph({...nph, timestamp: currentTime()})
        setUltraLente({...UltraLente, timestamp: currentTime()})
        console.log(regular, nph, UltraLente);
        post(regular);
        post(nph);
        post(UltraLente);
        // axiosWithAuth()
        //     .post(`https://diabetesmanager.herokuapp.com/api/manager/manage`,regular)
        //     .then(res => console.log('post res', res))
        //     .catch(err => console.error(err))
        // axiosWithAuth()
        //     .post(`https://diabetesmanager.herokuapp.com/api/manager/manage`,nph)
        //     .then(res => console.log('post res', res))
        //     .catch(err => console.error(err))
        // axiosWithAuth()
        //     .post(`https://diabetesmanager.herokuapp.com/api/manager/manage`,UltraLente)
        //     .then(res => console.log('post res', res))
        //     .catch(err => console.error(err))
    };

    // const handleDoseSelect = (event, setter, state) => {
    //     setter({ ...state, code: event.target.value })
    // };

    const handleRegularSelect = (event) => {
        setRegular({ ...regular, code: event.target.value })
        console.log(event, regular)
    };
    const handleNphSelect = (event) => {
        setNph({ ...nph, code: event.target.value })
    };
    const handleUltraLenteSelect = (event) => {
        setUltraLente({ ...UltraLente, code: event.target.value })
    };

    const handleRegularChange = (event) => {
        setRegular({ ...regular, value: event.target.value })
        console.log(event.target.value)
    };
    const handleNphChange = (event) => {
        setNph({ ...nph, value: event.target.value })
        console.log(event.target.value)
    };
    const handleUltraLenteChange = (event) => {
        setUltraLente({ ...UltraLente, value: event.target.value })
        console.log(event.target.value)
    };

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
        <form onSubmit={event => handleDoseSubmit(event, setRegular, regular)}>
        <input type="checkbox" name={33} value={33} onChange={event => handleRegularSelect(event)}/>
        <label>
            Regular insuline:
            <input type="number" name={33} onChange={event => handleRegularChange(event)} value={regular.value} />
        </label>
        <input type="checkbox" name={34} value={34} onChange={event => handleNphSelect(event)}/>
        <label>
            NPH Insuline:
            <input type="number" name={34} onChange={event => handleNphChange(event)} value={nph.value} />
        </label>
        <input type="checkbox" name={35} value={35} onChange={event => handleUltraLenteSelect(event)}/>
        <label>
            UltraLente Insuline:
            <input type="number" name={35} onChange={event => handleUltraLenteChange(event)} value={UltraLente.value} />
        </label>
        <button>Submit</button>  
        </form> 
        </>
    )
}

export default Form;