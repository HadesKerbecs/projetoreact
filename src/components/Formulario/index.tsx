import React from 'react';
import Botao from '../Botao';
import './style.scss';

class Formulario extends React.Component{
    render() {
        return(
            <form className="novoJogo">
                <div className="inputContainer">
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
                <div className="inputContainer">
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
                <Botao />
            </form>
        )
    }
}

export default Formulario;