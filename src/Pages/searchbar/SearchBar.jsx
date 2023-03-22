import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useGlobalHook } from '../../Hooks/Context'
import "./searchbar.css"
const SearchBar = () => {

    const { changeHandle, change, clickHandle } = useGlobalHook();

    return (
        <>
            <section className='search'>
                <div className="search-bar">
                    <input type="text" name='input' placeholder='Search a news here...' value={change} onChange={changeHandle} />
                    <button onClick={clickHandle}><BiSearch /></button>
                </div>
            </section>
        </>
    )
}

export default SearchBar