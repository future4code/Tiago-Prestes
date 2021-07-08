import axios from "axios"
import React, { useState } from "react"
import { useHistory } from "react-router"

export const LoginPage = () => {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const goBackHome = () => {
        history.goBack()
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) =>{
        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        console.log(email, password)
        const body = {
            email: email,
            password: password
        }
        axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-prestes-molina/login', body)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

   

    

    return (
        <div>
            <p>Login</p>
            <input 
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={onChangeEmail} 
            />
            <input 
            placeholder="Senha"
            type="password"
            value={password}
            onChange={onChangePassword} 
            />
            <button onClick={goBackHome} >Voltar</button>
            <button onClick={onSubmitLogin} >Enviar</button>
        </div>
    )
}