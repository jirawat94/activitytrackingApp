import React from 'react'
import './navbar.css'
import profilePic from '../../assets/ProfilePic.svg'

const navbar = () => {
    return (

        <nav>
            <div className='navMain'>
                <div className='navbar-left'>
                    <ul>
                        <li>Dashbord</li>
                        <li>Setting</li>


                    </ul>
                </div>
                <div className='navbar-right'>
                    <img src={profilePic} alt="" />
                </div>
            </div>

        </nav>


    )
}

export default navbar