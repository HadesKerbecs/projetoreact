import React from 'react';
import {IGame} from '../../types/jogo';
import style from './Lista.module.scss';
import Item from './Item';

interface Props { 
    jogos: IGame[],
    selecionaJogo: (jogoSelecionado: IGame) => void
}

function Lista({ jogos, selecionaJogo }: Props){
    return(
        <aside className={style.listaJogos}>
            <h2> Jogos do dia </h2>
            <ul>
                {jogos.map(item=> (
                    <Item 
                        selecionaJogo ={selecionaJogo}
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </aside>   
    )
}

export default Lista;