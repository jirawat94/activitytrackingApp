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


function App() {

  return (

    <div>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<DashBoard />} />
          <Route path="/AddActivity" element={<Activities />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
