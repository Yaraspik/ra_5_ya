import NewBox from "./News/NewBox";
import AddAdvertising from "./advertising/Addadvertising";
import { DataHeader as TypeDataHeader } from "../../types/DataHeader";


/**
 * 
 * @param {Object} props 
 * @returns Выводит шапку страницы (новостной блок и блок анонса)
 */
export default function Header({ dataHeader }: { dataHeader: TypeDataHeader }) {
    return (
        <header className="header">
            <NewBox data={dataHeader} />
            <AddAdvertising advertising={dataHeader.advertising}>
                <img className="advertising__img" src={dataHeader.advertising.src} alt="..." />
            </AddAdvertising>
        </header>
    )
}
