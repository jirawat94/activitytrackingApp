import React from 'react'
import Header from './component/Header/Header'
import Toolbar from './component/Toolbar/Toolbar'
import './Dashboard.css'

const DashBoard = () => {
    return (
        <div>
            <div className='Header-section'>
                <Header />

            </div>
            <Toolbar/>
        </div>
    )
}

export default DashBoard