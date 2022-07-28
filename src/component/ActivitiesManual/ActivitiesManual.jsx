import React from 'react'
import "./ActivitiesManual.css"
import ActivitiesForm from '../ActivitiesForm/ActivitiesForm'
import { Link } from 'react-router-dom'

const ActivitiesManual = () => {
    return (
        <div>
            <div className='nav-activity'>
                <ul>
                    <Link to='/'>
                        <a> <li>Dashboard</li></a></Link>
                    <Link to='/AddActivity'><a><li>Add your data</li></a></Link>


                </ul>
            </div>
            <div class="manualCard">
                <h1>Manual Activity</h1>
                <ActivitiesForm />
            </div>
        </div>
    )
}

export default ActivitiesManual