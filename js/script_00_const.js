"use strict";

// Примечание: Идентификаторы констант могут быть объявлены как в верхнем,
// так и в нижнем регистре. Но правилом хорошего тона является использование
// верхнего регистра.

// определим MY_FAV как константу и присвоим ей значение 7
const MY_FAV = 7;

// данное присваивание выдаст ошибку - Uncaught TypeError: Assignment to constant variable.
//MY_FAV = 20;

// напечатает 7
console.log("my favorite number is: " + MY_FAV);

// попробуем переопределить константу, будет брошено исключение - Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
//const MY_FAV = 20;

// имя MY_FAV зарезервировано константой выше, данная операция
// выкинет исключение
//var MY_FAV = 20;

// здесь также будет ошибка
//let MY_FAV = 20;

// Важно отметить свойства области видимости уровня блока
if (MY_FAV === 7) {
    // Всё нормально. Создать константу или переменную MY_FAV можно.
    // (работает так же как и let при объявлении в блоке переменных, которые не const)
    const MY_FAV = 20;

    // MY_FAV теперь 20
    console.log("my favorite number is " + MY_FAV);

    // это попадёт в глобальный контекст и выдаст ошибку
    //var MY_FAV = 20;
}

// MY_FAV все ещё имеет значение 7
console.log("my favorite number is " + MY_FAV);

// Выдаст ошибку, потому что константа не инициализирована - Uncaught SyntaxError: Missing initializer in const declaration
// const FOO ;

// const также работает с объектами
const MY_OBJECT = {"key": "value"};

// но, свойства объекта (ключи) можно изменять
MY_OBJECT.key = "otherValue"; 
// Используйте Object.freeze() для того, чтобы сделать объект неизменяемым

// То же самое применимо к массивам
const MY_ARRAY = [];

// Например, можно добавлять элементы в массив
MY_ARRAY.push("A"); // ["A"]
console.log(MY_ARRAY);

// Но менять ссылку на объект массива нельзя. Это вызовет исключение - Uncaught TypeError: Assignment to constant variable
//MY_ARRAY = ["B"]



