import React from 'react'
import Hero from '../../Component/Hero/Hero'
import { useGlobalHook } from '../../Hooks/Context'
import SearchResult from '../searchResult/SearchResult'
import Footer from '../Footer/Footer'

const Home = () => {
  const { heroData,titleChange } = useGlobalHook()
  titleChange("Home");
  return (
    <>
      <Hero {...heroData} />
      <SearchResult />
      <Footer/>
    </>
  )
}

export default Home