import React from "react"
import { useHistory } from "react-router"
import axios from "axios"
import { useEffect, useState } from "react"
import { InputForm, MainContainer, SelectForm } from "./styled"

export const ApplicationFormPage = () => {
    const history = useHistory()
    const [infoProfile, setInfoProfile] = useState()

    useEffect(() => {
        applyList()
    },[])

    const applyList = () => {
        // const body = {
        //     name: 
        //     age:
        //     applicationText:
        //     profession: 
        //     country:
        // }
        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-prestes-molina/trips/:id/apply')
            .then((res) => {
                setInfoProfile(res)
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const goBackPage = () => {
        history.goBack()
    }

    return (
        <MainContainer>
            <SelectForm>Escolha uma Viagem</SelectForm>
            <InputForm placeholder="Nome"></InputForm>
            <InputForm placeholder="Idade"></InputForm>
            <InputForm placeholder="Texto de Candidatura"></InputForm>
            <InputForm placeholder="Profissão"></InputForm> 
            <SelectForm>Escolha uma Viagem</SelectForm>
            <button>Inscrever-se</button>
            <button onClick={goBackPage}>Voltar</button>
        </MainContainer>
    )
}