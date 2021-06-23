import React from "react"
import styled from "styled-components"
import Playlist from "../Playlists"
import ConteudoPlaylist from "../ConteudoPlaylist"

const ContainerGerenciador = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
class GerenciadorPlaylist extends React.Component {
    state = {
    paginaAtual: "Playlists"
    }

    mudarPagina = (paginaAtual) => {
        this.setState({paginaAtual: paginaAtual})
      }

    render() {
        const renderizaPagina = () => {
            if(this.state.paginaAtual === "Playlists") {
                return <Playlist 
                mudarPagina={this.mudarPagina}
                />
            } else if (this.state.paginaAtual === "ConteudoPlaylist") {
                return <ConteudoPlaylist 
                mudarPagina={this.mudarPagina}
                />
            }
        }
        return (
            <ContainerGerenciador>
                {renderizaPagina()}
            </ContainerGerenciador>
        )
    }
}

export default GerenciadorPlaylist