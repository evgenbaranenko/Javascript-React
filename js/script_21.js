 "use strict";

 // const hambutger = 5;
 // const fries = 0;

 // if (hambutger && fries) {
 //     console.log('Я сыт!');
 // } else {
 //     console.log('Ты голоден!');
 // }

 // console.log((hambutger && fries));

 const hamburger = 3;
 const cola = 1;
 const fries = 2;

 console.log(hamburger === 3 && cola && fries);

 if (hamburger === 3 && cola === 1 && fries) {
     console.log('Все сыты!');
 } else {
     console.log('Мы уходим!');
 }

 console.log((hamburger && fries));

 console.log(1 && 0); // оператор && возвращает первое ложное значение если оно есть (в данном случае 0 т.к. 1 не равно 0 - то есть идет сравнение 1  с нулем)
 console.log(1 && 5);
 console.log(null && 5); // тут оператор && возвратит null так как это пустое значение (разрыв ссылки)
 console.log(0 && 'FUCK');
 console.log(5 && 1);

 //----------------- 1) оператор && возвращает первое ложное значение если оно есть (в данном случае 0 т.к. 1 не равно 0 - то есть идет сравнение 1  с нулем)
 //----------------- 2) оператор && возвращает значение ПОСЛЕДНЕГО аргумента, если все значения верны 


 const hamburgerBig = 0;
 const colaBig = 0;
 const friesBig = 0;
 const nuggetsBig = 2;

 if (hamburgerBig === 3 && colaBig === 3 || friesBig === 3 && nuggetsBig) {
     console.log('Все довольны!');
 } else {
     console.log('Мы уходим!');
 }

 let johnReport, alexReport, mariaReport = 'done';
 console.log(johnReport || alexReport || mariaReport);

 console.log(!0);
 console.log(!1);
