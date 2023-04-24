'use strict'

const findNOD = (x, y) => {
    let a = +x;
    let b = +y;


    while (a !== 0 && b !== 0) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
    }
    return a + b
}

const a = prompt("Введите первое число:");
const b = prompt("Введите второе число:");

console.log(`Наибольший общий делитель чисел ${a} и ${b} - ${findNOD(a, b)}.`);
