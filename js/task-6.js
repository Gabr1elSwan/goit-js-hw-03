//1 - написать скрипт для ввода чисел через prompt
//2 - все числа в введенные в prompt сохраняются и добавляются в масив чисел numbers
//3 - после того как было нажато отмена или ОК, выводит в консоль сумму числе введенных в prompt

let input;
const numbers = [];
let total = 0;

do {
    input = prompt("Введите число");
    numbers.push(Number(input));
} while (input !== null);

if (numbers.length > 0) {
    for (const number of numbers) {
        total += number;
    }
}

console.log(`Общая сумма чисел равна ${total}`);