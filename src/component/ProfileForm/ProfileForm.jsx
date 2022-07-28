

import React from 'react'

import './ProfileForm.css'

const ProfileForm = () => {
  return (
    <div className='input-container'>
        <div className='manualLable'>
            <div className='lableName'>
            <label for="name">Name</label>
            </div>
            <input type="text" id="name"   placeholder="Input your name"/>
        </div>

        <div className='manualLable'>
            <div className='lableName'>
            <label for="name">Birthday</label>
            </div>
            <input type="date" id="birthday"  placeholder="Select your birthday"/>
        </div>

        <div className='manualLable'>
            <div className='lableName'>
            <label for="name">Gender</label>
            </div>
            <select className='genderSelect'>
            <option value="male" >Select your Gender</option>
            <option value="male">Male</option>
            <option value="feMale">FeMale</option>
            </select>          
        </div>

        <div className='manualLable'>
            <div className='lableName'>
            <label for="name">Height</label>
            </div>
            <input type="text" id="name"  placeholder="Input your height"/>
        </div>

        <div className='manualLable'>
            <div className='lableName'>
            <label for="name">Weight</label>
            </div>
            <input type="text" id="name"  placeholder="Input your weight"/>
        </div>
    </div>
  )
}

export default ProfileForm
