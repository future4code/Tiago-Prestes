import React from "react"
import { MainContainer } from "./styled"

const RegisterPage = () => {
    return (
        <MainContainer>
            <input type="text" placeholder="Nome de usuário" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Cadastrar</button>
        </MainContainer>
    )
}

export default RegisterPage