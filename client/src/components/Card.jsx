import React from 'react'
import { NavLink } from 'react-router-dom'
import style from '../style-sheets/Card.module.scss'

export default function Card({img, types, name, id}) {

    return (

        <NavLink to={`/pokemons/${id}`} className={style.link}>


            <div className={style.card_container} >

                <div className={style.row}>
                    <img src={img} alt={`${name} ilustration`} />
                    <div className={style.types}>
                        {types.map(t => <span key={t}>{t}</span>)}
                    </div>
                </div>

                <h3>{name}</h3>

                <div className={style.outside_div}>

                </div>

            </div>


        </NavLink>

    )
}
