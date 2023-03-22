import React from 'react'
import "./hero.css"
const Hero = ({title1,description,img,spanTitle,title2}) => {
    return (
        <section className='hero'>
            <div className="hero-left">
                <h1 className='hero-title'>{title1} <span>{spanTitle}</span> {title2} </h1>
                <p className="hero-des">{description}</p>
            </div>
            <div className="hero-right">
                <img src={img} alt="hero img" />
            </div>
        </section>
    )
}

export default Hero