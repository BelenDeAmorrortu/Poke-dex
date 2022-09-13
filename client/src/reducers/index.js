
const initialState = {

    pokemons: [],
    types: [],
    pokemon: {},
    fixedPokemons: []
}

function rootReducer(state = initialState, action){

    const allPokemons = state.fixedPokemons
    const pokemons = state.pokemons

    switch(action.type){

        case 'GET_POKEMONS':

            return {
                ...state,
                pokemons: action.payload,
                fixedPokemons: action.payload
            }

        case 'CREATE_POKEMON':
            return {
                ...state
            }

        
        case 'GET_TYPES':
            return{
                ...state,
                types: action.payload
            }

        case 'GET_POKEMON_BY_ID':
            return{
                ...state,
                pokemon: action.payload
            }    

        
        case 'FILTER_BY_TYPE':

            let filteredByType
            if(action.payload === 'All') filteredByType = allPokemons
            else filteredByType = allPokemons.filter(p => p.types.includes(action.payload))

            return{
                ...state,
                pokemons: filteredByType
            }
         
        case 'FILTER_BY_SOURCE':
            
            let filteredBySource
            if(action.payload === 'All') filteredBySource = allPokemons
            else filteredBySource = allPokemons.filter(p => p.source === action.payload)

            return{
                ...state,
                pokemons: filteredBySource
            }

        case 'SORT_POKEMONS':

            let orderedPokemons

            if(action.payload === 'Alphabetic_A'){

                orderedPokemons = pokemons.sort( (a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0 )
            }

            else if(action.payload === 'Alphabetic_Z'){

                orderedPokemons = pokemons.sort( (a, b) => a.name < b.name ? 1 : a.name > b.name ? -1 : 0 )
            }

            else if(action.payload === 'Attack_A'){

                orderedPokemons = pokemons.sort( (a, b) => a.attack < b.attack ? -1 : a.attack > b.attack ? 1 : 0 )
            }

            else if(action.payload === 'Attack_D'){

                orderedPokemons = pokemons.sort( (a, b) => a.attack < b.attack ? 1 : a.attack > b.attack ? -1 : 0 )
            }

            else{

                orderedPokemons = pokemons.sort( (a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0 )
            }

            return {
                ...state,
                pokemons: orderedPokemons
            }

        case 'GET_POKEMON_BY_NAME':
            return{
                ...state,
                pokemons: action.payload
            }

        default:
            return state;
    }



}

export default rootReducer