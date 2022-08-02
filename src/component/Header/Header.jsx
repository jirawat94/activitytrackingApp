
import React from 'react'
import './Header.css'
import Headerpic from "../../assets/amico.png"
import DailyResult from '../DailyResult/DailyResult'
import { PersonalData } from '../../Store Data/Personaldata'
import { useState } from 'react'


const Header = () => {
    const nameProfile = PersonalData[0].name
    const activity = PersonalData[0].activity

    return (
        <div className='Dashboard'>
            <img src={Headerpic} alt="" />
            <div className='Dashboard-content'>
                <h1>Hi {nameProfile} </h1>
                <p>“If you want something you’ve never had,<br />you must be willing to do something you’ve never done.”
                    <br />
                    - Thomas Jefferson -</p>

            </div>
            <div className='dailly-container'>
                <DailyResult activity={activity} />
            </div>

        </div>
    )
}

export default Header