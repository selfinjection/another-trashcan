import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import './styles/_global.scss'

export default function App() {

  return (
    <div className="app container">
      <header>
        <Navbar />
      </header>
      <div className="main container">
        <Hero />
      </div>
    </div>
  )
}