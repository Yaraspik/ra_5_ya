export type dataFooter = {
    titles: Array<string>,
    weather: {
        src: string,
        temp: string,
        morningTemp: string,
        daytimeTemp: string,
        href: string,
    },
    visited: Array<{ boldText: string, text: string, href: string }>,
    mapOfGermany: { text: string, href: string },
    tvProgram: Array<{ text: string, grayText: string, href: string }>,
    ether: Array<{ text: string, grayText: string, href: string, src: string }>,
}
