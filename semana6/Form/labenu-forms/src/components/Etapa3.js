import React from "react"
import styled from "styled-components"

const BoxForm = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const TerceiraEtapa = () => {
    
    return (
        <BoxForm>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
            <h3>5. Por que você não terminou o curso de graduação?</h3>
            <input></input>
            <h3>6. Você fez algum curso complementar?</h3>
            <select>
                <option>Escolha</option>
                <option>Sim</option>
                <option>Não</option>
            </select>
        </BoxForm>
    )
}