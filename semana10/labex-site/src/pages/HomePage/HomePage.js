import React, { useState } from "react"

export const HomePage = () => {
    const [selecionaTela, setSelecionaTela] = useState('')


    const irParaAreaPrivada = () => {
        setSelecionaTela('Area-Privada')
    }

    const irParaListaViagens = () => {
        setSelecionaTela('Lista-viagens')
    }


    return (
        <div>
            <p>Home Page</p>
            <button onClick={irParaAreaPrivada}>Pagina Adim</button>
            <button onClick={irParaListaViagens}>Lista Viagens</button>
        </div>
    )
}