import axios from "axios"
import React, { useEffect, useState } from "react"
import { BotaoResetar } from "../BotaoResetar/BotaoResetar"
import { MainContainer, ButtonsContainer, ContainerText } from "./styled"

export const CardPerfil = () => {
    const [perfilLista, setPerfilLista] = useState({})


useEffect(() => {
    renderizaPerfil()
},[])//O colchetes faz com que renderize apenas uma de cada vez até atualizar ou modificar.

const renderizaPerfil = () => {
    axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/person/`)
        .then((res) => {
            setPerfilLista(res.data.profile)
            // console.log(perfilLista)
        })
        .catch((err) => {
            console.log(err)
        })
}

const deuMatch = () => {
    const body = {
        choice: true,
        id: perfilLista.id
    }
    axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/choose-person', body)
        .then((res) => {
            console.log(res)
            renderizaPerfil()
        })
}

const rejeitaMatch = () => {
    const body = {
        choice: false,
        id: perfilLista.id
    }
    axios
        .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/choose-person', body)
        .then((res) => {
            console.log(res)
            renderizaPerfil()
        })
}

const resetaMatches = () => {
    axios
        .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/clear')
        .then((res) => {
            renderizaPerfil()
        })
}

    return (
        <MainContainer>
            <h1>astromatch</h1>
            <img src={perfilLista.photo} alt={perfilLista.name}/>
            <ContainerText>
            <p><strong>{perfilLista.name}</strong></p>
            <p>{perfilLista.bio}</p>
            <p>{perfilLista.age}</p>
            </ContainerText>
            <ButtonsContainer>
            <button onClick={deuMatch}>Match</button>
            <button onClick={rejeitaMatch}>Rejeita</button>
            </ButtonsContainer>   
        </MainContainer>
    )
}