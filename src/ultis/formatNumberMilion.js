const formatNumberMilion = (number) => {
    if (typeof number !== 'number') return;
    if (number >= 999999) {
        let firstDigit = Math.trunc(number / 1000000);
        let secondNumber = number.toString().slice(1, 2);
        return `${firstDigit}.${secondNumber}M`
    }
    if (number >= 999) {
        let firstDigit = Math.trunc(number / 1000);
        let secondNumber = number.toString().slice(1, 2);
        return `${firstDigit}.${secondNumber}K`
    }
    return number;
}

export default formatNumberMilion;