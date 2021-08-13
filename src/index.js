module.exports = function toReadable (number) {
    let numArr = number.toString().split('');
    const arr = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const dozens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
    const hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];
    if (number === 0) return 'zero';
    if (number < 20) return arr[number];
    if (number >= 20 && number <100) {
        let result = dozens[numArr[0]] + ' ' + arr[numArr[1]];
        return result.trim();
    };
    if (number > 100 && number < 120 || number > 200 && number < 220 || number > 300 && number < 320 || number > 400 && number < 420 || number > 500 && number < 520 || number > 600 && number < 620 || number > 700 && number < 720 || number > 800 && number < 820 || number > 900 && number < 920) {
        let lessTwenty = +numArr.slice(1).join('');
        return hundreds[numArr[0]] + ' ' + arr[lessTwenty];
    };
    if (number >= 100) {
        result = hundreds[numArr[0]] + ' ' + dozens[numArr[1]] + ' ' + arr[numArr[2]];
        return result.trim();
    };
};