/**
 * 
 * @param {*} Object 
 * @returns Выводит элемент блока нижней части страницы
 */

export default function FooterElement({ data, title }: { data: Array<any>, title: string }) {
    return (
        <div className={`footer__item-content ${title}`}>
            <ul className="footer__item-list">
                {data.map((el: any, index: number) =>
                    <li key={index} className="list__item">
                        <a className="list__item_link" href={el.href}>
                            {(title === 'ether') ? <img className="list__item_icon" src={el.src} alt="" /> : <></>}
                            {(title === 'visited') ? <span className={`item__text item__text_${title}`}>{el.boldText}</span> : <></>}
                            <span className={`item__text`}> {el.text}</span>
                            {(title !== 'visited') ? <span className={`item__text item__text_${title}`}>{el.grayText}</span> : <></>}
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
}
