import { useState } from 'react'
import './App.css'
import Automation from './components/Automation'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Payments from './components/Payments'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Automation />
      <Payments />
      <Footer />
    </div>  
  )
}

export default App
