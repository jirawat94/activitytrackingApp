import React from 'react'
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard'
import "./Content.css"

const Content = (props) => {

    return (
        <div className=' content-container'>
            <ActivitiesCard activitiesDeatils={props.filterCard}/>
            </div>
    )
}

export default Content