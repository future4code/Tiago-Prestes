export const goToFeedPage = (history) => {
    history.push("/")
}

export const goToLogin = (history) => {
    history.push("/login")
}

export const goToRegisterPage = (history) => {
    history.push("/cadastro")
}

export const goToPostPage = (history, id) => {
    history.push(`post/${id}`)
}

