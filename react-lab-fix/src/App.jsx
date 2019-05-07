import React from 'react';
import './App.css';
import LoginPage from './LoginPage/LoginPage.jsx'
import PokemonIndex from './PokemonIndex/PokemonIndex.jsx'

function App() {

  const [user,setUser] = React.useState(null)

  function logIn(currUser){
    setUser(currUser)
  }

  return (
    <div className="mainApp">
      {!user ? (
        <div>
          <h4>Current User:{user}</h4>
          <LoginPage setUser={logIn}/>
        </div>
      ) : (
        <div>
          <h4>Current User:{user}</h4>
          <PokemonIndex />
        </div>
      )}
    </div>
      );
}

export default App;
