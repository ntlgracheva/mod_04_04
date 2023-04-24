'use strict'

const calculate = (totalSum, productAmount, promoCode) => {

    let sum = totalSum;
    let amount = productAmount;
    let promo = promoCode;

    if (amount > 10) {
        sum = sum * 0.97;
    }

    if (sum > 30000) {
        sum = 30000 + ((sum - 30000) * 0.85);
    }

    if (promo === "METHED") {
        sum = sum * 0.9;
    }
    else if (promo === "G3H2Z1" && sum > 2000) {
        sum = sum - 500;
    }

    return sum
}

const totalSum = prompt("Введите Общую сумму корзины:");
const productAmount = prompt("Введите Количество товаров в корзине:");
const promoCode = prompt("Промокод:");


console.log(calculate(totalSum, productAmount, promoCode));
