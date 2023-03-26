import { useState } from 'react'
import './App.css'
import Empower from './components/Empower'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Payments from './components/Payments'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Empower />
      <Payments />
      <Footer />
    </div>  
  )
}

export default App
