import React from "react"
import { useHistory } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import { MainContainer, Title } from "./styled"

export const ListTripsPage = () => {
    const history = useHistory()
    const [ tripDetail, setTripDetail ] = useState([])

    useEffect(() => {
        renderList()
    },[])

    const renderList = () => {
        axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-prestes-molina/trips')
            .then((res) => {
                setTripDetail(res.data.trips)
                console.log(res.data.trips)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const goBackPage = () => {
        history.goBack()
    }

    const goToSignUp = () => {
        history.push("/trips/application")
    }

    return (
        <div>
            <button onClick={goBackPage}>Voltar</button>
            <button onClick={goToSignUp}>Inscrever-se</button>
            {tripDetail.map(({id, name, description, planet, durationInDays, date}) => {
                return (
                    <MainContainer key={id}> 
                        <Title>{name}</Title>
                        <p>Descrição: {description}</p>
                        <p>Planeta: {planet}</p>
                        <p>Duração: {durationInDays} dias</p>
                        <p>Data: {date}</p>
                    </MainContainer>
                   
                )
            })}
        </div>
    )
}