import React from "react"
import styled from "styled-components"

const ContainerPlaylistCard = styled.div`
    margin: 12px;
    display: flex;
    align-items: center;
`

const NomeContainer = styled.div`
    margin: 8px;
`
const BotaoDelete =styled.p`
    color: red;
`

class PlaylistCard extends React.Component {


    render() {
        return (
            <ContainerPlaylistCard>
                <button onClick={() => this.props.mudarPagina("ConteudoPlaylist")}>Abrir Playlists</button>
                <NomeContainer>{this.props.name}</NomeContainer>
                <BotaoDelete>X</BotaoDelete>
            </ContainerPlaylistCard>
        )
    }
}

export default PlaylistCard