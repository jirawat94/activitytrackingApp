// import { useState } from 'react'
import "../src/Globle.css"
import "./App.css"
import Navbar from './component/navbar/navbar'
import MainSec from './component/Header/Header'
import { Route, NavLink, Link, Routes } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Profile from './profile'
import Activities from './Activities'
import DashBoard from "./DashBoard"
import Loginpage from "./Loginpage"
import { useState } from "react"


function App() {

  const [isAuth, setAuth] = useState(true)


  return (

    <div>

      <BrowserRouter>
        {isAuth ? <Navbar /> : null}
        <Routes >
          <Route path="/" element={<DashBoard />} />
          <Route path="/AddActivity" element={<Activities />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>

      </BrowserRouter>





    </div>
  )
}

export default App
