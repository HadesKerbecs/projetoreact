import style from '../Lista.module.scss';
export default function Item({ jogo, tempo }: {jogo: string, tempo: string}) {
    return(
        <li className={style.item}> 
            <h3>{jogo}</h3>
            <span>{tempo}</span>
        </li>
    )
}