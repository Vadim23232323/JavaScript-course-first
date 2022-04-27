'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income : [],
    savings: true
};


function chooseExpensess(){
    for (let i=0; i<2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце?", ''),
            b = prompt("Сколько обойдется?", '');
    
            if ((typeof(a)) ==='string'  && ((typeof(a)!=null)) && ((typeof(b)!=null))
            && a!='' && b!='' && a.length< 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
    
            }
            
    }
}

chooseExpensess();


function chooseOptExpenses() {                             // Функция для определения необязательных расходов

    for (let i = 1; i <= 3; i++) {
        let questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(appData.optionalExpenses);
    }


}
chooseOptExpenses();

// Используем цикл WHILE

// let i = 0;
// while (i < 2) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }



// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {
//          console.log ("bad result");
//          i--;
//     }

//     i++;
// }
// while(i < 2);

function detecDayBudeget () {

    appData.moneyPerDay = (appData.budget/30).toFixed();

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detecDayBudeget();


function detecLevel () {

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else  if (appData.moneyPerDay > 100 && appData.moneyPerDay <2000) {
    console.log("Средний уровень достатка");
} else if (appData.money>2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}
}

detecLevel();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с депозита: " + appData.monthIncome);
    }
}

checkSavings();