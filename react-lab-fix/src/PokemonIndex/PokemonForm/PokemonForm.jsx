import React, { useState } from 'react';

function PokemonForm(props){
  const [search, setSearch] = useState('')

  function handleChange(e){
    setSearch(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(props)
    props.searchPoke(search)
  }
  return(
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" name="search" value={search} />
      <input type="submit" />
    </form>
  )
}



export default PokemonForm;
