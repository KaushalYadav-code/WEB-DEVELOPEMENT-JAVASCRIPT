import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {add,subtract} from './utility'
import Sample from './component/Sample'
import HomePage from './component/HomePage'
import Contact from './component/Contact'
import { Route, Routes } from 'react-router-dom'
import Profile from './component/Profile'
import { UserContext } from './UserContext'
import Search from './component/Search'
import Products from './component/Products'


function App() {
  const [count, setCount] = useState(0)
  const name="Profile Page Name"
  

  return (
    <>
      <UserContext.Provider value={name}>
        <Routes>
          <Route path='homepage' element={<HomePage/>}>
            <Route path='sample' element={<Sample/>}/>
          </Route>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/profile/:username' element={<Profile/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path='/product' element={<Products/>}/>
        </Routes>
      </UserContext.Provider>

    </>
  )
}

export default App
