import { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Hero from './components/Hero'
import Classes from './components/Classes'
import Divider from './components/Divider'
import Pratibha from './components/Pratibha'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Classes />
      <Divider />
      <Pratibha />
      <Divider />
    </div>
  )
}

export default App
