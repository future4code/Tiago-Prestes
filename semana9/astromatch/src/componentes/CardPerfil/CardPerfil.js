import axios from "axios"
import React, { useEffect, useState } from "react"
import { MainContainer, ButtonsContainer, ContainerText } from "./styled"

export const CardPerfil = () => {
    const [perfilLista, setPerfilLista] = useState({})


    useEffect(() => {
        renderizaPerfil()
    }, [])
    const renderizaPerfil = () => {
        axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/person/`)
            .then((res) => {
                setPerfilLista(res.data.profile)
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
            .then(() => {
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
            .then(() => {
                renderizaPerfil()
            })
    }

    return (
        <MainContainer>
            <h1>astromatch</h1>
            <img src={perfilLista.photo} alt={perfilLista.name} />
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