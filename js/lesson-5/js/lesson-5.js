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

//TODO:====================02==========================
// Напиши скрипт для віджета календаря. В кінцевому результаті повинна відображатися сьогоднішня дата у календарику. Використовуй new Date() для отримання поточного року, місяця, дня тижня та самого дня. Задай відповідні дані у відповідні елементи на html сторінці.

//!module 10
//TODO:====================01==========================
// Потрібно створити калькулятор віку. Є контейнер з заголовком "калькулятором віку" і input з введенням дати. Якщо ми натиснемо на input дати, ми зможемо вибрати дату нашого дня народження. Наприклад, якщо ми виберемо дату 17.06.1998 року і натиснемо на "Розрахувати вік", побачимо, що вік розраховується на основі цієї дати і нам у результаті покажеться, що Your age is 25 years old; Якщо нічого не введено, то виводь alert("Please enter your birthday")Використовуй доповіжні функції для роботи.

//* promise
//TODO:====================01==========================

/**
 * Перероби функцію на проміс таким чином, щоб проміс повертав значення
 * через 2 секунди після виклику функції
 */

// function greet() {
//   return 'hello world';
// }

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

//TODO:====================03==========================
/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */
