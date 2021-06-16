import React from "react"
import styled from "styled-components"

const BoxForm = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const SegundaEtapa = () => {
    
    return (
        <BoxForm>
            <h1>ETAPA 2 - INFORMAÇÕES DE ESCOLARIDADE</h1>
            <h3>5. Qual curso?</h3>
            <input></input>
            <h3>6. Qual a unidade do curso?</h3>
            <input></input>
        </BoxForm>
    )
}