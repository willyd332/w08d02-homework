import React, { useState } from 'react';
import PokemonForm from './PokemonForm.jsx'

function PokemonIndex(props){

  const [pokemon, setPokemon] = useState([])

  function getPokemon(searchParam){
    console.log("this is defined")
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
