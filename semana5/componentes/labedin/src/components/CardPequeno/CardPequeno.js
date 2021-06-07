import React from 'react';
import styled from "styled-components"

const SmallcardContainer = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 5px 5px;
    margin-bottom: 10px;
    width: 550px;
`

const Imagem = styled.img `
    width: 25px;
    margin-right: 10px;
    border-radius: 50%;
`

const Nome = styled.h4 `
    margin-right: 5px;
    text-align: center;
`

const ContainerTexto = styled.div `
    display: flex;
    justify-items: center;
`

function CardPequeno(props) {
    return (
        <SmallcardContainer>
            <Imagem src={ props.imagem} />
            <ContainerTexto>
                <Nome>{ props.titulo}</Nome>
                <p>{ props.descricao}</p>
            </ContainerTexto>
        </SmallcardContainer>
    )
}

export default CardPequeno;

