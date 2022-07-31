import React from 'react'
import './DailyResult.css'

const DailyResult = () => {
    return (
        <div className='daily-result-container'>
            <div className='dashboard-headline'><h1>Daily Result</h1></div>

            <div className='dashboard-info-container'>

                <div className='dashboard-info'>
                    <h2>
                        Total Duration
                    </h2>
                    <p>
                        00:00:00
                    </p></div>
                <div className='dashboard-info'>
                    <h2>
                        Calories Burned
                    </h2>
                    <p>
                        1,300
                    </p>

                </div>
            </div>

        </div>)
}

export default DailyResult