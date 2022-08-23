import React from 'react'
import Header from './component/Header/Header'
import Toolbar from './component/Toolbar/Toolbar'
import Content from './component/content/Content'
import Navbar from './component/navbar/navbar'

import './Dashboard.css'



const DashBoard = () => {
    return (
        <div>
            <Navbar />
            <div className='Header-section'>

                <Header />
            </div>
            <Toolbar />
        </div>
    )
}

export default DashBoard