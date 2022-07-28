import ChangeProfile from '../ChangeProfile/ChangeProfile'
import ProfileForm from '../ProfileForm/ProfileForm'

import React from 'react'

import './ProfileEdit.css'

const ProfileEdit = () => {
  return (
    <div className='profileEdit'>
        <h2>Setting</h2>
        <div className='profileEdit-body'>
            <ChangeProfile/>
            <ProfileForm/>
        </div>
        <div className='button-container'>
        <button className='saveButton'>Save</button>
        </div>
    </div>
  )
}

export default ProfileEdit
