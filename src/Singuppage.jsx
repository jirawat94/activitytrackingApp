import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { async } from '@firebase/util';
import { UserAuth } from './component/context/AuthContext';


const Singuppage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { createUser } = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password);
            navigate('/Profile')
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }
    return (
        <div>
            <div><p>มีuseแล้วเชิญ <Link to='/'>Login</Link> ยังไม่มีกรุณา Sing Up </p></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" clasNames="form-control" id="exampleInputEmail1" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit" className="">Sing Up</button>
            </form>

        </div>
    )
}

export default Singuppage