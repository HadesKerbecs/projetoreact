import React from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component{
    render() {
        return(
            <form className={style.novoJogo}>
                <div className={style.inputContainer}>
                    <label htmlFor="jogo">
                        Adicione um novo jogo
                    </label>
                    <input 
                    type = "text"
                    name = "jogo"
                    id = "jogo"
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
                id="tempo"
                min="00:00:00"
                max="01:30:00"
                required/>
                </div>
                <Botao>
                    Adicionar
                </Botao>   
            </form>
        )
    }
}

export default Formulario;