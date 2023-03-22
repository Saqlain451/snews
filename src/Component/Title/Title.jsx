import React from 'react'
import "./title.css"
const Title = ({text,title,spanTitle,title2,click}) => {
  return (
    <div className='page-title'>
        <h1>{title} <span>{spanTitle}</span> {title2}</h1>
        <p onClick={click}>{text}</p>
    </div>
  )
}

export default Title 