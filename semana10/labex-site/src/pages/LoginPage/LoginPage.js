import React from "react"
import { useHistory } from "react-router"

export const LoginPage = () => {
    const history = useHistory()

    const goBackHome = () => {
        history.goBack()
    }

    const enterLogin = () => {
        history.push()
    }

    return (
        <div>
            <p>Login</p>
            <input placeholder="E-mail" />
            <input placeholder="Senha" />
            <button onClick={goBackHome} >Voltar</button>
            <button onClick={goBackHome} >Entrar</button>
        </div>
    )
}