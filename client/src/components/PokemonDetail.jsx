import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonById } from '../actions'
import Details from './Details'
import PageTemplate from './PageTemplate'

export default function PokemonDetail({id}) {

    
    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemon)
        
    useEffect(()=>{

        dispatch(getPokemonById(id))

    }, [])

    return (

        <>

            <PageTemplate img={pokemon.img} content={<Details pokemon={pokemon} />} />

        </>

    )
}
