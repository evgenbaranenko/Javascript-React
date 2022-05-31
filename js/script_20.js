"use strict";

if (1) {
    console.log('Ok!');
} else {
    console.log('Error!');
}

const num = 1010;
if (num < 51) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok!');
}

const num2 = 50;
(num2 === 50) ? console.log('Ok!'): console.log('Error');

const num3 = 1;

switch (num3) { // switch работает на строгое сравнение между типами данных
    case 49:
        console.log('Неверно!');
        break;
    case 100:
        console.log('Неверно!');
        break;
    case 50:
        console.log('В точку!');
        break;
    default:
        console.log("Неверно введенное значение!");
        break;
};