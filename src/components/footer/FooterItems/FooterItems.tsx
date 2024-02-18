/**
 * 
 * @param {*} Object 
 * @returns Выводит элемент блока нижней части страницы
 */

export default function FooterItem({ href, title, children }: { href: string, title: string, children: React.JSX.Element }) {
    return (
        <li className="footer__item">
            <a href={href}>
                <h3 className="temperature_text_title">{title}</h3>
            </a>
            {children}
        </li>
    )
}
