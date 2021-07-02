import axios from "axios"
import React, { useEffect, useState } from "react"

export const CardPerfil = () => {
    const [perfilLista, setPerfilLista] = useState({})


useEffect(() => {
    renderizaPerfil()
},[])//O colchetes faz com que renderize apenas uma vez até atualizar ou modificar.

const renderizaPerfil = () => {
    axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/person/`)
        .then((res) => {
            setPerfilLista(res.data.profile)
            console.log(perfilLista)
        })
        .catch((err) => {
            console.log(err)
        })
}

    return (
        <div>
            <h1>astromatch</h1>
            <button>Match</button>
            <img src={perfilLista.photo} alt={perfilLista.name}/>
            <p>{perfilLista.name}</p>
            <p>{perfilLista.bio}</p>
            <p>{perfilLista.age}</p>
        </div>
    )
}