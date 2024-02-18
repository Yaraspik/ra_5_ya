import { Advertising } from "../../../types/DataHeader"

/**
 * 
 * @param {Object} props 
 * @returns Выводит блок рекламы
 */
export default function AddAdvertising({ advertising, children }: { advertising: Advertising, children: React.JSX.Element }) {
    return (
        <div className="header__advertising">
            <a href={advertising.href}>
                {children}
                <p className="advertising__title">{advertising.title}</p>
                <div className="advertising__text">{advertising.text}</div>
            </a>
        </div>
    )
}
