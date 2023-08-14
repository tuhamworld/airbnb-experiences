import React from 'react'
import photoGrid from '../assets/photoGrid.png'


export default () => {
    return (
        <header>
            <div className="hero-image">
                <img src={photoGrid}/>
            </div>
        
            <div className="hero-content">
                <h2 className="hero-title container">Online Experiences</h2>
                <p className="hero-text container">
                    Join unique interactive activities led<br/> by one-of-a-kind hosts—all without leaving <br/> home.
                </p>
            </div>
        </header>
    )
}