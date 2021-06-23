import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: greenyellow;
padding-left: 24px;
padding-right:24px;
`
const ButtonsContainer = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-evenly;
`
const Header = (props) => {
    return (
        <HeaderContainer>
            <h1>Labefy</h1>
            <ButtonsContainer>
                <button onClick={() => props.mudarPagina("CriarPlaylist")}>Cadastrar Playlist</button>
                <button onClick={() => props.mudarPagina("GerenciarPlaylist")}>Gerenciar Playlist</button>
            </ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header