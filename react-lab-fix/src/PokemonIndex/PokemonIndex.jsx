import React, { useState } from 'react';
import PokemonForm from './PokemonForm/PokemonForm.jsx'

function PokemonIndex(props){

  const [pokemon, setPokemon] = useState([])

  const getPokemon = async (searchParam) => {
    const searchUrl = `https://pokeapi.co/api/v2/pokemon/${searchParam}/`
    const foundPokes = await fetch(searchUrl)
    if (searchParam === ''){
      setPokemon(foundPokes.results)
    } else {
      setPokemon([foundPokes])
    }
  }
  const pokeList = pokemon.map((poke) =>
    <li key={poke.id}>
      <h3>{poke.name}</h3>
      <p>Weight: {poke.weight} Attack: {poke.moves[0].move.name}</p>
    </li>
  )
  return(
    <div>
      <h1>THESE ARE THE POKEMON</h1>
      <ul>{pokeList}</ul>
      <PokemonForm searchPoke={getPokemon} />
    </div>
  )
}



export default PokemonForm
