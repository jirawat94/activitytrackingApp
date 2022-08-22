
import React from 'react'

import './Header.css'
import Headerpic from "../../assets/amico.png"
import DailyResult from '../DailyResult/DailyResult'
import { useState } from 'react'
import { getMe } from '../../api/Users.js'
import { useEffect } from 'react'
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";


const Header = (props) => {
    const [userinfo, setUserinfo] = useState([])
    const { user } = useContext(UserContext);


    const getMefunc = async () => {
        const response = await getMe()
        setUserinfo(response.data.result)
    };

    useEffect(() => {
        if (user) {
            getMefunc()
            return;
        }
        if (user === null) {
            window.location = '/';
        }
    }, [user]);


    console.log(userinfo)
    return (
        <div className='Dashboard'>
            <img src={Headerpic} alt="" className='pic-pc' />

            <div className='Dashboard-right'>
                <div className='Dashboard-content'>
                    <h1>Hi {userinfo.name} </h1>
                    <p>“If you want something you’ve never had,<br />you must be willing to do something you’ve never done.”
                        <br />
                        - Thomas Jefferson -</p>

                </div>
                <div className='dailly-container'>
                    <img src={Headerpic} alt="" className='pic-mobile' />

                    <DailyResult />
                </div>


            </div>

        </div>
    )
}

export default Header