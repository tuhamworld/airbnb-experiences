import React from "react"
import star from '../assets/Star.png'

// Using Props for displaying Card data
export default function Card({img, rating, reviewCount, location, title, price }) {
    return (
        
        <section className ="container">
            <div className="card">

                <img src={`./images/${img}`} className="card-image"/>

                <div className="card-stats">
                    <img src={star} className="card-star" />
                    <span className="card-review">{rating}</span>
                    <span className="gray">({reviewCount}) • {location}</span>
                </div>

                    <p>{title}</p>
                    <p><span className="bold">    
                        From ${price}</span> / person
                    </p>

                

                </div>
            </section>
      
        
    )
}