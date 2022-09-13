import React from 'react'
import style from '../style-sheets/Cards.module.scss'
import Card from './Card.jsx'
import Pokeball from '../img/PokeballLoading.gif'

export default function Cards({pokemons}) {

    return (

        <div className={style.cards_container}>

            {pokemons.length > 0 ? pokemons.map(p => <Card key={p.name + p.id} img={p.img} name={p.name} types={p.types} id={p.id} /> ) : <img className={style.gif} src={Pokeball} alt='pokeball gif' /> }
        
        </div>

    )
}
