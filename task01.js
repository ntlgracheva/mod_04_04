'use strict'

const convertToRub = (euro) => {
    let sum = euro;
    return sum * 1.2 * 73
}

const productPrice = +prompt("Введите стоимость покупки в евро");

if (Number.isNaN(productPrice) || productPrice < 0) { console.log("Вы ввели некорректные данные"); }
else {
    console.log(`Стоимость покупки в рублях составляет ${convertToRub(productPrice)}`);
}