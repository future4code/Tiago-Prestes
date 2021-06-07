import React from "react"
import styled from "styled-components"

const BoxForm = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const EtapaFinal = () => {
    
    return (
        <BoxForm>
            <h1>Fim do Formulário</h1>
            <h3>Obrigado por participar!</h3>
        </BoxForm>
    )
}