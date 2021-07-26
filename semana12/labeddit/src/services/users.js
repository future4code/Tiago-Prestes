import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)
        })
        .catch((err) => {
            console.log(err)
            alert("Senha e/ou Email, incorreto!")
        })
}

export const register = (body, clear, history) => {
    axios.post(`${BASE_URL}/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            goToFeedPage(history)
        })
        .catch((err) => {
            console.log(err)
            alert("Erro para enviar o cadastro!")
            clear()
        })
}

export const createPost = (body, clear) => {
    axios.post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
        .then((res) => {
            clear()
        })
        .catch((err) => {
            console.log(err)
            alert("Ocorreu um erro!")
        })
}
