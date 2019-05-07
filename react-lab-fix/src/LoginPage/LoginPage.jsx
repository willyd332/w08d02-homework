import React, { useState } from 'react';


function LoginPage(props){
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleChange(e){
    console.log("sdfadsf")
    e.target.name === 'username' ?
    setUsername(e.target.value)
    :
    setPassword(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    props.setUser(username)
  }
  return(
    <div>
      <h1>LOG IN!</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={username} placeholder="username" type="text" name="username"></input>
        <input onChange={handleChange} value={password} placeholder="password" type="password" name="password"></input>
        <input type="submit"/>
      </form>
    </div>
  )
}


export default LoginPage
