import React, { useState } from 'react'
import meetballmenu from "../../assets/meatball_2.png"
import './Meetball.css'


const Meetball = (props) => {
    const [isShow, setIsShow] = useState(false)
    const handlestate = () => {
        setIsShow(true)
    }

    const handleremoves = () => {
        setIsShow(false)
    }

    return (


        <div className='meetballMenu' onClick={handlestate}> <img src={meetballmenu} />{
            isShow ?
                <div className='edit-section  '>
                    {/* <Link to='/AddActivity'> */}
                    <button>
                        edit
                    </button>
                    {/* </Link> */}
                    <button>
                        delete
                    </button>
                </div> : null
        }  </div >
    )
}

export default Meetball