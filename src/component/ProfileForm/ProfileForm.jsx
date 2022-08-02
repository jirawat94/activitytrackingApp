

import React from 'react'

import './ProfileForm.css'

const ProfileForm = () => {
  return (
    
    <div className='input-container'>
      
        <div className='manualLabel'>
            <div className='labelName'>
            <label for="name">Name</label>
            </div>
            <input type="text" id="name"   placeholder="Input your name" required/>
        </div>
        

        <div className='manualLabel'>
            <div className='labelName'>
            <label for="name">Birthday</label>
            </div>
            <input type="date" id="birthday"  placeholder="Select your birthday" required/>
        </div>

        <div className='manualLabel'>
            <div className='labelName'>
            <label for="name">Gender</label>
            </div>
            <select className='genderSelect'>
            <option value="male" >Select your Gender</option>
            <option value="male">Male</option>
            <option value="feMale">FeMale</option>
            </select>          
        </div>

        <div className='manualLabel'>
            <div className='labelName'>
            <label for="name">Height</label>
            </div>
            <input type="text" id="name"  placeholder="Input your height" required/>
        </div>

        <div className='manualLabel'>
            <div className='labelName'>
            <label for="name">Weight</label>
            </div>
            <input type="text" id="name"  placeholder="Input your weight" required/>
        </div>
    </div>
  )
}

export default ProfileForm
