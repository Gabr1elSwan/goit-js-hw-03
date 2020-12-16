// 1 - написать функцию через for для каждого из двух масивов
// 2 - функция выводит в консоль в формате [номер элемента] - [значение элемента]
// 3 - номерация начинается с 1 ( index = 1)


const logItems = function (array) {
    let index = 1;
    for (const item of array) {
        index += 1;
        console.log(`${index} - ${item}`);
        
    }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);