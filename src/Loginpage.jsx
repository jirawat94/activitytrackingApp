import { async } from '@firebase/util'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from './component/context/AuthContext'

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
        <div>
            <h1> Login เลยยยย ยังไม่มีก็ไปสมัครก่อนจ้าsfdsfdsfsdfsdfsdfadf <Link to='/signup'>กดโลดด</Link></h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" clasNames="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" >Login</button>
            </form>
        </div>
    )
}

export default Loginpage