"use strict";

//alert('Hello');

//const result = confirm("Are you here?");
//console.log(result);

//const answer = prompt("Вам есть 18?", "18");  // все значения которые приходят от пользователя приходят в виде строки
//console.log(typeof(answer));

///*********************название в диалог окне*назв. в консоле********/
//const answer = +prompt("Сколько вам лет?", "Введите значение"); //prompt выводит диалоговое окно // + к prompt возвращать числовое зачение от пользователя
//console.log(answer + 5); // + 5 прибавляет к значению(числу) от пользователя

const answers = [];//  массив - частный случай от объекта

answers[0] = prompt('Как вас зовут?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers); // document - устаревшая команда javascript

console.log(typeof (answers)); // type of определяет тип данных 
console.log(typeof (null)); // ошибка от старых версий javascript показывает что null это объект
console.log(answers);

