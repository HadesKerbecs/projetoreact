import React, { useState } from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { IGame } from '../../types/jogo';
import { v4 as uuidv4 } from 'uuid';


interface Props {
        setJogos: React.Dispatch<React.SetStateAction<IGame[]>>
}
function Formulario({ setJogos }: Props) {
    const [jogo, setJogo] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarJogo(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setJogos( jogosAntigos => 
            [
                ...jogosAntigos, 
                {
                    jogo,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );
        setTempo("00:00");
        setJogo("");
    }
    return(
        <form className={style.novoJogo} onSubmit={adicionarJogo}>
            <div className={style.inputContainer}>
                <label htmlFor="jogo">
                        Adicione um novo jogo
                </label>
                <input 
                type = "text"
                    name = "jogo"
                    id = "jogo"
                    value={jogo}
                    onChange={evento => setJogo(evento.target.value)}
                    placeholder= "Oque você quer jogar"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input 
                type = "time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="03:30:00"
                    required
                />
            </div>
                <Botao type="submit">
                    Adicionar
                </Botao>   
            </form>
    )
}

export default Formulario;