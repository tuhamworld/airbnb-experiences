import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './components/data'

import './App.css'

function App() {
  const newDatas = data.map(singleData => {
    return <Card
      key={singleData.id}
      singleData={singleData} 
      
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


// Using Spread operator helps gets the item in the same format it was listed below
// {...singleData} 




// Previously while destructuring props
// card = {singleData.id}
// img={singleData.coverImg}
// rating={singleData.stats.rating}
// reviewCount={singleData.stats.reviewCount}
// location={singleData.location}
// title={singleData.title}
// price={singleData.price}
// openSpots = {singleData.openSpots}