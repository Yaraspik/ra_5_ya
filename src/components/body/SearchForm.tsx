/**
 * @param {*} props 
 * @returns Выводит логотип, форму поиска и пример ниже поля ввода("Найдётся всё")
 */
export default function SearchForm({ children }: { children: React.JSX.Element }) {
    return (
        <div className="body__search">
            <form className="body__search_form">
                <div className="body__search_logo"><span className="logo letter">Я</span >ндекс</div>
                <input className="body__search_input" />
                <button className="body__search_btn">Найти</button>
            </form>
            <div className="body__search_example">
                Найдётся всё. Например,
                {children}
            </div>
        </div>
    )
}
