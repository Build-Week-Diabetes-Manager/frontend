import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const UserInput = (props) => {

    const [userInfo, setUserInfo] = useState({ 
        userTime: false,
        timeStamp: "",
        glucoseMeasurement: "",
        regularDose: "",     
        nphDose: "",   
        ultralenteDose: "",
    })

    // const [userInfo, setUserInfo] = useState({ 
    //     timeStamp: "",
    //     glucoseMeasurement: "",
    //     insulineType: {
    //         regularDose: "",     
    //         nphDose: "",   
    //         ultralenteDose: "", 
    //     }
    // })

    const handleChange = event => {
        setUserInfo({...userInfo, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
            .post()
            .then()
            .catch()
    }

    return (
        <>
            <form onSubmit={event => handleSubmit(event)}>
                <label>
                    Time:
                    <input name="userTime" value={userInfo.userTime} onChange={event => handleChange(event)} />
                </label>
                <legend>Insuline Dosage</legend>
                <label>
                    Regular:
                    <input name="regularDose" value={userInfo.regularDose} onChange={event => handleChange(event)} />
                </label>
                <label>
                    NPH:
                    <input name="nphDose" value={userInfo.nphDose} onChange={event => handleChange(event)} />
                </label>
                <label>
                    UltraLente:
                    <input name="ultralenteDose" value={userInfo.ultralenteDose} onChange={event => handleChange(event)} />
                </label>
                <button>Submit</button>
            </form>
        </>
    )
}

export default UserInput;