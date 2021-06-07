import logo from './logo.svg';
import './App.css';
import { PrimeiraEtapa } from './components/Etapa1';
import { SegundaEtapa } from './components/Etapa2';
import { TerceiraEtapa } from './components/Etapa3';
import { EtapaFinal } from './components/Final';

function App() {
  return (
    <div>
      <PrimeiraEtapa></PrimeiraEtapa>
      <SegundaEtapa></SegundaEtapa>
      <TerceiraEtapa></TerceiraEtapa>
      <EtapaFinal></EtapaFinal>
    </div>
  );
}

export default App;
