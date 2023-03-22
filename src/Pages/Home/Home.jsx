import React from 'react'
import Hero from '../../Component/Hero/Hero'
import { useGlobalHook } from '../../Hooks/Context'
import SearchBar from '../searchbar/SearchBar'
import SearchResult from '../searchResult/SearchResult'

const Home = () => {
  const { heroData } = useGlobalHook()
  return (
    <>
      <Hero {...heroData} />
      <SearchResult />
    </>
  )
}

export default Home