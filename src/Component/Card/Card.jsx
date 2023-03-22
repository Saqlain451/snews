import React from 'react'
import "./card.css"
const Card = ({ img, title, description, link }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h5 className='card-title'>{title}</h5>
      <p className='card-des'>{description}</p>
      <a href={link} target="_blank"> <button>Read More</button></a>
    </div>
  )
}

export default Card