import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CadastroUser from './componentes/CadastroUser/CadastroUser';
import ListaUsers from './componentes/ListaUsers/ListaUser';


class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolhePagina = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <CadastroUser irParaLista={this.irParaLista}/>
      case "lista":
        return <ListaUsers irParaCadastro={this.irParaCadastro}/>
      default:
        return <div>Erro! Página não encontrada</div>
    }
  }

irParaCadastro = () => {
  this.setState({telaAtual: "cadastro"})
}

irParaLista = () => {
  this.setState({telaAtual: "lista"})
}

  render() {
    return (
      <div>
        {this.escolhePagina()}
      </div>
    );
  }

  
}

export default App;
