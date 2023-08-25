import React from 'react'
import photoGrid from '../assets/photoGrid.png'


export default () => {
    return (
        <section className="container">
            <div className="hero-image">
                <img src={photoGrid}/>
            </div>
        
            <div className="hero-content">
                <h2 className="hero-title">Online Experiences</h2>
                <p className="hero-text">
                    Join unique interactive activities led<br/> by one-of-a-kind hosts—all without leaving <br/> home.
                </p>
            </div>
        </section>
    )
}