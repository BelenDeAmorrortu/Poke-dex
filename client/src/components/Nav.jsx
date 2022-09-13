import React, { useEffect, useState } from 'react'
import Logo from '../img/LogoBN.png'
import SearchBar from './SearchBar'
import style from '../style-sheets/Nav.module.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTypes, filterPokemonsByType, filterPokemonsBySource, sortPokemons, getPokemons } from '../actions'

export default function Nav({setSort}){

    const dispatch = useDispatch()
    const allTypes = useSelector(state => state.types)

    const [showFilters, setShowFilters] = useState('hidden')

    useEffect(()=>{

        dispatch(getTypes())

    }, [])

    function handleFilterTypes(e){

        dispatch(filterPokemonsByType(e.target.value))
    }

    function handleFilterSource(e){

        dispatch(filterPokemonsBySource(e.target.value))
    }

    function handleSort(e){
        e.preventDefault()
        dispatch(sortPokemons(e.target.value))
        setSort(`Sorted By ${e.target.value}`)
    }

    function handleVisibility(){

        if(showFilters === 'hidden') setShowFilters('visible')
        else setShowFilters('hidden')

    }

    function handleReset(){

        dispatch(getPokemons())
    }

    return (

        <div className={style.nav_container}>

            <img src={Logo} alt='Pokemon Logo'/>

            <div className={style.search_container}>
                <SearchBar />
                <button className={style.button_show_filters} onClick={handleVisibility}>Filter</button>
                <button className={style.button_reset} onClick={handleReset}>Refresh</button>
            </div>


            <div className={style.filters} style={{visibility: showFilters }}>

                <div>

                    <label>Filter By:</label>

                    <div className={style.filters_select}>

                        <select onChange={(e)=> handleFilterSource(e)}>
                            <option value='All'>All Pokemons</option>
                            <option value='Api'>Existent Pokemons</option>
                            <option value='Database'>Your Pokemons</option>
                        </select>

                        <select onChange={(e)=> handleFilterTypes(e)}> 
                            <option value='All'>All types</option> 
                            {allTypes.map( t => <option name='types' value={t.name} key={t.id}>{t.name}</option>)}
                        </select>

                    </div>

                </div>

                <div>
                    <label>Sort By:</label>
                    <select onChange={ (e) => handleSort(e)}>
                        <option value='Default'>Default</option>
                        <option value='Attack_A'>Attack A</option>
                        <option value='Attack_D'>Attack D</option>
                        <option value='Alphabetic_A'>Alphabetic A-Z</option>
                        <option value='Alphabetic_Z'>Alphabetic Z-A</option>
                    </select>
                </div>

                <button className={style.button_close_filters} onClick={handleVisibility}>X</button>

            </div>

            <NavLink to='/create'>
                <button>Create Pokemon</button>
            </NavLink>
        
        </div>
    )
}
