'use strict'

const modifyText = (text) => {
    let input = text.trim();
    return input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
}

const str = prompt("Введите ваш текст:");

if (str.length <= 0) { console.log("Вы ввели некорректные данные"); }
else {
    console.log(modifyText(str));
}