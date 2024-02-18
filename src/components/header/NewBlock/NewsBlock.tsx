import { Titles } from "../../../types/DataHeader";

const date = (date = new Date) => {
    const day = date.getDate();
    const monthNameInGenitiveCase = date.toLocaleString('ru', { month: 'long', day: 'numeric' }).split(' ')[1];
    const weekday = new Intl.DateTimeFormat('ru-RU', { weekday: "long" }).format(date);
    const now = new Date().toLocaleTimeString().slice(0, -3);

    return [`${day} ${monthNameInGenitiveCase} ${weekday} ${now}`];
}
/**
 * @param {Array}
 * @returns Выводит заголовки новостного блока по категориям и дату
 */
export default function NewsBlock({ titles }: { titles: Titles }) {
    return (
        <div className="header__news__category_box">
            <nav className="header__news_categoty">
                {titles.map((el, index) =>
                    <a href={el.url} className="header__news" key={index}>
                        <h4 className="widget__title">{el.title}</h4>
                    </a>
                )}
            </nav>
            <p className="header_news_date">
                {date()}
            </p>
        </div>
    )
}
