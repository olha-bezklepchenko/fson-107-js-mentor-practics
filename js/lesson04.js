//TODO:=========task-01=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const bodyEl = document.querySelector("body");
const boxes = 150;
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const divContainer = document.createElement("div");
// console.log(divContainer);
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

// console.log(divContainer);

// bodyEl.after(divContainer);
// bodyEl.before(divContainer);
// bodyEl.append(divContainer);
bodyEl.prepend(divContainer);

// bodyEl.insertAdjacentElement("afterbegin", divContainer);

//TODO:=========task-02=================
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const films = [
	{
		title: "Tetris",
		imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
		id: "film_1",
	},
	{
		title: "Avatar: The Way of Water",
		imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
		id: "film_2",
	},
	{
		title: "Operation Fortune: Ruse de guerre",
		imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
		id: "film_3",
	},
	{
		title: "Babylon",
		imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
		id: "film_4",
	},
	{
		title: "The Whale",
		imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
		id: "film_5",
	},
];
const filmList = document.querySelector(".js-film-list");
function createMarkup(array) {
	return array
		.map(
			(film) => `<li id="${film.id}">
     <img src="${film.imgUrl}" alt="${film.title}" />
     <p>${film.title}</p>
</li>
    `,
		)
		.join();
}

filmList.innerHTML = createMarkup(films);
// Приклад елементу списку
{
	/* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

//TODO:=========task-03=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`*/

// const formElement = document.querySelector(".js-contact-form");

// const onInput = (event) => {
//   const input = event.target;

//   if( input.value.trim().length > 6)  {
//     input.classList.add("success")
//     input.classList.remove("error")
//   } else {
//     input.classList.add("error")
//     input.classList.remove("success")
//   }
// }

// formElement.addEventListener("input", onInput)

// ** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// const inputEl = document.querySelector(".js-username-input");

// inputEl.addEventListener("focus", handleFocus);

// function handleFocus(event) {
//   const input = event.target;

//   if (input.value.trim().length === 0) {
//     input.style.outline = "3px solid red";
//   } else {
//     input.style.outline = "3px solid green";
//   }
// }

// ** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// inputEl.addEventListener("blur", handleBlur);

// function handleBlur(event) {
//   const input = event.target;

//   if (input.value.trim().length < 3) {
//     input.style.outline = "3px solid red";
//   } else {
//     input.style.outline = "3px solid lime";
//   }
// }

// const formEl = document.querySelector(".js-contact-form");

// formEl.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();

// const input = event.target.elements.userName;
// console.log(input);

// const checkbox = event.target.elements.accept.checked;
// console.log(checkbox);

// const { userName, accept } = event.target.elements;

// if (!userName.value.trim() || !accept.checked) {
//   return alert("Fields is empty");
// }

// console.log({
//   userName: userName.value.trim(),
// });

// event.target.reset();
// }

const modalBtn = document.querySelector(".js-btn-modal");

const onClick = () => {
	const modal = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

	modal.show();
};

modalBtn.addEventListener("click", onClick);
