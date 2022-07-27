// import { useState } from 'react'
import "../src/Globle.css"
import "./App.css"
import Navbar from './component/navbar/navbar'
import MainSec from './component/Header/Header'
<<<<<<< HEAD
import Profile from './profile'
import { BrowserRouter,Routes, Route,} from "react-router-dom";
=======
import { Route, NavLink, Link, Routes } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import Profile from './profile'
import AddYourData from './add_your_data'
import DashBord from "./DashBord"
>>>>>>> 9f1a14263aa9cca4412d3073d207c1bcc0458c64


function App() {

  return (

<<<<<<< HEAD
    <div className='App'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<MainSec />}/>
            <Route path='/profile' element={<Profile/>}/>

          </Routes>
      </BrowserRouter>
=======
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path="/" element={<DashBord />} />
          <Route path="/AddActivity" element={<AddYourData />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>


      </BrowserRouter>

>>>>>>> 9f1a14263aa9cca4412d3073d207c1bcc0458c64
    </div>
  )
}

export default App
