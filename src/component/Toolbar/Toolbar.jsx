


import React from 'react'

import './Toolbar.css'

const activitieList = [
  {
    name : 'All'

  },
  {
    name : 'Run'

  },
  {
    name : 'Walk'

  },
  {
    name : 'Bicycle'

  },
  {
    name : 'Swim'

  },
  {
    name : 'Hike'

  },
]

const Toolbar = () => {
  return (
    
    <div className='toolbar-container'>
     <div className='toolbar-head'>
        <h1>Your Activities</h1>
     </div>
     <div className='toolbar-bottom'>
        
        <div className="toolbar-bottom-left">
        {
              activitieList.map((name,index) => <button key={index} className='toolbar-activities'>{name.name}</button>)
            }
        </div>
        <div className="toolbar-bottom-right">
        <input type="date" />
        <button className='addData'>Add your data</button>
        </div>
     </div>
    </div>
    
  )
}

export default Toolbar
