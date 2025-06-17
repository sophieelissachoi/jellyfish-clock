import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DigitalClock from './Components/DigitalClock'
import jellyfish from "./assets/jellyfish.GIF"

function App() {

  return (
    <div className = "flex"> 
      <div id = "jellyfish">
        <img src = {jellyfish} alt = "JellyFish"/>
      </div>
      <div>
        <DigitalClock/>
      </div>
    </div>
   
  )
}

export default App
