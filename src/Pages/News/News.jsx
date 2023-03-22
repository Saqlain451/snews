import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../Component/Card/Card'
import Title from '../../Component/Title/Title'
import { useGlobalHook } from '../../Hooks/Context'
import SearchBar from '../searchbar/SearchBar'
import Loader from '../../Component/Loader/Loader'
import "./news.css"
import Buttons from '../Buttons/Buttons'
const News = () => {

    const { isLoading, apiData,titleChange } = useGlobalHook();

    const Navigate = useNavigate();
    const titleText = {
        text: "Home Page",
        title: "Search in",
        spanTitle: "SNews",
        title2: "App",
        click: () => { Navigate(-1) },
    }

    useState(()=>{titleChange("News Page")},[])
    return (
        <section className='news'>
            <Title {...titleText} />
            <SearchBar />

            <Buttons/>

            {

                isLoading ? <Loader/> :

                    Array.isArray(apiData) ?
                        <div className='card-wrapper'>
                            {apiData.map((ele, id) => {
                                const title = ele.title <= 13 ? ele.title : `${ele.title.slice(0, 13)}...`;
                                const des = ele.description <= 120 ? ele.description : `${ele.description.slice(0, 120)}...`
                                return (
                                    <Card title={title} description={des} img={ele.image} key={id} link={ele.url} />
                                )
                            })}
                        </div>
                        :
                        <p className='error'> No Such Data Found</p>
            }

        </section>
    )
}

export default News