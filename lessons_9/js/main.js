'use strict';

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false;

options.colors = {
    border: "black",
    bg: "red"
};
delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение" + options[key]);
}

console.log(Object.keys(options).length);

let arr = ["first",2,3,"four",5];

arr.pop();

arr.push("2");

arr.shift();

arr.unshift(2);

for (let i = 0; i<arr.length; i++) {
    console.log(arr[i]);
}

console.log(arr.length);

arr.forEach(function(item, i, mass) {
console.log(i + ' :' + item + " (массив: " + mass + ')');
});

console.log(arr);



let mass = [1,2,3,4,6,7];

for (let key in mass) {
    console.log(key);
}
for (let key of mass) {
    console.log(key);
}
for (let key in mass) {
    console.log(mass[key]);
}


let ans = prompt("", ""),
    array = [];


array = ans.split(',');
console.log(array);



let arrjoi = ["erewr", 'sdf', 'sdf', 'sdf'],

i = arrjoi.join(', ');

console.log(i);

let arrsort = ["1", '5', '2', '3'],

    j = arrsort.sort(compareNum);


function compareNum (a,b) {
    return a-b;
}

console.log(arrsort);

