import Category from "../../types/Category";

/**
 * @param {*} Array 
 * @returns Выводит блок категорий поиска
 */

export default function Categories({ categories }: { categories: Array<Category> }) {
    return (
        <nav className="search__nav">
            {categories.map((category, index) => <a className="search__nav_item" href={category.href} key={index}>{category.title}</a>)}
        </nav>
    )
}