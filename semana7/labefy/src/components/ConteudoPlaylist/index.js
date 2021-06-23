import React from "react"
import styled from "styled-components"

const ContainerConteudo = styled.div`
    display: flex;
    flex-direction: columns;
    align-items: center;
`

const FormCriarMusica = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-around;
    width: 50vw;


     div {
         display: flex;
         flex-direction: column;  
     }
`


class ConteudoPlaylist extends React.Component {
    state = {
        tracks: [
                {
                    "id": "ad526338-9e99-4956-b7e8-c2aa27abf537",
                    "name": "BADBADNOTGOOD",
                    "artist": "Time Moves Slow feat.Sam Herring",
                    "url": "https://www.youtube.com/watch?v=UWIIPX_5rbM"
                },
                {
                    "id": "e511c10f-8400-406d-b672-303d8781e05f",
                    "name": "Chinese Man",
                    "artist": "I've Got That Tune - OFFICIAL VIDEO",
                    "url": "https://www.youtube.com/watch?v=kqjeNSNuNPM"
                },
                {
                    "id": "a5e2be74-9f5f-4c15-a65f-a078fdaf0c72",
                    "name": "Thievery Corporation",
                    "artist": "Saudade [Official Audio]",
                    "url": "https://www.youtube.com/watch?v=oznQNIvnaAQ"
                },
                {
                    "id": "29920606-f3a3-41e4-a99d-c5a77acdd067",
                    "name": "Savages",
                    "artist": "You're My Chocolate",
                    "url": "https://www.youtube.com/watch?v=vwwkjI65Q0A"
                },
                {
                    "id": "c68de9b5-cffa-44b7-85fe-b3a18c9736b6",
                    "name": "KOKOROKO",
                    "artist": "ABUSEY JUNCTION // WE OUT HERE",
                    "url": "https://www.youtube.com/watch?v=tSv04ylc6To"
                }

        ]
    }


    render() {
        const renderizaMusica = this.state.tracks.map(musica => {
            return <p>{musica.name}</p>
        })
        return (
            <ContainerConteudo>
                <FormCriarMusica>
                    <div>
                        <label>Nome da Música:</label>
                        <input />
                    </div>
                    <div>
                        <label>Artista:</label>
                        <input />
                    </div>
                    <div>
                        <label>URL da música:</label>
                        <input />
                    </div>
                    <button type="submit">ADD Música</button>
                </FormCriarMusica>
                {renderizaMusica}
                <button onClick={() => this.props.mudarPagina("Playlists")}>Voltar Playlist</button>
            </ContainerConteudo>
        )
    }
}

export default ConteudoPlaylist