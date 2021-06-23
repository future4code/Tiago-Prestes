import React from "react"
import styled from "styled-components"
import PlaylistCard from "../PlaylistCard"

const ContainerPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
class Playlist extends React.Component {
    state = {
        playlists: [
            {
                "id": "e81ea1d3-be49-4f6f-ace9-8ca1830f210c",
                "name": "Rock"
            },
            {
                "id": "2447eced-e910-4f50-8425-05e3186c3c4e",
                "name": "Alternativa"
            },
            {
                "id": "a7c50366-4a0f-406e-bd9f-bb236ce9b553",
                "name": "Rap"
            },
            {
                "id": "d573e64c-e72e-40c8-87b5-6c7164a40790",
                "name": "Jazz De Rua"
            }
        ]
    }

    render() {
        const playlists = this.state.playlists.map(playlists => {
            return <p><PlaylistCard 
                key={playlists.id}
                mudarPagina={this.props.mudarPagina}
                name={playlists.name}
            /></p>
        })
        return (
            <ContainerPlaylist>
                {playlists}
            </ContainerPlaylist>
        )
    }
}

export default Playlist