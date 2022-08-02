import React from 'react'
import ActivitiesCard from '../ActivitiesCard/ActivitiesCard'
import "./Content.css"

const Content = () => {
    return (
        <div className=' content-container'><ActivitiesCard /><ActivitiesCard /><ActivitiesCard /></div>
    )
}

export default Content