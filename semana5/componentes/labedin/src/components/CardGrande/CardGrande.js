import React from 'react';
import { BigcardContainer, Imagem, ContainerTexto} from './Style'

function CardGrande(props) {
    return (
        <BigcardContainer>
            <Imagem src={ props.imagem } />
            <ContainerTexto>
                <Nome>{ props.nome }<Nome />
                <p>{ props.descricao }</p>
            <ContainerTexto />
        <BigcardContainer />
    )
}

export default CardGrande;