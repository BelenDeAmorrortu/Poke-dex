import React from 'react'
import style from '../style-sheets/Pagination.module.scss'

export default function Pagination({pagination, pokemonsPerPage, amountOfPokemons}) {

    const amountOfPages = []

    for(let i = 1; i <= Math.ceil(amountOfPokemons/pokemonsPerPage); i++){
       
        amountOfPages.push(i)
    }

    return (

        <div className={style.pagination_container}>

            <div className={style.pagination}>

                {amountOfPages && amountOfPages.map(num => <span onClick={()=> pagination(num)} key={num} >{num}</span> )}

            </div>
        
        </div>
    )
}
