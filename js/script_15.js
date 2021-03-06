"use strict";

console.log('arr' + " - object");
console.log(4 + " - object");
console.log(4 + "5"); // + перед строчкой позволяет динамически превращать строку  в числовое значение 

let incr = 10,
    decr = 10;

incr++; // incr - оператор инкримента - увеличение на еденицу
decr--; // decr - оператор декремента - уменьшенение на еденичку

console.log(incr);
console.log(decr);

incr++; // постфиксная запись оператора инкремента 
decr--; // постфиксная запись оператора декремента
++incr; // префиксная запись оператора инкремента 
--decr; // префиксная запись оператора декремента

console.log(incr++); // так выводится сначала переменная потом операция инкримента
console.log(decr--); // так выводится сначала переменная потом операция дикремента
console.log(++incr); // так выводится сначала операция инкримента потом переменная 
console.log(--decr); // так выводится сначала операция дикремента потом переменная  

console.log(5 % 2); //остаток от деления

console.log(2 * 4 == 8); // ==  - это операция равенства. Будет true (в консоле)

console.log(2 * 4 == '8'); // будет true (в консоле) потому что мы сравниваем по значению, а не по типу данных

console.log(2 * 4 === '8'); // === - это уже строгое сравнение (результат будет false) 

console.log(2 * 4 === 8); // === - это уже строгое сравнение (результат будет true) 

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose); // && - логический оператор и 
console.log(isChecked || isClose); // || - логический оператор или
console.log(!isChecked || isClose); // !isClosed - "!" делает переменную isChecked - false 

console.log(2 * 4 != 6); // != - это не равенство "!=" будет true, потому что 2*4=8, а не 6
console.log(2 * 4 !== 6); // !== - это строгое сравнение по типу будет true потому что тип числовой  равен типу числовому
console.log(2 * 3 != '6'); // != - это сравнение результат оператора "!="" будет false, потому что 2*3=6, а это правда
console.log(2 * 3 !== '7'); // != - это строгое сравнение оператора "!==" по типу будет true - потому что тип числовой не равен типу числовому)