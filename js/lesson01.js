//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.
// const string = "abcde";
// console.log(string[0]);
// if (string[0] === "a") {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// string.startsWith("a") ? console.log("yes") : console.log("no");

//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// const firstName = "Vic";
// const lastName = "Stashko";
// const firstNameLength = firstName.length;
// const lastNameLength = lastName.length;

// if (firstNameLength > 4 && lastNameLength > 5) {
//   console.log(firstNameLength + lastNameLength);
// } else {
//   console.log("неможливо виконати умову");
// }

// firstNameLength > 4 && lastNameLength > 5
//   ? console.log(firstNameLength + lastNameLength)
//   : console.log("неможливо виконати умову");




//TODO:============task-3=========================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".
// function checkNumber() {
//     const number = prompt('введіть число')
//    return number >= 55 && number <= 99 ? "Число потрапляє в діапазон" : "Число не потрапляє в діапазон" ;
        
// }

// console.log(checkNumber());




//TODO:============task-4=========================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const ageMaxsim = 10 ;
// if (ageMaxsim >= 0 &&  ageMaxsim <= 16) {
//     console.log("child");
// } else if (ageMaxsim >= 17 && ageMaxsim <= 60) {
//     console.log("adault");
// } else if (ageMaxsim >= 61 && ageMaxsim <= 100) {
// console.log("old peopel")
    
// } else {
//     console.log("erro");
// }

//TODO:============task-5=========================
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.
// const drink = prompt("Який напій бажаєте?").toLocaleLowerCase()

// function orderDrink(drink) {
//     switch (drink) {
//       case "кава":
//         return "сумма до сплати 50 грн";

//       case "чай":
//         return "сумма до сплати 30 грн";

//       case "сік":
//             return "сумма до сплати 40 грн";
        
//         default:
//             return "Помилка";
//     }
    
// }

//  console.log(orderDrink(drink));


//* Цикл while and do while
// TODO: 6 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let index = 0;

// while (index <= 100) {
//     console.log(index);
//     index += 1;
// }

// for (let i = 0; i <= 100; i += 1) {
//     console.log(i);
// }


// let number = prompt("Введіть число бульше 100");

// while (number < 100) {
//     number = prompt("Введіть число бульше 100");
// }