import React from "react"
import star from '../assets/Star.png'


export default function Card(props) {
    let badgeContent
    if (props.singleData.openSpots === 0) {
        badgeContent = "SOLD OUT"

    } else if (props.singleData.location === 'Online') {
        badgeContent = "Online"
    }

    return (
        <div className="card"> 
            
            {badgeContent && <div className="card-badge">{badgeContent}</div>}
                <img src={`./images/${props.singleData.coverImg}`} className="card-image"/>
                
            <div className="card-stats">
                <img src={star} className="card-star" />
                <span className="card-review">{props.singleData.stats.rating}</span>
                <span className="gray">({props.singleData.stats.reviewCount}) • </span>
                <span> {props.singleData.location}</span>
            </div>
                <p>{props.singleData.title}</p>
                <p><span className="bold">From ${props.singleData.price}</span> / person</p>
        </div>      
        
    )
}