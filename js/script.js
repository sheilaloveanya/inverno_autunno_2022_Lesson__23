"use strict" 

/*=============ДОМАШКА=================*/


/*-------------Оператори------------------*/

//  Завдання №1

/*
console.log('35' + - '22');
*/

//  Завдання №2

/*
console.log('35' * '22');
*/

//  Завдання №3

/*
console.log('558' > '22++');
*/

//  Завдання №4

/*
let usersCounter = 0;
let newUsers = usersCounter++;
console.log(newUsers);
*/

//  Завдання №5

/*
console.log(!false && 11 || 18 && !'');
*/

//  Завдання №6

/*
let name = 0;
console.log(name ?? "Без імені")
*/

/*
let name = 0;
console.log(name);

function newFunk() {
let name = 0;
console.log(name);
}
*/


/*-------------IF ELSE. Умовний оператор ? ------------------*/


//  Завдання №1


/*
if (1 === "1") {
console.log('Правда!');	
} else {
console.log('Обман!');	
}
*/

//  Завдання №2

/*
if (5 == "5") {
console.log('Правда!');	
} else {
console.log('Обман!');	
}
*/

//  Завдання №3

/*
let message = (92 > '11' && 58 < 100) ? 'Правда!' : 'Обман!';
console.log(message);
*/

//  Завдання №4

/*
if (0) {
console.log('Обман!');	
} else if (" ") {
console.log('Правда!');	
}
*/


/*-------------Цикли FOR i WHILE. Директиви break i continue. ------------------*/


//  Завдання №1

/*
let num = 0;
while(num < 5){
console.log(++num);
}
*/


/*
let num = 0;
do {
console.log(++num)
} while(num < 5)
/*


/*
for (let i=0; i < 5;){
console.log(++i);
}
*/


// Завдання №2

/*
let num = 8;
while (num) {
console.log(num);
num --;	
}
*/

// Завдання №3

/*
for (let num = 0; num < 3; num++) {
console.log(`Число: ${num}`);
}
/*

/*
let num = 0;
while (num < 3) {
console.log(`Число: ${num++}`);
}
*/


// Завдання №4

/*
for (let num = 0; num < 2; num++) {
for (let size = 0; size < 3; size++)
console.log(size);
}
*/


/*
finisCycle: for (let num = 0; num < 2; num++) {
for (let size = 0; size < 3; size++){
if (size === 1) { break finisCycle };
console.log(size);
}
}
*/


/*-------------Числа. Тип данных number. ------------------*/

// Завдання №1

/*
let numOne = Math.round(1.005 * 100) / 100;
console.log(numOne);
*/

/*
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;// Вірно
console.log(numOne);
*/



// Завдання №2

/*
let value = "135.58px";
*/

/*
let value = parseFloat("135.58px");// Вірно
console.log(value);
*/



//Завдання №3

/*
let value = 58 + "Фрілансер";
(написати відповідь) {
console.log('Результат виразу NaN');	
}
*/

/*
let value = 58 + "Фрилансер";
if (isNaN(value)) {
console.log('Результат выражения NaN');// Вірно
}
*/

//Завдання №4

/*
console.log(Math.max(10, 58, 39, -150, 0));
*/

//Завдання №5

/*
let numOne = Math.floor(58.858);
console.log(numOne);
*/


/*-------------Рядки в JS.Тип данних string.------------------*/


// Завдання №1

/*
let fls = "Фрілансер";
let text = 'Привіт! Я ${fls}';// невірно
console.log(text);
/*

/*
let fls = "Фрілансер";
let text = `Привіт! Я ${fls}`;// вірно
console.log(text);
*/


// Завдання №2

/*
let text = 'фрілансер';
*/

/*
let fls = "фрілансер";
console.log(fls[5]);
*/


// Завдання №3


/*
let text = 123 + "456"; //не вірно
console.log(text);
*/

/*
let text = 123 + + "456"; // вірно
console.log(text);
*/


// Завдання №4

/*
let text = 'фрілансер';
*/

/*
let fls = 'фрілансер';
console.log(fls.toUpperCase());
*/


// Завдання №5

/*
let text = 'фрілансер';
*/

/*
let fls = "фрілансер";
console.log(fls.slice(3,6));
*/


// Завдання №6

/*
let text = 'фрілансер';
console.log(text).includes('лан', 4);
*/



/*=============УРОК 23=================*/

/*-------------Рядки------------------*/

/*
let someString = `Привіт! Як в тебе справи?`;
console.log(someString.length);
*/

/*
let someString = `Привіт! Як в тебе справи?`;
console.log(someString[5]);
*/

/*
let someString = `Привіт! Як в тебе справи?`;
console.log(someString.toUpperCase());
console.log(someString.toLowerCase());
console.log(someString[13].toUpperCase());
*/

/*
let someString = `Привіт! Як в тебе справи?`;
let someStringLower = someString.toLowerCase();
console.log(someStringLower);
console.log(someString.includes('іт'));
console.log(someString.startsWith('При'));
console.log(someString.endsWith('?'));
*/

/*
let someString = `Привіт! Як в тебе справи?`;
let someNewString = someString.slice(0, 11);
console.log(someNewString);
*/

/*
let someString = `Привіт! Як в тебе справи?`;
someString = someString.replace('Як', 'добре');
console.log(someString);
*/

/*-----------Методи чисел--------------------*/

/*
let someNum = 20;
let someNotRoundNum = 25.9;
console.log(Math.floor(someNotRoundNum));
*/

/*
let someNum = 20;
let someNotRoundNum = 25.0001;
console.log(Math.ceil(someNotRoundNum));
/*

/*
let someNotRoundNum = 25.4;
console.log(Math.round(someNotRoundNum));
*/

/*
let someNotRoundNum = -25.9;
console.log(Math.abs(someNotRoundNum));
*/

/*
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
*/

/*
console.log(Math.max(1, 2, 3, -6));
console.log(Math.min(1, 2, 3, -6));
let numMax = Math.max(1, 2, 3, -6);
console.log(numMax);
*/

/*
let someVar = `35.5px`;
let someNum = parseFloat(someVar) + 10;
console.log(someNum);
*/

/*-----------Оператори--------------------*/

/*
let varOne = "10";
let varTwo = "5";
let varSumm = varOne - varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

/*
let varOne = "10";
let varTwo = "5";
let varSumm = varOne / varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

/*
let varOne = "10";
let varTwo = "5";
let varSumm = varOne * varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

/*
let varOne = "10";
let varTwo = "3";
let varSumm = varOne % varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

/*
let varOne = "10";
let varTwo = 5;
let varSumm = varOne + varTwo;
console.log(typeof varSumm);
console.log(varSumm);
*/

/*
let someNum = "5";
let result = +someNum;
console.log(result);

let varOne = "10";
let varTwo = 3;
let varSumm = Number(varOne) + varTwo;
console.log(varSumm);
*/

/*
let someNumOne = 9;
let someNumTwo = 8;
console.log(someNumOne++);
console.log(someNumOne);
console.log(--someNumTwo);
*/

/*
let results = 2 + 3 * 10 / "5";
console.log(results);
*/

/*
let num = 5;
let result = 2 + 3 * 10 / ++num;
console.log(result);
*/

/*
let result = 10 === "10";
console.log(result);
*/


/*
let result = !0;
console.log(Boolean(result));
*/

/*
let result = "" || 0;
console.log(Boolean(result));
*/

/*
let result = 5 && 8;
console.log(Boolean(result));
console.log(result);
*/

/*-----------Умовне вітвлення-------------------*/

/*
let varOne = 5;
let varTwo = 10;

if (varOne > varTwo) {
let result = varOne + varTwo;
console.log(result);
} else {
console.log('else');
}
console.log(`...продовження кoду`);
*/

/*
let varOne = 10;
let varTwo = 10;

if (varOne > varTwo) {
let result = varOne + varTwo;
console.log(result);
} else if (varOne === 10) {
console.log(`varOne = 10`);	
} else {
console.log('else');
}
console.log(`...продовження кoду`);
*/

/*
let varOne = 1;
let varTwo = 2;
let varThree = 3;
let varFour = 4;

if (varOne > 3 || varTwo === 2 && varThree < 4 || varFour > 6) {
console.log('Умова is true');	
}
*/

/*
let varOne = "1";
let varTwo = 2;
let varThree = 3;
let varFour = 4;

if (varOne.length === 1) {
console.log('True');		
}
*/



//let someString = "Привіт! Як справи ?";
/*
console.log(someString[0]);
console.log(someString[1]);
console.log(someString[2]);
console.log(someString[3]);
console.log(someString[4]);
console.log(someString[5]);
console.log(someString[6]);
*/
//console.log(`Кількість символів: ${someString.length}`);
//for (let i = 0; i < someString.length; ++i) {
//console.log(someString[i]);	
//}


/*
let someVar = 10 > 5 ? "10 більше 5" : null;

if (10 > 5) {
let someVar = "10 більше 5";
} else {
let someVar = "10 менше 5";
}
*/





















