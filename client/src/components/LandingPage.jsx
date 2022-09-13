import React from 'react'
import style from  '../style-sheets/LandingPage.module.scss'
import Logo from '../img/LogoBN.png'
import { NavLink } from 'react-router-dom'

export default function LandingPage() {

    return (


        <div className={style.landing_container}>

            <img src={Logo} />
            <NavLink to='/pokemons'>

                <button>Go to Home Page</button>
            
            </NavLink>
        
        </div>
    )
}
