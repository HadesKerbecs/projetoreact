import React from 'react';
import './style.scss';

function Lista(){
    const jogos = [{
        jogo: 'Fortnite',
        tempo: '02:00:00'
    }, {
        jogo: 'Mortal Kombat 1',
        tempo: '01:00:00'
    }, {
        jogo: 'God of War Ragnarok',
        tempo: '03:00:00'
    }]
    return(
        <aside className='listaJogos'>
            <h2> Jogos do dia </h2>
            <ul>
                {jogos.map((item, index)=> (
                    <li key={index} className='item'> 
                        <h3>{item.jogo}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>   
    )
}

export default Lista;