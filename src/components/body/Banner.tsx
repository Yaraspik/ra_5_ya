/**
 * 
 * @param {{ href: string, src: string }} props props
 * @returns Выводит баннер после поиска
 */
export default function Banner({ href, src }: { href: string, src: string }) {
    return (
        <a href={href} className="search__banner">
            <img className="search__banner_img" src={src} alt="..." />
        </a>
    )
}