import React, { useState, useEffect } from "react"
import axios from "axios"

const PokeCard = (props) => {

    const [pokemon, setPokemon] = useState({})
    // const [nome, setNome] = useState("")
    // const [peso, setPeso] = useState("")

    useEffect(() => {
      renderizaPokemon(props.pokemon)
    })

    const renderizaPokemon = pokeName => {
      axios
          .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
          .then((response) => {
              setPokemon(response.data)
          })
          .catch((err) => {
              console.log(err)
          })
    }

    return (
        <div>
          <p>Nome: {pokemon.name}</p>
          
          <p>{pokemon.weight} Kg</p>
          {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
          {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          )}
        </div>
      )
}

export default PokeCard