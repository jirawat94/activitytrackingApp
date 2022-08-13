import ChangeProfile from '../ChangeProfile/ChangeProfile'
import ProfileForm from '../ProfileForm/ProfileForm'

import React from 'react'

import './ProfileEdit.css'

const ProfileEdit = () => {

  const handleChangeProfile = () =>{
    return alert('save')
  }

  return (
    
    <form  onSubmit={handleChangeProfile}>
    <div className='profileEdit'>
        <h1>Setting</h1>
        <div className='profileEdit-body'>
            <ChangeProfile/>
            <ProfileForm/>
        </div>
        <div className='button-container'>
        <button className='saveButton'  type="submit">Save</button>
        </div>
    </div>
    </form>
  )
}

export default ProfileEdit
