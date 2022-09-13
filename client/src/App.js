import React, { useEffect } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import createPokemon from './components/CreatePokemon';
import PokemonDetail from './components/PokemonDetail';
import { getPokemons } from './actions';
import { useDispatch } from 'react-redux';


export default function App() {

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getPokemons())

  }, [])
    
  return (

    <div className="App">

      <Switch>

        <Route exact path='/' component={LandingPage} />
        <Route exact path='/pokemons' component={Home} />
        <Route exact path='/create' component={createPokemon} />
        <Route exact path='/pokemons/:id' render={({match})=> <PokemonDetail id={match.params.id} />} />

      </Switch>
      
    </div>

  );

}
