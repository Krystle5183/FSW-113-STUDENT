export function localTemp(kelvin, country) {
    if (country == "US") {
        return `${(9 / 5 * (kelvin - 273.15) + 32).toFixed(0)}F`;
    } else {
        return `${(kelvin - 273.15).toFixed(0)}C`;
    }
}