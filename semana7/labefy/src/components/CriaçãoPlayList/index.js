import React from "react"
import styled from "styled-components"

const ContainerPlaylist = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 1000px;
height: 500px;
border: solid green 2px;
margin: 0 auto;
`
const ContainerCriarplaylist = styled.form`
display: flex;
flex-direction: column;
align-items: center;
width: 500px;
height: 200px;
border: solid black 1px;
justify-content: space-around;
`

class CriarPlaylist extends React.Component {
   

    render() {
        return (
            <ContainerPlaylist>
                <h1>Cadastrar nova Playlist</h1>
                <ContainerCriarplaylist>
                    <label>Nova Playlist</label>
                    <input
                        placeholder="Nome da Playlist"
                    />
                    <button type="submit">Cadastrar Playlist</button>
                </ContainerCriarplaylist>
            </ContainerPlaylist>
        )
    }
}

export default CriarPlaylist