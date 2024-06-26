//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

const performOperation = (a, b, callback) => callback(a * b);

const callback = (number) =>
    number % 2 === 0 ? Math.pow(number, 2) : Math.sqrt(number);

// const callback = number => {
//   if (number % 2 === 0) {
//     return Math.pow(number, 2);
//   } else {
//     return Math.sqrt(number);
//   }
// };

// const result = performOperation(31, 41, callback);
// const result1 = performOperation(30, 40, callback);
// console.log(result);
// console.log(result1);

//TODO:============task-02=========================
// Напишіть функцію, яка приймає масив і колбек-функцію. Функція повинна повернути перший елемент масиву,
//який задовольняє умову, визначену в колбек - функції. Якщо такого елементу немає, функція
// повинна повернути null. Також необхідно написати 2 різні колбеки. При використанні першого колбеку має
// повертатись перше парне число. При використанні другого - має повертатись перше слово у масиві, що починається з літери
// "O" у будь - якому реєстрі.

// const numbers = [1, 2, 5, 7, 9, 20];
// const words = ["apple", "banana", "orange", "pear"];

// const findElement = (array, callback) => {
//   let result = null;
//   array.forEach((element) => {
//     if (callback(element) && result === null) {
//       result = element;
//     }
//   });
//   return result;
// };

// const isEven = (number) => {
//   return number % 2 === 0;
// };

// const startWithO = (words) => {
//   return words.toLowerCase().startsWith("o");
// };

// const res = findElement(numbers, isEven);
// const res2 = findElement(words, startWithO);
// console.log(res);
// console.log(res2);

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const getNewArray = (array) => array.map(num => num * num);

// const res = getNewArray([1, 2, 3, 4, 5]);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const flatArray = (array) => array.flatMap(element => element.values);

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const checkAge = (array) => array.some(element => element.age > 20);

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const checkEvenArray = (array) => array.every(element => element % 2 === 0);

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 2, 3, 4, 5];

// const getNumber = (array, value) => array.find(element => element > value);
// const res = getNumber(numbers, 3);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// // const sortedArray = array => array.toSorted((a, b) => b - a);

// const sortedArray = array => [...array].sort((a, b) => b - a);

// const res = sortedArray(numbersArray);
// console.log(res);
// console.log(numbersArray);
//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const sortedArray = array => array.toSorted((a, b) => a.localeCompare(b));
// const res = sortedArray(stringArray);
// console.log(res);

//TODO:=========task-08=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];
// // const checkArray = users => users.filter(element => element.age > 20);

// const checkArray = users => users
//   .filter(element => element.age > 20)
//   .map(element => element.name)
//   .toSorted((a, b) => a.localeCompare(b));

// const result = checkArray(user);
// console.log(result);

//TODO:=========task-09=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const sum = array => array.reduce((acc, element) => (acc += element), 0);

// const res = sum(numbers);
// console.log(res);

//TODO:=========task-10=================
// У вас є масив чисел, і вам потрібно знайти середнє значення цих чисел. Напишіть функцію, яка приймає масив чисел і повертає середнє значення.

// const arr = [1, 2, 3, 4, 5];

// const averageValue = array => array.reduce((acc, element) => acc += element / array.length, 0);
// const res = averageValue(arr);
// console.log(res);

//! class
//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// class Calculator {
//     constructor() {
//         this.result = 0;
//     }

//     number(num) {
//         this.result = num;
//         return this;
//     }

//     getResult() {
//         return this.result
//     }

//     add(num) {
//         this.result += num;
//         return this;
//     }

//     substruct(num) {
//         this.result -= num;
//         return this;
//     }

//     divide(num) {
//         this.result /= num;
//         return this;
//     }

//     multiply(num) {
//         this.result *= num;
//         return this;
//     }
// }

// const calculator = new Calculator();
// console.log(calculator);

// const res = calculator
//     .number(10)
//     .add(10)
//     .divide(2)
//     .multiply(4)
//     .substruct(5)
//     .getResult();

// console.log(res);

// const res2 = calculator
//     .number(20)
//     .substruct(40)
//     .multiply(-8)
//     .divide(160)
//     .add(20)
//     .getResult();

// console.log(res2);

//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

// class Client {
//     #login;
//     #email;

//     constructor(login, email) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const client = new Client("Mango", "mango@gmail.com");

// client.login = 12343;

// client.email = "mango555@gmail.com";
// console.log(client.email);
// client.login = "12345";
// console.log(client.login);

// console.log(client);
//! Практика наслідування у класах.
//TODO:=========task-04=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/
class Person {
  

  constructor(name, age, gender, email) {
    this.name = name
     this.age = age
     this.gender = gender
     this.email = email
}
getDetails() {
  return {
    name: this.name,
    age: this.age,
    gender: this.gender,
    email: this.email
}
  }
  }
const person = new Person('John', 30, 'male', 'john@hmail.com');

console.log(person.getDetails());

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/
// class Employee extends Person {
//   constructor(salary, department, name, age, gender, email) {
//     super(name, age, gender, email)
//     this.salary = salary;
//     this.department = department;
//   }
//   getEmployeeDetails() {
//     return {
//       ...this.getDetails(),
//       salary: this.salary,
//      department: this.department
//     }
//   }
// }
// const employee = new Employee(
//   5000,
//   'developer',
//   'Bob',
//   45,
//   'male',
//   'bob@hmail.com'
// );

// console.log(employee.getEmployeeDetails());
