// * Масиви: літерал масиву, елементи, індексація, довжина
//  Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ["jazz", "blues"];
// styles.push("Rock-n-Roll");
// console.log(styles);
// // styles[1] = "Classic";
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift("Rap", "Reggy");
// console.log(styles);
// styles.unshift("Rnb");
// const index = styles.indexOf("blues");
// styles[index] = "Classic";
// console.log(styles);
// //TODO:=========task-1=================
// //Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку за допомогою циклу for і for..of.
// const str = 'JavaScript, HTML, CSS, React';
// const strArray = str.split(",");
// console.log(strArray);
// for (const word of strArray) {
//     console.log(word);
// }
//TODO:=========task-2=================
// Порахуй кількість слів у рядку, використовуючи методи масивів і створи новий рядок, роділений дефісами у нижньому регістрі.
// const message = "JavaScript is a popular programming language.";
// const wordsArray = message.split(" ");
// console.log(wordsArray.length);
// const newMessage = wordsArray.join("-").toLowerCase();
// console.log(newMessage);

//TODO:=========task-4=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." Результат повинен бути розділений комами та пробілами.(використати indexOf)
const wordsArray = ["JavaScript", "HTML", "CSS", "React"];
const substring = "S";
const newArray = [];
for (const word of wordsArray) {
  if (word.indexOf(substring) !== -1) {
    newArray.push(word);
  }
}
// console.log(
//   `Масив елементів, що містять підстроку ${substring}: ${newArray.join(", ")}`
// );

//TODO:=========task-5=================
// Створити масив з 10-ти чисел. Напиши функцію яуа буде шукати найбільше число.

const numbersArray = [1, 0, 5, 46, 23, 15, 4, 800, 7];

// function findMaxNumber(array) {
//   let maxNumber = array[0];
//   for (const number of array) {
//     if (number > maxNumber) {
//       maxNumber = number;
//     }
//   }
//   return maxNumber;
// }

// console.log(findMaxNumber(numbersArray));

function findMaxNumber(array) {
  return Math.max(...array);
}

// console.log(findMaxNumber(numbersArray));
