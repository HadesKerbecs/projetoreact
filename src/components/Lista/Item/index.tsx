import { IGame } from '../../../types/jogo';
import style from './Item.module.scss';

interface Props extends IGame{
    selecionaJogo: (jogoSelecionado: IGame) => void
}

export default function Item({ jogo, tempo, selecionado, completado, id, selecionaJogo}: Props) {
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
        onClick={() => !completado && selecionaJogo({
            jogo,
            tempo,
            selecionado,
            completado,
            id,
        })}> 
            <h3>{jogo}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label='jogo completado'></span>}
        </li>
    )
}