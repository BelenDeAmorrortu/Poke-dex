import React from 'react'
import style from '../style-sheets/Details.module.scss'

export default function Details({pokemon}) {

    return (
   
        <div className={style.detail}>

            <div className={style.div_1}>
                <h1>{pokemon.name}</h1>
                
                <div>
                    <div className={style.color}>
                        <h3>Id</h3>
                        <p>{pokemon.id}</p>
                    </div>
                </div>

                <div>
                    <div className={style.color}>
                        <h3>Experince</h3>
                        <p>{pokemon.experience ? pokemon.experience : '-'}</p>
                    </div>
                </div>

                <div>
                    <div className={style.color}>
                        <h3>Type</h3>
                        { pokemon.types && pokemon.types.length !== 0 ? (pokemon.source === 'Api' ? pokemon.types.map( t => <span key={t}>{t}</span>) : pokemon.types.map( t => <span key={t.name}>{t.name}</span>)): <p>unknown</p>}
                    </div>
                </div>

                <div>
                    <div className={`${style.size} ${style.color}`} >
                        <h4>Height</h4>
                        <p>{pokemon.height ? pokemon.height : '-'} m</p>
                    </div>

                    <div className={`${style.size} ${style.color}`}>
                        <h4>Weight</h4>
                        <p>{pokemon.weight ? pokemon.weight : '-'} kg</p>
                    </div>
                </div>

            </div>

            <div className={style.stats}>

                <div>
                    <h3>Speed</h3>
                    <div className={style.progress_bar}><span style={{'--bar': `${pokemon.speed / 2}%`}}>{pokemon.speed}</span></div>
                
                </div>

                <div>
                    <h3>Attack</h3>
                    <div className={style.progress_bar}><span style={{'--bar': `${pokemon.attack / 2}%`}}>{pokemon.attack}</span></div>
                
                </div>

                <div>
                    <h3>Defence</h3>
                    <div className={style.progress_bar}><span style={{'--bar': `${pokemon.defence / 2}%`}}>{pokemon.defence}</span></div>
                
                </div>

            </div>

        </div>
        
    )
}
