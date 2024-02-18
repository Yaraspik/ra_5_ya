import NewsBlock from "../NewBlock/NewsBlock";
import NewsList from "./NewsList";
import ExchangeRates from "./ExchangeRates";
import { DataHeader } from "../../../types/DataHeader";

export default function NewBox({ data }: { data: DataHeader }) {
    return (
        <div className="header__news_box">
            <NewsBlock titles={data.titles} />
            <NewsList news={data.news} />
            <ExchangeRates rates={data.rates} />
        </div>
    )
}