import React from 'react'
import "./card.css"
const Card = ({ img, title, description, link,date }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h5 className='card-title'>{title}</h5>
      <p className='card-des'>{description}</p>
      <div className="card-btns">
       <button>{date}</button> 
      <a href={link} target="_blank"> <button>Read News</button></a>
      </div>
      
    </div>
  )
}

export default Card