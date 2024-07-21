import { refs } from "./refs.js";
import {
	addDataToLocalStorage,
	getDataFromLocalStorage,
} from "./localStorage-api.js";
import { LS_KEY } from "./keys.js";
//TODO:====================01==========================
// Зроби переключатель світлої і темної теми

refs.checkbox.addEventListener("click", onCheckBoxClick);

// Виклик функції при перезагрузці сторінки

document.addEventListener("DOMContentLoaded", renderSwitch);

function onCheckBoxClick(event) {
	console.log(event.currentTarget.checked);
	const checkbox = event.currentTarget.checked;
	if (checkbox) {
		refs.body.classList.replace("light", "dark");
		addDataToLocalStorage(LS_KEY, "dark");
	} else {
		refs.body.classList.replace("dark", "light");
		addDataToLocalStorage(LS_KEY, "light");
	}
}

function renderSwitch() {
	if (getDataFromLocalStorage(LS_KEY) === "dark") {
		refs.body.classList.replace("light", "dark");
		refs.checkbox.checked = true;
	} else {
		refs.body.classList.replace("dark", "light");
	}
}

//!module 10
//TODO:====================01==========================
// Потрібно створити калькулятор віку. Є контейнер з заголовком "калькулятором віку" і input з введенням дати. Якщо ми натиснемо на input дати, ми зможемо вибрати дату нашого дня народження. Наприклад, якщо ми виберемо дату 17.06.1998 року і натиснемо на "Розрахувати вік", побачимо, що вік розраховується на основі цієї дати і нам у результаті покажеться, що Your age is 25 years old; Якщо нічого не введено, то виводь alert("Please enter your birthday")Використовуй доповіжні функції для роботи.
refs.btn.addEventListener("click", onBtnClick);
function onBtnClick() {
	const userData = new Date(refs.input.value);
	const currentDate = new Date();
	const diff = currentDate - userData;
	const result = getAge(diff);
	refs.outPut.textContent = `Your age is ${result} years old`;
}

function getAge(ms) {
	return Math.floor(ms / (1000 * 60 * 60 * 24 * 365.25));
}
//TODO:====================02==========================
// Напиши скрипт для віджета календаря. В кінцевому результаті повинна відображатися сьогоднішня дата у календарику. Використовуй new Date() для отримання поточного року, місяця, дня тижня та самого дня. Задай відповідні дані у відповідні елементи на html сторінці.

const currentDate = new Date();
const month = currentDate.toLocaleDateString("uk-UA", { month: "long" });
const weekday = currentDate.toLocaleDateString("uk-UA", { weekday: "long" });
const day = currentDate.toLocaleDateString("uk-UA", { day: "numeric" });
const year = currentDate.toLocaleDateString("uk-UA", { year: "numeric" });

refs.calendarContainer.querySelector(".js-month").textContent = month;
refs.calendarContainer.querySelector(".js-day-number").textContent = day;
refs.calendarContainer.querySelector(".js-day").textContent = weekday;
refs.calendarContainer.querySelector(".js-year").textContent = year;

//* promise
//TODO:====================01==========================

// setTimeout(() => {
// 	console.log("1");
// }, 1000);

// console.log("2");

// setTimeout(() => {
// 	console.log("3");
// }, 500);

// console.log("4");

/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }

// function greet() {
// 	//return 'hello world';
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve("hello world");
// 		}, 2000);
// 	});
// }

// greet().then((response) => console.log(response));

// console.log(greet())
//TODO:====================02==========================
/**
 * Перероби код так, щоб усі дані збиралися
 * одноразово і приходили у вигляді масиву
 */

const getData = () =>
	new Promise((res) => {
		setTimeout(() => {
			const data = 1;
			//   console.log(data);
			res(data);
		}, 1000);
	});

const getNewData = () =>
	new Promise((res) => {
		setTimeout(() => {
			const data = 2;
			//   console.log(data);
			res(data);
		}, 1000);
	});

const getAnotherData = () =>
	new Promise((res) => {
		setTimeout(() => {
			const data = 3;
			//   console.log(data);
			res(data);
		}, 1000);
	});

const getLastData = () =>
	new Promise((res) => {
		setTimeout(() => {
			const data = 4;
			//   console.log(data);
			res(data);
		}, 1000);
	});

const newArray = [];

// getData()
// 	.then((response) => {
// 		newArray.push(response);
// 		return getNewData();
// 	})
// 	.then((response) => {
// 		newArray.push(response);
// 		return getAnotherData();
// 	})
// 	.then((response) => {
// 		newArray.push(response);
// 		return getLastData();
// 	})
// 	.then((response) => {
// 		newArray.push(response);
// 		console.log(newArray);
// 	});

// Promise.all([getData(), getNewData(), getAnotherData(), getLastData()]).then(
// 	(response) => console.log(response),
// );

//TODO:====================03==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

const value = prompt("Paste a value:");

function checkValue(value) {
	return new Promise((resolve, reject) => {
		if (isNaN(value)) {
			//* Перевірка на не-число у промпті
			return reject("Enter a valid number");
		}
		if (value % 2 === 0) {
			setTimeout(() => {
				return resolve("even");
			}, 1000);
		}
		setTimeout(() => {
			resolve("odd");
		}, 2000);
	});
}

checkValue(value)
	.then((response) => alert(response))
	.catch((error) => alert(error));
