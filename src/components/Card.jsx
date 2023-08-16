import React from "react"
import Katieimg from '../assets/katie-zaferes.png'
import star from '../assets/Star.png'

export default function Card() {
    return (
        

        <div className="card container">

            <img src={Katieimg} className="card-image"/>

            <div className="card-stats">
                <img src={star} className="card-star" />
                <span className="card-review">5.0</span>
                <span className="gray">(6)• USA</span>
            </div>

                <p>
                Life lessons with Katie Zaferes
                </p>
                <p>
                    <span className="bold">    
                    From $136</span> / person
                </p>

            

        </div>
      
        
    )
}