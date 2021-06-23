import './App.css';
import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import Header from './components/Header';
import CriarPlaylist from './components/CriaçãoPlayList/index'
import GerenciadorPlaylist from './components/GerenciadorPlaylist/index'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vw; */
`
class App extends React.Component {
  state = {
    paginaAtual: "CriarPlaylist"
  }

  mudarPagina = (paginaAtual) => {
    this.setState({paginaAtual: paginaAtual})
  }


  render() {
    const renderizaPagina = () => {
      if (this.state.paginaAtual === "CriarPlaylist") {
        return <CriarPlaylist />
      } else if (this.state.paginaAtual === "GerenciarPlaylist") {
        return <GerenciadorPlaylist />
      }
    }
    return (
      <AppContainer>
        <Header 
        mudarPagina={this.mudarPagina}/>
        {renderizaPagina()}
      </AppContainer>
    );
  } 
}

export default App;
