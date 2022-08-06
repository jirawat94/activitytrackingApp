import React from 'react'
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard'
import "./Content.css"
import { PersonalData } from '../../Store Data/Personaldata'
const Content = () => {
    const activitiesDeatils = PersonalData[0].activity
    return (
        <div className=' content-container'>
            <ActivitiesCard activitiesDeatils={activitiesDeatils} />
        </div>
    )
}

export default Content