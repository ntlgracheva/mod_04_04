'use strict'

const findMin = (x, y) => {
    let a = +x;
    let b = +y;

    return a < b ? a : b;
}

const a = prompt("Введите первое число:");
const b = prompt("Введите второе число:");

console.log(`Минимальным числом является ${findMin(a, b)}.`);