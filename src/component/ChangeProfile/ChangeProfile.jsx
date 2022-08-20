import img01 from '../../Store Data/PersonalPic/ProfileSetting.png'

import React from 'react'

import './ChangeProfile.css'

const ChangeProfile = () => {

  return (
    <div className='changeProfile'>
      <img src={img01} alt="ProfilePicSetting" className='ProfilePic' />
      <button onClick={() => { alert('Profile Changed') }}>Change Profile</button>
    </div>
  )
}

export default ChangeProfile
