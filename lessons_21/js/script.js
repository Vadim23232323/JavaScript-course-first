// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log('Hello!' + this.name);
//     };
// }

// User.prototype.exit = function (name) {
//     console.log('Пользователь' + this.name + 'ушел');
// }

// let ivan = new User('Ivan', 25),
//     alex = new User('alex', 20);


// console.log(ivan);
// console.log(alex);


// ivan.exit();

// 'use strict'

// function showThis(a,b) {
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     }

// console.log(sum());
// }

// showThis(4,5);
// showThis(6,5);



// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

let user = {
    name: "john"
};

function syName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

console.log(syName.call(user, 'Smith'));
console.log(syName.apply(user, ['Snow']));

function count(number) {
    return this * number;
}

let double = count.bind(2);

console.log(double(3));
console.log(double(10));

// 1) Просто вызов функции - windows/undefined

// 2) Метод обьекта - this = обьект

// 3) Конструктор (new) - this = новый созданный обьект

// 4) Указание конкретного контекста - call, aplly, bind

