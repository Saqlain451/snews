import React from 'react'
import { useNavigate } from 'react-router-dom';
import Title from '../../Component/Title/Title';
import { useGlobalHook } from '../../Hooks/Context'
import "./search.css"

const SearchResult = () => {
  const {loadAllData } = useGlobalHook();
  const Navigate = useNavigate();
  const titleText = {
    text:"Search More",
    title:"Try",
    spanTitle:"SNews",
    title2:"App",
    click:()=>{Navigate("/news")},
  }
  return (
    <div className='search-result'>

     <Title {...titleText} />
     {loadAllData};
    </div>
  )
}

export default SearchResult