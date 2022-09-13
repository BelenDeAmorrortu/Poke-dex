import React, { useState } from 'react'
import style from '../style-sheets/SearchBar.module.scss'
import searchIcon from '../img/search.png'
import { useDispatch } from 'react-redux'
import { getPokemonByName } from '../actions'

export default function SearchBar() {

    const dispatch = useDispatch()
    const [name, setName] = useState('')

    function handleChange(e){
        
        setName(e.target.value)
    }

    function handleSearch(e){

        e.preventDefault()
        setName('')
        dispatch(getPokemonByName(name))
    }

    return(

        <div className={style.search_bar}>

            <input type='text' placeholder='Name...' value={name} onChange={e => handleChange(e)} />
            <div onClick={e => handleSearch(e)}><img src={searchIcon}/></div>
        
        </div>
    )
}
