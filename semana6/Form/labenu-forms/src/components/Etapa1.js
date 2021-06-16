import React from "react"
import styled from "styled-components"

const BoxForm = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const PrimeiraEtapa = () => {
    
    return (
        <BoxForm>
            <h1>ETAPA 1 - DADOS GERAIS</h1>
            <h3>1. Qual seu nome?</h3>
            <input></input>
            <h3>2. Qual seu idade?</h3>
            <input></input>
            <h3>3. Qual seu email?</h3>
            <input></input>   
            <h3>4. Qual seu escolaridade?</h3>
            <select>
                <option>Escolha</option>
                <option>Ensino médio</option>
                <option>Ensino superior</option>
                <option>Ensino médio incompleto</option>
                <option>Ensino superior incompleto</option>
            </select>
        </BoxForm>
    )
}