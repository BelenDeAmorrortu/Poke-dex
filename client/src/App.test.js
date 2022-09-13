import React from 'react'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import {configure, mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { MemoryRouter, NavLink } from 'react-router-dom';

import Cards from './components/Cards';
import Card from './components/Card';


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


configure({adapter: new Adapter()})

const mockStore = configureStore([thunk])

const allPokemons = [
    {
      id: 25,
      name: "pikachu",
      experience: 112,
      height: 0.4,
      weight: 6,
      types: [ "electric"],
      attack: 55,
      defence: 40,
      speed: 90,
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
      source: "Api"
  },

  {
    id: 1,
    name: "bulbasaur",
    experience: 64,
    height: 0.7,
    weight: 6.9,
    types: [ "grass", "poison" ],
    attack: 49,
    defence: 49,
    speed: 45,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    source: "Api"
  }
]

const state = {

  pokemons: allPokemons
}

let store = mockStore(state)

const app = mount(<Provider store={store}><MemoryRouter initialEntries={['/pokemons']}><Cards pokemons={state.pokemons}/></MemoryRouter></Provider>);


test('Renders a card for each pokemon', () => {

  expect(app.find(Card)).toHaveLength(2);

});

test('Should pass to Card component the needed properties', () => {

  expect(app.find(Card).at(0).props().id).toEqual(allPokemons[0].id);
  expect(app.find(Card).at(0).props().name).toEqual(allPokemons[0].name);
  expect(app.find(Card).at(0).props().types).toEqual(allPokemons[0].types);
  expect(app.find(Card).at(0).props().img).toEqual(allPokemons[0].img);

  expect(app.find(Card).at(1).props().id).toEqual(allPokemons[1].id);
  expect(app.find(Card).at(1).props().name).toEqual(allPokemons[1].name);
  expect(app.find(Card).at(1).props().types).toEqual(allPokemons[1].types);
  expect(app.find(Card).at(1).props().img).toEqual(allPokemons[1].img);

});

test('Each Card displays Name, Types and an Image of the pokemon', () => {

  expect(app.find("h3").at(0).text()).toEqual(allPokemons[0].name);
  expect(app.find("span").at(0).text()).toEqual(allPokemons[0].types[0]);
  expect(app.find("img").at(0).prop("src")).toEqual(allPokemons[0].img)

  expect(app.find("h3").at(1).text()).toEqual(allPokemons[1].name);
  expect(app.find("span").at(1).text()).toEqual(allPokemons[1].types[0]);
  expect(app.find("span").at(2).text()).toEqual(allPokemons[1].types[1]);
  expect(app.find("img").at(1).prop("src")).toEqual(allPokemons[1].img)

});

test("Each Card has a NavLink to the pokemon's detail page", () => {

  expect(app.find(NavLink).at(0).prop("to")).toEqual(`/pokemons/${allPokemons[0].id}`)
  expect(app.find(NavLink).at(1).prop("to")).toEqual(`/pokemons/${allPokemons[1].id}`)

});


