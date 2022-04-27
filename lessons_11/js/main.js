'use strict';
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income: [],
    savings: true,
    chooseExpensess: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце?", ''),
                b = prompt("Сколько обойдется?", '');

            if ((typeof (a)) === 'string' && ((typeof (a) != null)) && ((typeof (b) != null)) &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {

            }

        }
    },
    detecDayBudeget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();

        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detecLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.money > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислете через запятую)', '');
        if ((typeof (items)) === 'string' && (typeof (items) != null) && (items != '')) {
        
        }
        else {
            appData.income = items.split(', ');
        appData.income.push(prompt("Может чтот-то еще"));
        appData.income.sort(a-b);
        }
        appData.income.forEach (function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + itemmassive);
        });

    }


    
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}