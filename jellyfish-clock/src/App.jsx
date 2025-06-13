import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DigitalClock from './Components/DigitalClock'

function App() {

  return (
    <div> 
      <div id = "jellyfish">
        <img src = './jellyfish.GIF' alt = "JellyFish"/>
      </div>
      <div>
        <DigitalClock/>
      </div>
    </div>
   
  )
}

export default App
