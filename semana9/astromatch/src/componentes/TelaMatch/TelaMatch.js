import axios from "axios"
import React, { useEffect, useState } from "react"
import { BotaoResetar } from "../BotaoResetar/BotaoResetar"
import { ContainerPerfil } from "./styled"

export const TelaMatch = () => {
    const [perfilMatch, setPerfilMatch] = useState([])

    useEffect(() => {
        renderizaMatches()
    },[])

    const renderizaMatches = () => {
        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/matches')
            .then((res) => {
                setPerfilMatch(res.data.matches)
                console.log(res.data.matches)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const resetaMatches = () => {
        axios
            .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/clear')
            .then((res) => {
                renderizaMatches() 
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div>
            {perfilMatch.map(({name, id, photo, bio, age}) => { //Desestrutar: Chamo tudo quero receber da api.
                return (
                    <ContainerPerfil>
                        <img src={photo} alt={name}/>
                        <p>{name}</p>
                    </ContainerPerfil>
                )
            })}
            <BotaoResetar resetaMatches={resetaMatches} />
        </div>
    )
}