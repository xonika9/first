let money = prompt("Vash byudzhet na mesyac?", ''),
    time = prompt("Vvedite datu v formate YYYY-MM-DD", '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

let a1 = prompt("Vvedite obyazatel'nuyu stat'yu raskhodov v etom mesyace", ''),
	a2 = prompt("Vo skol'ko obojdetsya?", ''),
	a3 = prompt("Vvedite obyazatel'nuyu stat'yu raskhodov v etom mesyace", ''),
	a4 = prompt("Vo skol'ko obojdetsya?", '');

appData.expenses[a1] = a2;
appData.expenses[a3] = a4;

alert(appData.budget / 30);

console.log('Ваш бюджет', appData.budget);
console.log(a1, '=', a2);
console.log(a3, '=', a4);

