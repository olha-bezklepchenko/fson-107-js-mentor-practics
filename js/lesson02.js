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




// * Літерал об'єкта
//TODO:============task-1=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'


// const human = {
//     userName: "Mango" ,
//     hobby: "footboll",
//     age: 34,
//     greet() {
//         console.log(`Hallo ${this.userName}`);
//     }
// }

// console.log(human.age);
// human.greet()
// human.mood = "happy"
// console.log(human);
// human.hobby = "skydiving"
// console.log(human);




//TODO:============task-2======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//     name: 'Igor',
//     car: 'Mercedes',
//     carColor: 'black',
//   };
//   function getBool(object, key) {
// //     const keys = Object.keys(object) ;
// //    return keys.includes(key)
// for(const value in object) {
//     if(value === key) {
//         return true;
//     }
    
// }
// return false;
//   }
//   console.log(getBool(obj, "model"));