import React, {useState} from 'react';
import Formulario from '../components/Formulario'
import Lista from '../components/Lista'
import style from './App.module.scss';
import Cronometro from '../components/Cronometro';
import { IGame } from '../types/jogo';

function App() {
  const [jogos, setJogos] = useState<IGame[]>([]);
  const [selecionado, setSelecionado] = useState<IGame>();

  function selecionaJogo(jogoSelecionado: IGame){
    setSelecionado(jogoSelecionado);
    setJogos(jogosAnteriores => jogosAnteriores.map(jogo => ({
      ...jogo,
      selecionado: jogo.id === jogoSelecionado.id ? true : false
    })));
  }

  function finalizarJogo() {
    if(selecionado) {
      setSelecionado(undefined);
      setJogos(jogosAnteriores => jogosAnteriores.map(jogo => {
        if(jogo.id === selecionado.id) {
          return {
            ...jogo,
            selecionado: false,
            completado: true
          }
        }
        return jogo;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
        <Formulario setJogos={setJogos}/>
        <Lista 
          jogos={jogos}
          selecionaJogo={selecionaJogo}
        />
        <Cronometro 
          selecionado={selecionado} 
          finalizarJogo={finalizarJogo} 
        />
    </div>
  );
}

export default App;
