import './App.css';
import { PrimeiraEtapa } from './components/Etapa1';
import { SegundaEtapa } from './components/Etapa2';
import { TerceiraEtapa } from './components/Etapa3';
import { EtapaFinal } from './components/Final';
import styled from "styled-components"
import React from 'react';

const Botao = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding-top: 10px;
`


class App extends React.Component {
 state = {
   etapa: 1
 }

 mudarPagina = () => {
   this.setState({ etapa: this.state.etapa + 1 })
 }


 
  render() {  

   const renderizaEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <PrimeiraEtapa />;
        case 2:
          return <SegundaEtapa />;
        case 3:
          return <TerceiraEtapa />;
        case 4:
          return <EtapaFinal />;
      }
    }

    return (
      <div>
        {renderizaEtapa()}
        <Botao>
        <button
        onClick={this.mudarPagina}
        >
        Próxima etapa
        </button>
        </Botao>
      </div>
    )
  }
}

export default App;
