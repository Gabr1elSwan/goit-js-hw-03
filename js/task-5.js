//1 - написать функцию которая проверяет её на содержание слов spam и sale
//2 - если в предложении есть хапрезенное слово в консоль выводит true
//3 - если в предложении нет запрещенных слов нет функция возвращает false

let checkForSpam = function (message) {
    let messageForCheck = message.toLowerCase();
    return messageForCheck.includes(`spam`) || messageForCheck.includes(`sale`);
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true