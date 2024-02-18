import NewsListItem from "./NewsListItem";
import { News as NewsType } from "../../../types/DataHeader";

/**
 * @param {Array} props
 * @returns  Выводит список новостей
 */
export default function NewsList({ news }: { news: NewsType }) {
    return (
        <ul className="header__new-list">
            {news.map((news, index) =>
                <NewsListItem key={index} url={news.url} title={news.title}>
                    <img src={news.src} alt="..." />
                </NewsListItem>
            )}
        </ul>
    )
}

