import React from 'react'
import "./ActivitiesCard.css"
import RunPic from "../../assets/running_1.png"
import meetballmenu from "../../assets/meatball_2.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ActivitiesCard = (props) => {
const activityDetail = props.activitiesDeatils
    console.log()
    const [isShow, setIsShow] = useState(false)
    const handlestae = () => {
        setIsShow(true)
    }
    const handlestaeremove = () => {
        setIsShow(false)
    }

    return (
        <div className='display-card'>
        {
            activityDetail.map((value,index) =>{
            return    <div className='ActivityCard' key={index} >
                    <div className='activity-namelable' >
                    <h2>{value.type}</h2>
                    <div className='freespace' onClick={handlestaeremove}></div>
                    <img src={meetballmenu} onClick={handlestae} />
    
                </div>
    
                <div onClick={handlestaeremove}>
                    <div className='datasection' >
    
                        <p >{value.date}</p>
                        {
                            isShow ? <div className='edit-section'>
                                <Link to='/AddActivity'>
                                    <button>
                                        edit
                                    </button>
                                </Link>
                                <button>
                                    delete
                                </button>
                            </div> : null
                        }
                    </div>
    
    
                    <h1>{value.activityname}</h1>
                    <div className="activitypicmain">
                        <img src={RunPic} ></img>
                    </div>
                    <p>{value.description}</p>
                    <h3 >calories {value.calories}</h3>
    
                </div>

             </div>
            }) 
        }
        </div>
       




    )
}

export default ActivitiesCard