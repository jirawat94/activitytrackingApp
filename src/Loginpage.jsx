import img from '../src/Store Data/PersonalPic/loginpage.jpg'
import { async } from '@firebase/util'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './component/context/AuthContext'

import './Loginpage.css'

const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = UserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await login(email, password)
            navigate('/dashboard')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };
    return (
        <div class="back-ground">
            <img src={img} alt="ProfilePicSetting" className='ProfilePic'/>
            <div class="container">
                <h1> Login  </h1>
                <form onSubmit={handleSubmit}>
                    <div class="txt_field">
                        <input type="email" clasNames="form-control" id="exampleInputEmail1" required onChange={(e) => setEmail(e.target.value)} />
                        <span></span>
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                    </div>
                    <div class="txt_field">
                        <input type="password" className="form-control" id="exampleInputPassword1" required onChange={(e) => setPassword(e.target.value)} />
                        <span></span>
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                    </div>
                    <input type="submit" value="Login" />
                    <div class="signup_link">
                        Not a member? <a href='/signup'>Click Here</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Loginpage