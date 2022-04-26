'use strict';

if (2 * 4 == 8) {
    console.log("Верно")
} else {
    console.log("Неверно")
};

let num = 101;

if (num < 49) {

    console.log("Неверно")
} else if (num > 100) {
    console.log("Больше 100")
}

(num == 50) ? console.log('Верно!'): console.log("Неверно!");

num = 10;

switch (num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("верно");
        break;
    case num > 80:
        console.log("почти верно");
        break;
    default:
        console.log("Что то пошло не так");
        break;
}

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i<8; i++) {
    console.log(i);
}