import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'

import './App.css'

function App() {
  const newDatas = data.map(singleData => {
    return <Card
        img={singleData.coverImg}
        rating={singleData.stats.rating}
        reviewCount={singleData.stats.reviewCount}
        location={singleData.location}
        title={singleData.title}
        price={singleData.price}
      
      />
    
  
  })

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card-container container"> 
      {newDatas}

      </section>

      
    </>

  )
}

export default App
