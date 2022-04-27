// let num=20;

// function showFirstMessage(text) {
//     alert(text);
//     num=10;
//     console.log(num);
// }


// showFirstMessage("Hello world");
// console.log(num);

// let calc = function (a,b){
//     return (a+b);
// }

let calc = (a,b) => a+b



console.log(calc(2,6));


function retVar() {
    let num =50;
    return num;
}

let anotherNum = retVar();

console.log(anotherNum);

let str = "test";

console.log(str.length);
console.log(str.toUpperCase());

let twele = "12.2";

console.log(Math.round(twele));

let twele_2 = "12.2px";

console.log(parseInt(twele_2));

console.log(parseFloat(twele_2));