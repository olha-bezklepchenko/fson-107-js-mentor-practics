//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const bodyEl = document.querySelector("body");
const boxes = 150;
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const divContainer = document.createElement("div");
console.log(divContainer);
divContainer.classList.add("number-container");

for (let i = 0; i < boxes; i++) {
  const box = document.createElement("div");
  box.classList.add("number");
  box.textContent = randomNumber();
  box.textContent % 2 === 0
    ? box.classList.add("even")
    : box.classList.add("odd");

  divContainer.appendChild(box);
}

console.log(divContainer);

// bodyEl.after(divContainer);
// bodyEl.before(divContainer);
// bodyEl.append(divContainer);
bodyEl.prepend(divContainer);

// bodyEl.insertAdjacentElement("afterbegin", divContainer);
