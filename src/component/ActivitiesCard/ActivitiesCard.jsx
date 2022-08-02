import React from 'react'
import "./ActivitiesCard.css"
import RunPic from "../../assets/running_1.png"
import meetballmenu from "../../assets/meatball_2.png"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const ActivitiesCard = () => {

    const [isShow, setIsShow] = useState(false)
    const handlestae = () => {
        setIsShow(true)
    }
    const handlestaeremove = () => {
        setIsShow(false)
    }

    return (


        <div className='ActivityCard' >
            <div className='activity-namelable' >
                <h2>Run</h2>
                <div className='freespace' onClick={handlestaeremove}></div>
                <img src={meetballmenu} onClick={handlestae} />

            </div>

            <div onClick={handlestaeremove}>
                <div className='datasection' >

                    <p >12 Jun 2022</p>
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


                <h1>Run For mom</h1>
                <div className="activitypicmain">
                    <img src={RunPic} ></img>
                </div>
                <p>วิ่งที่สวนลุม เหนื่อยมาก เหนื่อยที่สุด เหนื่อยอะไรขนาดนี้</p>
                <h3 >Calories 800 Kcal</h3>

            </div>




        </div>




    )
}

export default ActivitiesCard