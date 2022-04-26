'use strict';

let money = prompt("What is your monthly budget?"),
    time = prompt("Enter a date in the format YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optinalExpenses: {},
    income : [],
    savings: false
};

let a1 = prompt("Enter a mandatory expense item for this month"),
    a2 = prompt("How much will it cost?"),
    a3 = prompt("Enter a mandatory expense item for this month"),
    a4 = prompt("How much will it cost?");

appData.expenses.a1=a2;
appData.expenses.a3=a4;


alert("Budget in one day " + money/30);