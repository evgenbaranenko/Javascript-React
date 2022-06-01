// 1)При помощи цикла выведите числа от 5 до 10 (включительно)

for (let i = 5; i <= 10; i++) {
    console.log(i);
}

// 2)При помощи цикла for вывести числа от 20 до 10 в консоль. Когда цикл дойдет до числа 13 отстановить весь цикл

for (let i = 20; i >= 10; i--) {
    console.log(i);
    if (i === 14) {
        break;
    }
}

// 3) При помощи цикла for выведите четные числа от 2 до 10 (включительно)

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

/// 4) Перепешите
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

let num = 1;

while (num < 16) {
    num++;
    if (num % 2 != 0) {
        console.log(num);
    }
}


// 5) Заполните массив цифрами от 5 до 10 включительно

const arr = [];

for (let i = 5; i <= 10; i++) {
    arr[i - 5] = i;
}

console.log(arr);




const arrayOfNumbers = [];

for (let i = 5; i < 11; i++) {
    arrayOfNumbers[i - 5] = i;  
}

console.log(arrayOfNumbers);