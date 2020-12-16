//1 - написать функцию которая принимает параметром произвольную строку
//2 - на консоле выводит самое длинное слово в предложении


const findLongestWord = function (string) {
    let words = string.split(" ");
    let max = 0;
    let longestWord;

    for (const word of words) {
        let len = word.length;
        if (len > max) {
            max = len;
            longestWord = word;
        }
    }

    return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

