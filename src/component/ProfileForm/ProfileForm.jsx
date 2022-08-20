
import React from 'react'
import './ProfileForm.css'
import { useState, useRef } from "react";
import { UserAuth } from '../context/AuthContext';


const ProfileForm = () => {
    const user = UserAuth().user.email
    const [userInfo, setUserInfo] = useState({
        name: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
    });


    const handleChange = (event) => {
        const value = event.target.value;
        setUserInfo({
            ...userInfo,
            [event.target.name]: value,
        });
    }


    const handleSummit2 = (event) => {
        event.preventDefault();
        console.log(userInfo)
    }




    return (

        <div className='input-container' >


            <form >

                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="name" >Name</label>
                    </div>
                    <input type="text" id="name" placeholder="Input your name" name="name"
                        value={userInfo.name}
                        onChange={handleChange} required />
                </div>


                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="age">Birthday</label>
                    </div>
                    <input type="date" id="birthday" placeholder="Select your birthday" name="age"
                        value={userInfo.age}
                        onChange={handleChange} required />
                </div>

                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="gender">Gender</label>
                    </div>
                    <select className='genderSelect' name="gender"
                        value={userInfo.gender}
                        onChange={handleChange}>
                        <option value="" >Select your Gender</option>
                        <option value="male">Male</option>
                        <option value="feMale">FeMale</option>
                    </select>
                </div>

                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="height">Height</label>
                    </div>
                    <input type="text" id="name" placeholder="Input your height" name="height"
                        value={userInfo.height}
                        onChange={handleChange} required />
                </div>

                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="weight">Weight</label>
                    </div>
                    <input type="text" id="name" placeholder="Input your weight" name="weight"
                        value={userInfo.weight}
                        onChange={handleChange} required />
                </div>
                <h1>{user}</h1>

                <button className="saveButton" onClick={handleSummit2} >
                    Save
                </button>

            </form>

        </div>
    )
}

export default ProfileForm
