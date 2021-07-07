import './App.css';
import { CardPerfil } from './componentes/CardPerfil/CardPerfil';
import { TelaMatch } from './componentes/TelaMatch/TelaMatch';
import { BotaoVerMatches } from './componentes/BotaoVerMatches/BotaoVerMatches';
import React, { useState } from "react";


function App() {
  const [tela, setTela] = useState(true)



  const alterarNoclick = (() => {
    setTela(!tela)
  })

  return (
    <div class="App">
      {tela ? <CardPerfil /> : <TelaMatch />}
      <BotaoVerMatches
        alterarNoclick={alterarNoclick}
        tela={tela ? "Ver meus matchs" : "Voltar"}
      ></BotaoVerMatches>
    </div>
  );
}

export default App;
