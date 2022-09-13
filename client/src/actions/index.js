import axios from 'axios';

export function getPokemons(){

    return async (dispatch)=>{

        let pokemons = await axios.get('http://localhost:3001/pokemons')

        return dispatch({ type: 'GET_POKEMONS', payload: pokemons.data })
    }
}

export function createPokemon(payload){

    return async(dispatch)=>{

        try{

            let post = await axios.post('http://localhost:3001/pokemons', payload)

            return dispatch({type: 'CREATE_POKEMON'})

        }

        catch(e){

            console.log(e.response.data)

        }


    }
}

export function getTypes(){

    return async(dispatch)=>{

        let types = await axios.get('http://localhost:3001/types')

        return dispatch({type: 'GET_TYPES', payload: types.data})
    }
}

export function getPokemonById(id){

    return async(dispatch)=>{

        let pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`)

        return dispatch({type: 'GET_POKEMON_BY_ID', payload: pokemon.data})
    }
}

export function filterPokemonsByType(type){

    return { type:'FILTER_BY_TYPE', payload: type }
}

export function filterPokemonsBySource(source){

    return { type:'FILTER_BY_SOURCE', payload: source }
}

export function sortPokemons(sortMethod){

    return { type: 'SORT_POKEMONS', payload: sortMethod }
}

// export function getPokemonByName(name){

//     return async(dispatch)=>{

//         try{

//             let pokemon = await axios.get(`http://localhost:3001/pokemons?name=${name}`)

//             return dispatch({type: 'GET_POKEMON_BY_NAME', payload: pokemon.data})

//         }

//         catch(e){

//             alert(e.response.data)
//         }


//     }

    
// }


export function getPokemonByName(name){

    return async(dispatch)=>{

        

        axios.get(`http://localhost:3001/pokemons?name=${name}`)

        .then(pokemon => dispatch({type: 'GET_POKEMON_BY_NAME', payload: pokemon.data}))

        .catch( e => alert(e.response.data))
        
    }

}
