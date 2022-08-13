import React from 'react'
import "./ActivitiesCard.css"
import RunPic from "../../assets/running_1.png"
import Meetball from '../Meetball/Meetball'

import { useState } from 'react'
import { Link } from 'react-router-dom'


const ActivitiesCard = (props) => {
    const activityDetail = props.activitiesDeatils
    // // const [isShow, setIsShow] = useState()
    // const handleremove = () => {
    //     return false
    // }
    const removeMeetball = () => {
        return document.getElementsByClassName("edit-section").style.display = "none";
    }

    return (
        <div className='display-card'>
            {
                activityDetail.map((value, index) => {
                    return <div className='ActivityCard' key={index} >

                        <div className='activity-namelable' >
                            <h2>{value.type}</h2>
                            <Meetball />
                        </div>
                        <div >
                            <div className='datasection'  >
                                <p >{value.date}</p>
                            </div>
                            <h1>{value.activityname}</h1>
                            <div className="activitypicmain">
                                <img src={RunPic} ></img>
                            </div>
                            <p>{value.description}</p>
                            <h3 onClick={removeMeetball}>calories {value.calories}</h3>

                        </div>

                    </div>
                })
            }
        </div>





    )
}

export default ActivitiesCard