import React, { useState } from 'react';
import style from './Lista.module.scss';
import Item from './Item';

function Lista(){
    const [jogos, setJogos] = useState([{
        jogo: 'Fortnite',
        tempo: '02:00:00'
    }, {
        jogo: 'Mortal Kombat 1',
        tempo: '01:00:00'
    }, {
        jogo: 'God of War Ragnarok',
        tempo: '03:00:00'
    }]);
    return(
        <aside className={style.listaJogos}>
            <h2 onClick={() => {
                setJogos([...jogos, {jogo: "Need for Speed", tempo: "02:30:00"}])
            }}> Jogos do dia </h2>
            <ul>
                {jogos.map((item, index)=> (
                    <Item 
                    key={index}
                    {...item}
                    />
                ))}
            </ul>
        </aside>   
    )
}

export default Lista;