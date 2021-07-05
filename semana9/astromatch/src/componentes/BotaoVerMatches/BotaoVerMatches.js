import React from "react"
import { 
    ContainerButton,
 } from "./styled"

export const BotaoVerMatches = (props) => {

    return (
        <ContainerButton>
            <button onClick={props.alterarNoclick}>{props.tela}</button>
        </ContainerButton>  
    )
}