import React from "react"
import { MainContainer } from "./styled"

const LoginPage = () => {
    return (
        <MainContainer>
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <button>Entrar</button>
            <button>Cadastrar</button>
        </MainContainer>
    )
}

export default LoginPage