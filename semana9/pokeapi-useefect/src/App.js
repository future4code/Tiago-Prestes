import axios from 'axios';
import React, { useState, useEffect } from "react";
import './App.css';
import PokeCard from './components/PokeCard';

const App = () => {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=151/${pokeName}`)
      .then((res) => {
        setPokeList(res.data.results)
        // console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [pokeName])

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }


  return (
    <div className="App">
       <select onChange={changePokeName}>
          <option value={pokeName}>Nenhum</option>
          {pokeList.map((pokemon) => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  )
}

export default App;
