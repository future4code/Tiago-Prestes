import React, { useState } from "react"
import { AreaPrivada } from './componentes/AreaPrivada/AreaPrivada'
import { ListaViagens } from './componentes/ListaViagens/ListaViagens'

export const Home = () => {
    const [selecionaTela, setSelecionaTela] = useState('')

    const renderizaPagina = () => {
        switch(selecionaTela) {
            case 'Area-Privada':
                return <AreaPrivada />
            case 'Lista-viagens':
                return <ListaViagens />
            default:
                return "Erro"
        }
    }

    const irParaAreaPrivada = () => {
        setSelecionaTela('Area-Privada')
    }

    const irParaListaViagens = () => {
        setSelecionaTela('Lista-viagens')
    }


    return (
        <div>
            <p>Home</p>
            {renderizaPagina()}
            <button onClick={irParaAreaPrivada}>Pagina Adim</button>
            <button onClick={irParaListaViagens}>Lista Viagens</button>
        </div>
    )
}