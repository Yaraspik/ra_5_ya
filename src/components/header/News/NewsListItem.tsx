/**
 * 
 * @param {Object} props 
 * @returns Выводит элемент списка новостей
 */
export default function NewsListItem({ children, url, title }: { children: React.JSX.Element, url: string, title: string }) {
    return (
        <li className="header_news_item">
            {children}
            <a href={url}>{title}</a>
        </li>
    )
}
