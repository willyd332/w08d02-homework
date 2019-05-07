import React, { useState } from 'react';
import PokemonForm from './PokemonForm/PokemonForm.jsx'

function PokemonIndex(props){

  const [pokemon, setPokemon] = useState([])

  const getPokemon = async (searchParam) => {
    const searchUrl = `https://pokeapi.co/api/v2/pokemon/${searchParam}`
    const foundPokes = await fetch(searchUrl)
    const parsedResults = await foundPokes.json();
    console.log(parsedResults)
    if (searchParam === ''){
      setPokemon(parsedResults.results)
    } else {
      setPokemon([parsedResults])
    }
  }
  console.log(pokemon)
  const pokeList = pokemon.map((poke) =>
    <li key={poke.id}>
      <h3>{poke.name}</h3>
      {poke.moves ?
        <div>
          <p>Weight: {poke.weight}</p>
          <ol> <h3>Attacks:</h3>
            {poke.moves.map((move)=>
              <li>{move.move.name}</li>
            )}
          </ol>
        </div>
      :
      <button onClick={()=>getPokemon(poke.name)}>GET MORE DATA</button>
      }
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



export default PokemonIndex
