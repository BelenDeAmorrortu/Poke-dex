import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createPokemon, getPokemons, getTypes } from '../actions/index'
import { validate } from './FormValidation'
import style from '../style-sheets/Form.module.scss'

export default function Form() {

    const dispatch = useDispatch()
    const allTypes = useSelector(state => state.types)
    const history = useHistory()

    useEffect(()=>{

        dispatch(getTypes())

    }, [])

    const [input, setInput] = useState({

        name: '',
        experience: '',
        attack: '',
        defence: '',
        speed: '',
        height: '',
        weight: '',
        img: '',
        types: []
    })

    const [errors, setErrors] = useState({})


    function handleChange(e){

        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        if(e.target.name === 'name' || e.target.name === 'img') setErrors({...errors, [e.target.name]: validate(e.target.name, e.target.value)})
    }

    function handleSelect(e){

        setInput({
            ...input,
            types: [...input.types, e.target.value]
        })
    }

    function handleTypeDelete(type){

        setInput({
            ...input,
            types: input.types.filter(t => t !== type)
        })
    }

    function handleSubmit(e){

        e.preventDefault()

        setErrors(validate(input))

        if(errors.name || errors.img){

            alert("Your Pokemon's details have an error, please modify the form")
            return
        }

        if(input.img === '') delete input.img

        dispatch(createPokemon(input))
        dispatch(getPokemons())

        alert('Pokemon Created')
        setInput({    
            name: '',
            experience: '',
            attack: '',
            defence: '',
            speed: '',
            height: '',
            weight: '',
            img: '',
            types: []
        })
        history.push('/pokemons')
    }

    return (
        < >
            <form className={style.form}>

                <div>
                    <label>Name:* <span>{errors.name && errors.name}</span></label>
                    <input value={input.name} placeholder='Name' name='name' type='text' onChange={e => handleChange(e)}/>

                    
                    <label>Experience:</label>
                    <input value={input.experience} placeholder='Experience' name='experience' type='text' onChange={e => handleChange(e)}/>
                    
                    <label>Image: <span>{errors.img && errors.img}</span></label>
                    <input placeholder='Image Url' name='img' type='url' onChange={e => handleChange(e)}/>

                    <label>Types:</label>
                    <select onChange={(e)=> handleSelect(e)}>
                        {allTypes.map( t => <option name='types' key={t.id}>{t.name}</option>)}
                    </select>

                    <div className={style.types_list}>
                        {input.types.map( t => <div><li key={`${t}${Math.random()}`}>{t}</li> <button key={`${t}${Math.random()}button`} onClick={()=> handleTypeDelete(t)}>X</button></div>)}
                    </div>

                </div>

                <div>

                    <label>{`Attack: ${input.attack}`}</label>
                    <input value={input.attack} type="range" name="attack" min="0" max="200" onChange={e => handleChange(e)} className={style.range} />
                    <label>{`Defence: ${input.defence}`}</label>
                    <input value={input.defence} type="range" name="defence" min="0" max="200" onChange={e => handleChange(e)} className={style.range}/>
                    <label>{`Speed: ${input.speed}`}</label>
                    <input value={input.speed} type="range" name="speed" min="0" max="200" onChange={e => handleChange(e)} className={style.range}/>
                    <label>{`Height: ${input.height} m`}</label>
                    <input value={input.height} placeholder='Height' name='height' type='range' min="0" max="3" step='0.1' onChange={e => handleChange(e)} className={style.range} />
                    <label>{`Weight: ${input.weight} kg`}</label>
                    <input value={input.weight} placeholder='Weight' name='weight' type='range' min="0" max="1000" step='0.5' onChange={e => handleChange(e)} className={style.range} />

                </div>

            </form>

            <button className={style.submit_button} onClick={ e => handleSubmit(e)}>Create Pokemon</button>
        
        </>
    )
}
