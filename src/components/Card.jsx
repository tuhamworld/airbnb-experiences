import React from "react"
import star from '../assets/Star.png'

// Using Props for displaying Card data
export default function Card({ img, rating, reviewCount, location, title, price, openSpots }) {

    let badgeContent

    if (openSpots === 0) {
        badgeContent = "SOLD OUT"
    } else if (openSpots > 0) {
        badgeContent = location
    } else {
        badgeContent = ""
    }

    return (
        <div className="card">
            
            {<div className="card-badge">{badgeContent}</div>}

                <img src={`./images/${img}`} className="card-image"/>

                <div className="card-stats">
                    <img src={star} className="card-star" />
                    <span className="card-review">{rating}</span>
                    <span className="gray">({reviewCount}) • </span>
                    <span> {location}</span>
                </div>

                
                    <p>{title}</p>
                    <p><span className="bold">From ${price}</span> / person</p>

                

                </div>      
        
    )
}