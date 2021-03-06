/*******************    Разница между массивами и объектами   ****************/

const arr = [1, 2, 3]; // массив 
const obj = {
    a: 1,
    b: 2
}; // объект

console.log(arr[1]);

const obj02 = {
    a: 1,
    b: 2
}; // массив - это структура хранения данных в парном формате, где  у нас есть ключ и есть значение


const obj03 = {
    "Anna": 500,
    Alice: 800
};

const obj04A01 = {
    A1: "a", // a  без ковычек все равно читается как тип данных строка (то же самое что и "a")
    '1': "b", // 1 определяется как строка, а не как тип данных число, поэтому в выводе данных черех точку компилятор не может понять что ему выводить
    2: "c",
    3: "veter",

    obj04A02: {
        A2: "aa",
        B2: "bb",
        C2: "cc",

        def: [{
            Text01: "dddd",
            Text02: "ffff"
        }, {
            Text03: "gggg",
            Text04: "hhhh"
        }],

        obj04A03: {
            A3: "aa",
            B3: "bb",
            C3: "cc",

            obj04A05: {
                A5: "aaaaa",
                B6: "bbbbb",
                C6: "ccccc"
            }
        },
        obj04A04: {
            A4: "aa",
            B4: "bb",
            C4: "cc"
        },
    }
};

console.log(obj04A01.A1); // с помощью . можно выводить данные из объекта
console.log(obj04A01[1]); // но с помощью [] надежнее выводить данные из объекта

obj04A01.b = "123423423"; // можем создать новое свойство (ключ b) в нутри объекта obj04 (значение "1234") 
obj04A01["f"] = "4321"; // 

console.log(obj04A01.b); // и вывести значение этого свойства
console.log(obj04A01["f"]); // можно выводить так но нужно обязатель но поставить "" или '' что бы javascript не думал что  с - это переменная

const v = "v"; // объявляем переменную v
obj04A01[v] = "3333"; // присваиваем новые данные [v] в объекте obj04 
console.log(obj04A01[v]); // выводим данные с obj04 ключа v cо значением "3333" в консоль 

const arr2 = ['a', 'b', 'c']; // создаем массив из трех элементов
arr[10] = "3215"; // присваиваем индексу элемента массива 10 значение "3215"
console.log(arr); // получаем  (11) [1, 2, 3, empty × 7, '3215']   - - - так ненадо делать








