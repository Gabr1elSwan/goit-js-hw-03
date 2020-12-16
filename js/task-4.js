//1 - написвать функцию которая форматирует предложение 
//2 - если предложение имеет меньше 40 символов оставляет её такой какая она есть
//3 - если предложение имеет больше 40 символов сокращает её и ставит рядом '...'

const formatString = function (string) {
    if (string.length > 40){ 
    string = string.substr(0, 40);
    string = string + "..."
    }
    return string;
}

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
    formatString(
        "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
    )
);
// вернется форматированная строка