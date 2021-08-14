import React from "react"
import { MainContainer, FormContainer } from "./styled"
import { useHistory } from "react-router-dom"
import { goToLogin } from "../../routes/coordinator"
import useForm from "../../hooks/useForm"
import useUnprotectedpage from "../../hooks/useUnprotectedPage"
import { register } from "../../services/users"

const RegisterPage = () => {
    useUnprotectedpage()
    const history = useHistory()
    const [form, onChange, clear] = useForm({ username: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        register(form, clear, history)
    }

    return (
        <MainContainer>
            <FormContainer onSubmit={onSubmitForm}>
                <input
                    type="username"
                    placeholder="username"
                    name="username"
                    value={form.username}
                    onChange={onChange}
                    required
                />
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
                <button type="submit">Cadastrar</button>
            </FormContainer>
            <button onClick={() => goToLogin(history)}>Voltar para login</button>
        </MainContainer>
    )
}

export default RegisterPage