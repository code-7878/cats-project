for (var i = 1, sum = 0; i <= 7;  i++) {
    const prompt = require("prompt-sync")();
    const input = prompt(`Введите количество конфет в ${i} день: `);
    sum = sum + eval(input)}
console.log(`Принцесса ест в неделю ${sum} конфет`)