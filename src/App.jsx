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
import Singuppage from "./Signuppage"
import { AuthContextProvider } from "./component/context/AuthContext"


function App() {

  return (

    <div>

      <BrowserRouter>
        <AuthContextProvider>

          <Routes >
            <Route path="/" element={<Loginpage />} />;
            <Route path="/signup" element={<Singuppage />} />;
            <Route path="/AddActivity" element={<Activities />} />;
            <Route path="/Profile" element={<Profile />} />;
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/login" element={<Loginpage />} />;
          </Routes>

        </AuthContextProvider>


      </BrowserRouter>





    </div>
  )
}

export default App
