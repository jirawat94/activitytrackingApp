import React from 'react'
import "./ActivitiesCard.css"
import RunPic from "../../assets/running_1.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import meatballmenu from '../../assets/meatball_2.png'
import '../Meetball/Meetball.css'

const ActivitiesCard = (props) => {
    const activityDetail = props.activitiesDeatils
    const [isShow, setIsShow] = useState(false)
    const handlestate = () => {
        setIsShow(true);

    };

    const handleRemove = () => {
        setIsShow(false)
    }

    return (
        <div className='display-card'>

            <div className='ActivityCard'  >
                <div className='activity-namelable' >
                    <h2>{activityDetail.type}</h2>
                    <div className='freespace' onClick={handleRemove}></div>
                    <div className='meetballMenu' onClick={handlestate}  > <img src={meatballmenu} />{
                        isShow ?
                            <div className='edit-section  '>
                                <Link to='/AddActivity'>
                                    <button>
                                        edit
                                    </button>
                                </Link>
                                {/* </Link> */}
                                <button>
                                    delete
                                </button>
                            </div> : null
                    }  </ div >
                </div>
                <div onClick={handleRemove}>
                    <div className='datasection'  >
                        <p >{activityDetail.date}</p>
                    </div>
                    <h1>{activityDetail.activityname}</h1>
                    <div className="activitypicmain">
                        <img src={RunPic} onClick={handlestate}></img>
                    </div>
                    <p>{activityDetail.description}</p>
                    <h3>calories {activityDetail.calories}</h3>

                </div>

            </div>


        </div>
    )
}

export default ActivitiesCard