import React from 'react'
import './DailyResult.css'

import { useState, useEffect } from 'react'
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { getTotal } from '../../api/activity.js'
//Try to use memo
const DailyResult = (props) => {



    // const totalduration = props.activity.reduce((previousValue, currentValue) => previousValue + currentValue.duration,
    //     0);
    // const toalcalories = props.activity.reduce((previousValue, currentValue) => previousValue + currentValue.calories, 0
    // );

    const [total, setTotal] = useState([])
    const { user } = useContext(UserContext);


    // const geTotalfunc = async () => {
    //     const response = await getTotal()
    //     setTotal(response.data.result)
    // };

    // useEffect(() => {
    //     if (user) {
    //         geTotalfunc()
    //         return;
    //     }
    //     if (user === null) {
    //         window.location = '/';
    //     }
    // }, [user]);

    // console.log(total)

    return (
        <div className='daily-result-container'>
            <div className='dashboard-headline'><h1>Daily Result</h1></div>

            <div className='dashboard-info-container'>

                <div className='dashboard-info'>
                    <h2>
                        Total Duration
                    </h2>
                    <p>
                        totalduration
                    </p></div>
                <div className='dashboard-info'>
                    <h2>
                        Calories Burned
                    </h2>
                    <p>
                        toalcalories
                    </p>

                </div>
            </div>

        </div>)
}

export default DailyResult