import axios from "axios"
import React, { useState } from "react"
import { useHistory } from "react-router"

export const LoginPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const goBackPage = () => {
        history.goBack()
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()
        const body = {
            email: email,
            password: password
        }
        axios
            .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-prestes-molina/login', body)
            .then((res) => {
                console.log('Deu certo', res.data)
                localStorage.setItem('token', res.data.token)
                history.push("/admin/trips/:id")
            })
            .catch((err) => {
                console.log('Deu errado', err)
            })
    }

    return (
        <div>
            <p>Login</p>
            <form onSubmit={onSubmitLogin}>
                <input
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={onChangeEmail}
                    required
                />
                <input
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                    pattern={"^.{6,}"}
                    title={"A senha deve ter no mínimo 6 digitos"}
                    required
                />
                <button>Fazer Login</button>
            </form>
            <button onClick={goBackPage} >Voltar</button>
        </div>
    )
}