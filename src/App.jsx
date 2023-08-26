import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'


import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Hero />

      <Card
        img='./katie-zaferes.png'
        rating='5.0'
        reviewCount='(6)'
        country='USA'
        title='Life lessons with Katie Zaferes'
        price='139'
      
      />
    
    </>

  )
}

export default App
