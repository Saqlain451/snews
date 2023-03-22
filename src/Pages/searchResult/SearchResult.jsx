import React from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../../Component/Card/Card';
import Loader from '../../Component/Loader/Loader';
import Title from '../../Component/Title/Title';
import { useGlobalHook } from '../../Hooks/Context'
import "./search.css"

const SearchResult = () => {
  const { apiData, isLoading } = useGlobalHook();
  const Navigate = useNavigate();
  const titleText = {
    text:"Search More",
    title:"Try",
    spanTitle:"SNews",
    title2:"App",
    click:()=>{Navigate("/news")},
  }
  return (
    <>

     <Title {...titleText} />

      {isLoading ? <Loader/> :
        Array.isArray(apiData) ?
          <div className='card-wrapper'>
            {apiData.map((ele, id) => {
              const title = ele.title <= 13 ? ele.title : `${ele.title.slice(0, 13)}...`;
              // const des = ele.description <= 120 ? ele.description : `${ele.description.slice(0, 120)}...`
              return (

                <Card title={title} description={ele.description} img={ele.image} key={id} link={ele.url} />

              )
            })}
          </div> : <p className='error'>No such data found</p>}
    </>
  )
}

export default SearchResult