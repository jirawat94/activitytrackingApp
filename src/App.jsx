import { useState } from 'react'
import "../src/Globle.css"
import "./App.css"
import Navbar from './component/navbar/navbar'
import MainSec from './component/Header/Header'
import Profile from './profile'
import { BrowserRouter,Routes, Route,} from "react-router-dom";


function App() {


  return (

    <div className='App'>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<MainSec />}/>
            <Route path='/profile' element={<Profile/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
