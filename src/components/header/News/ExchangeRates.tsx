import { Rates as RatesType } from "../../../types/DataHeader";
import Rates from "../Rates/Rates";

/**
 * @param {Array} Array
 * @returns Выводит блок курсов валют
 */
export default function ExchangeRates({ rates }: { rates: RatesType }) {
    return (
        <ul className="header__rates_box">
            {rates.map((rate, index) => <Rates key={index} text={rate.text} num={rate.num} difference={rate.difference} />)}
        </ul>
    )
}
