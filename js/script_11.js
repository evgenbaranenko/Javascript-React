"use strict";

let number = 4.6;   //тип данных число

console.log(-4/0);
console.log("string" * 9);

const persone = "Alex + 5 "; //тип данных строка
console.log(persone);

//const bool_1 = true;      // булевой (логический тип данных)
//const bool_2 = false;

//console.log(something);  // получаем null - ошибка ссылочного типа 

let und; // пустая переменная (значение undefined)
console.log(und); // при выводе в консоль получим undefined (пустое значение)


/***************************   ТИП ДАННЫХ ОБЪЕКТ   ***********************/
// переменная obj в которую мы помещаем объект, внутри "{}" содержатся данные, которые называются свойствами объекта 
// и действия, которые называются методами
                             
const obj = { 
name: "John",            // name - это ключ "John" - значение
age: 25,
isMarried: false
};

console.log(obj.age);
// console.log(obj["name"]);  // такой способ через "[]" тоже работает, но лучше обращаться через "." -----> console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 2,  'apple.bmp'];     // тип данных массив, в массив можно поместить любой тип данных
                                                           // массив является частным случаем объектов в javascript 
 console.log(arr[1]);
