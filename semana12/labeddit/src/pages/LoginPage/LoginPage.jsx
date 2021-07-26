import React from "react"
import { goToRegisterPage } from "../../routes/coordinator"
import { LoginContainer, MainContainer } from "./styled"
import { useHistory } from "react-router-dom"
import useForm from "../../hooks/useForm"
import { login } from "../../services/users"
import useUnprotectedpage from "../../hooks/useUnprotectedPage"

const LoginPage = () => {
    useUnprotectedpage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, history)
    }

    return (
        <MainContainer>
            <LoginContainer onSubmit={onSubmitForm}>
                <input
                    type="email"
                    placeholder="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <button type="submit">Fazer Login</button>
            </LoginContainer>
            <button onClick={() => goToRegisterPage(history)}>Não possuí conta? Cadastre!</button>
        </MainContainer>

    )
}

export default LoginPage