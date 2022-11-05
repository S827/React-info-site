import React from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Icons from './icons'
import './index.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Icons />
      <MainContent />
    </div>
  )
}