import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {add,subtract} from './utility'
import Sample from './component/Sample'
import HomePage from './component/HomePage'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <Sample count={count} setCount={setCount}/>
      <HomePage/>
    </>
  )
}

export default App