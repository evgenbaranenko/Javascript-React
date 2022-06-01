"use strict";

let result = "";
let result2 = "";
const lenght = 10;

for (let i = 0; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += '\n';
}
console.log(result);

