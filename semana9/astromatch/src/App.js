import './App.css';
import { CardPerfil } from './componentes/CardPerfil/CardPerfil';
import { TelaMatch } from './componentes/TelaMatch/TelaMatch';
import { BotaoResetar } from './componentes/BotaoResetar/BotaoResetar';
import React, { useState } from "react";


function App() {
  const [tela, setTela] = useState(true)



  const alterarNoclick = (() => {
    setTela(!tela)
  })

  return (
    <div className="App">
     {tela ? <CardPerfil /> : <TelaMatch />}
     <button onClick={alterarNoclick}>{tela ? "Ver meus matchs" : "Voltar"}</button>
    </div>
  );
}

export default App;
