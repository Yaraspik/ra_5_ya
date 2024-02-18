import Categories from "./Categories";
import Banner from "./Banner";
import SearchForm from "./SearchForm";

import DataBody from "../../types/DataBody";

/**
* @param {*} props 
 * @returns Выводит блок категорий поиска, поиск и баннер ниже поиска
 */
const Body = ({ dataBody }: { dataBody: DataBody }) => {
    return (
        <div className="body">
            <div className="body__search">
                <Categories categories={dataBody.categories} />
                <SearchForm><span className="text">фаза луны сегодня</span></SearchForm>
                <Banner href={dataBody.banner.href} src={dataBody.banner.src} />
            </div>
        </div>
    )
}

export default Body;
