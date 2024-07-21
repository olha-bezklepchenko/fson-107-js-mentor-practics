//! module 9
// Створіть функцію, яка буде додавати данні в localStorage.

export function addDataToLocalStorage(key, value) {
  try {
    const normalizedData = JSON.stringify(value);
    localStorage.setItem(key, normalizedData);
  } catch (error) {
    console.error("Set state error:", error.message);
  }
}
addDataToLocalStorage("test", 10);
addDataToLocalStorage("data", [{ username: "Mango" }]);

// Створіть функцію, яка буде отримувати данні з localStorage.

export function getDataFromLocalStorage(key) {
  try {
    const normalizedData = localStorage.getItem(key);
    return normalizedData === null ? undefined : JSON.parse(normalizedData);
  } catch (error) {
    console.error("Get state error:", error.message);
  }
}

console.log(getDataFromLocalStorage("test"));
console.log(getDataFromLocalStorage("data"));
// Створіть функцію, яка буде видаляти всі значення з localStorage по ключу.

function removeDataFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Remove item error:", error.message);
  }
}

removeDataFromLocalStorage("test");
console.log(getDataFromLocalStorage("test"));

// Створіть функцію, яка буде видаляти всі значення з localStorage.

function removeAllDataFromLocalStorage() {
  localStorage.clear();
}

// removeAllDataFromLocalStorage();
// Створіть функцію, яка буде повертати кількість елементів в localStorage
console.log(localStorage);

function countLocalStorageKeys() {
  return localStorage.length;
}

console.log(countLocalStorageKeys());

// Створіть функцію, яка буде повертати масив ключів з localStorage

function makeArrayLSKeys() {
  const keysLS = Object.keys(localStorage);
  return keysLS;
}

console.log(makeArrayLSKeys());
