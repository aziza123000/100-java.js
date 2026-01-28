// // // Лёгкие (1–50)

// // // Введи имя. Если имя пустое — “Пусто”.
// let i = prompt("");
// if (i === "" || i === null) {
//   console.log("Пусто");
// }

// // // Введи число. Если оно больше 50 — “Большое”.
// i = +prompt();
// if (i > 50) {
//   console.log("Большое");
// }

// // // Введи число. Если меньше 0 — “Минус”.
// i = +prompt();
// if (i < 0) {
//   console.log("Минус");
// }

// // // Введи строку. Если длина > 3 — “Ок”.
// i = prompt();
// if (i.length > 3) {
//   console.log("Ок");
// }

// // // Введи строку. Если есть пробел — “Есть пробел”.
// i = prompt();
// if (i.includes(" ")) {
//   console.log("Есть пробел");
// }

// // // Введи число. Если чётное — “Чёт”.
// i = +prompt();
// if (i % 2 === 0) {
//   console.log("Чёт");
// }

// // // Введи число. Если нечётное — “Нечёт”.
// i = +prompt();
// if (i % 2 !== 0) {
//   console.log("Нечёт");
// }

// // // Введи слово. Если начинается с b — “B”.
// i = prompt();
// if (i.startsWith("b") || i.startsWith("B")) {
//   console.log("B");
// }

// // // Введи строку. Если заканчивается на ? — “Вопрос”.
// i = prompt();
// if (i.endsWith("?")) {
//   console.log("Вопрос");
// }

// // // Введи email. Если есть @gmail — “Gmail”.
// i = prompt();
// if (i.includes("@gmail")) {
//   console.log("Gmail");
// }

// // // Введи возраст. Если ≥ 60 — “Пенсионер”.
// i = +prompt();
// if (i >= 60) {
//   console.log("Пенсионер");
// }

// // // Введи число. Если равно 100 — “Сотка”.
// i = +prompt();
// if (i === 100) {
//   console.log("Сотка");
// }

// // // Введи строку. Если вся строка в верхнем регистре — “BIG”.
// i = prompt();
// if (i === i.toUpperCase() && i !== "") {
//   console.log("BIG");
// }

// // // Введи строку. Если длина = 5 — “Пять”.
// i = prompt();
// if (i.length === 5) {
//   console.log("Пять");
// }

// // // Введи слово. Если все буквы маленькие — “lower”.
// i = prompt();
// if (i === i.toLowerCase() && i !== "") {
//   console.log("lower");
// }

// // // Введи символ. Если это * — “Звезда”.
// i = prompt();
// if (i === "*") {
//   console.log("Звезда");
// }

// // // Введи число. Если делится на 10 — “Кратно 10”.
// i = +prompt();
// if (i % 10 === 0) {
//   console.log("Кратно 10");
// }

// // // Введи строку. Если есть . — “Точка”.
// i = prompt();
// if (i.includes(".")) {
//   console.log("Точка");
// }

// // // Введи строку. Если первая буква маленькая — “Маленькая”.
// i = prompt();
// if (i[0] === i[0].toLowerCase()) {
//   console.log("Маленькая");
// }

// // // Введи число. Если больше 1000 — “Очень большое”.
// i = +prompt();
// if (i > 1000) {
//   console.log("Очень большое");
// }

// // // Введи два числа. Если второе больше — “Второе”.
// let a = +prompt();
// let b = +prompt();
// if (b > a) {
//   console.log("Второе");
// }

// // // Введи строку. Если есть js — “JS”.
// i = prompt();
// if (i.includes("js")) {
//   console.log("JS");
// }

// // // Введи строку. Если есть css — “CSS”.
// i = prompt();
// if (i.includes("css")) {
//   console.log("CSS");
// }

// // // Введи строку. Если есть html — “HTML”.
// i = prompt();
// if (i.includes("html")) {
//   console.log("HTML");
// }

// // // Введи число. Если отрицательное — “Минус”.
// i = +prompt();
// if (i < 0) {
//   console.log("Минус");
// }

// // // Введи строку. Если длина < 2 — “Слишком коротко”.
// i = prompt();
// if (i.length < 2) {
//   console.log("Слишком коротко");
// }

// // // Введи слово. Если начинается и заканчивается одной буквой — “Совпало”.
// i = prompt();
// if (i[0] === i[i.length - 1]) {
//   console.log("Совпало");
// }

// // // Введи строку. Если есть ! — “Эмоции”.
// i = prompt();
// if (i.includes("!")) {
//   console.log("Эмоции");
// }

// // // Введи число. Если равно 7 — “Семь”.
// i = +prompt();
// if (i === 7) {
//   console.log("Семь");
// }

// // // Введи строку. Если содержит , — “Запятая”.
// i = prompt();
// if (i.includes(",")) {
//   console.log("Запятая");
// }

// // // Введи число. Если делится на 2 и 3 — “6”.
// i = +prompt();
// if (i % 2 === 0 && i % 3 === 0) {
//   console.log("6");
// }

// // // Введи строку. Если есть # — “Хеш”.
// i = prompt();
// if (i.includes("#")) {
//   console.log("Хеш");
// }

// // // Введи строку. Если длина > 10 — “Длинная”.
// i = prompt();
// if (i.length > 10) {
//   console.log("Длинная");
// }

// // // Введи число. Если < 5 — “Маленькое”.
// i = +prompt();
// if (i < 5) {
//   console.log("Маленькое");
// }

// // // Введи строку. Если есть @ — “Есть собака”.
// i = prompt();
// if (i.includes("@")) {
//   console.log("Есть собака");
// }

// // // Введи строку. Если начинается с цифры — “Цифра”.
// i = prompt();
// if (i[0] >= "0" && i[0] <= "9") {
//   console.log("Цифра");
// }

// // // Введи строку. Если заканчивается на . — “Точка в конце”.
// i = prompt();
// if (i.endsWith(".")) {
//   console.log("Точка в конце");
// }

// // // Средние (51–80)



// // // Введи строку. Если нет пробелов — “Одно слово”.
// i = prompt();
// if (!i.includes(" ")) {
//   console.log("Одно слово");
// }

// // // Введи число. Если делится на 3 — “Fizz”.
// i = +prompt();
// if (i % 3 === 0) {
//   console.log("Fizz");
// }

// // // Введи число. Если делится на 5 — “Buzz”.
// i = +prompt();
// if (i % 5 === 0) {
//   console.log("Buzz");
// }

// // // Введи число. Если делится на 3 и 5 — “FizzBuzz”.
// i = +prompt();
// if (i % 3 === 0 && i % 5 === 0) {
//   console.log("FizzBuzz");
// }

// // // Введи строку. Если начинается с http — “Ссылка”.
// i = prompt();
// if (i.startsWith("http")) {
//   console.log("Ссылка");
// }

// // // Введи строку. Если содержит @ и . — “Похоже на email”.
// i = prompt();
// if (i.includes("@") && i.includes(".")) {
//   console.log("Похоже на email");
// }

// // // Введи слово. Если длина чётная — “Чётная длина”.
// i = prompt();
// if (i.length % 2 === 0) {
//   console.log("Чётная длина");
// }

// // // Введи строку. Если первая и последняя буквы разные — “Разные”.
// i = prompt();
// if (i[0] !== i[i.length - 1]) {
//   console.log("Разные");
// }

// // // Введи число. Если между 10 и 20 — “В диапазоне”.
// i = +prompt();
// if (i >= 10 && i <= 20) {
//   console.log("В диапазоне");
// }

// // // Введи строку. Если есть слово js (в любом регистре) — “JS”.
// i = prompt().toLowerCase();
// if (i.includes("js")) {
//   console.log("JS");
// }

// // // Введи строку. Если больше 1 слова — “Несколько слов”.
// i = prompt();
// if (i.includes(" ")) {
//   console.log("Несколько слов");
// }

// // // Введи число. Если положительное и чётное — “+Чёт”.
// i = +prompt();
// if (i > 0 && i % 2 === 0) {
//   console.log("+Чёт");
// }

// // // Введи строку. Если содержит ? и ! — “Эмоциональный вопрос”.
// i = prompt();
// if (i.includes("?") && i.includes("!")) {
//   console.log("Эмоциональный вопрос");
// }

// // // Введи пароль. Если длина ≥ 8 — “Норм”.
// i = prompt();
// if (i.length >= 8) {
//   console.log("Норм");
// }

// // // Введи строку. Если все символы — буквы — “Только буквы”.
// i = prompt();
// if (i.toLowerCase() !== i.toUpperCase()) {
//   console.log("Только буквы");
// }

// // // Введи число. Если квадрат > 100 — “Большой квадрат”.
// i = +prompt();
// if (i * i > 100) {
//   console.log("Большой квадрат");
// }

// // // Введи строку. Если начинается с большой буквы — “С заглавной”.
// i = prompt();
// if (i[0] === i[0].toUpperCase()) {
//   console.log("С заглавной");
// }

// // // Введи строку. Если заканчивается на ! или ? — “Знак”.
// i = prompt();
// if (i.endsWith("!") || i.endsWith("?")) {
//   console.log("Знак");
// }

// // // Сложные (81–110)

// // // Введи строку. Если есть и буквы и цифры — “Буквы+цифры”.
// let i = prompt();
// let hasLetter = false;
// let hasDigit = false;

// for (let c of i) {
//   if (c >= "0" && c <= "9") hasDigit = true;
//   if (c.toLowerCase() !== c.toUpperCase()) hasLetter = true;
// }
// if (hasLetter && hasDigit) {
//   console.log("Буквы+цифры");
// }

// // // Введи строку. Если палиндром — “Палиндром”.
// i = prompt();
// let reversed = i.split("").reverse().join("");
// if (i === reversed) {
//   console.log("Палиндром");
// }

// // // Введи число. Если простое — “Простое”.
// i = +prompt();
// let prime = i > 1;
// for (let j = 2; j < i; j++) {
//   if (i % j === 0) {
//     prime = false;
//     break;
//   }
// }
// if (prime) {
//   console.log("Простое");
// }

// // // Введи строку. Если больше гласных чем согласных — “Гласных больше”.
// i = prompt().toLowerCase();
// let vowels = 0;
// let consonants = 0;

// for (let c of i) {
//   if ("aeiouаеёиоуыэюя".includes(c)) vowels++;
//   else if (c.toLowerCase() !== c.toUpperCase()) consonants++;
// }
// if (vowels > consonants) {
//   console.log("Гласных больше");
// }

// // // Введи строку. Если есть повторяющиеся символы — “Повторы”.
// i = prompt();
// let seen = "";
// let repeat = false;

// for (let c of i) {
//   if (seen.includes(c)) {
//     repeat = true;
//     break;
//   }
//   seen += c;
// }
// if (repeat) {
//   console.log("Повторы");
// }

// // // Введи число. Если степень двойки — “2^n”.
// i = +prompt();
// let temp = i;
// while (temp > 1 && temp % 2 === 0) {
//   temp /= 2;
// }
// if (temp === 1) {
//   console.log("2^n");
// }

// // // Введи строку. Если каждое слово с заглавной — “Title Case”.
// i = prompt();
// let words = i.split(" ");
// let ok = true;

// for (let w of words) {
//   if (w[0] !== w[0].toUpperCase()) {
//     ok = false;
//     break;
//   }
// }
// if (ok) {
//   console.log("Title Case");
// }

// // // Введи число. Если сумма цифр > 20 — “Большая сумма”.
// i = prompt();
// let sum = 0;
// for (let c of i) {
//   if (c >= "0" && c <= "9") sum += +c;
// }
// if (sum > 20) {
//   console.log("Большая сумма");
// }

// // // Введи строку. Если больше 3 слов — “Длинное предложение”.
// i = prompt();
// if (i.split(" ").length > 3) {
//   console.log("Длинное предложение");
// }

// // // Введи строку. Если есть только цифры — “Только цифры”.
// i = prompt();
// let onlyDigits = true;
// for (let c of i) {
//   if (c < "0" || c > "9") {
//     onlyDigits = false;
//     break;
//   }
// }
// if (onlyDigits && i !== "") {
//   console.log("Только цифры");
// }

// // // Введи число. Если идеальное (6, 28) — “Идеальное”.
// i = +prompt();
// let s = 0;
// for (let j = 1; j < i; j++) {
//   if (i % j === 0) s += j;
// }
// if (s === i) {
//   console.log("Идеальное");
// }

// // // Введи строку. Если чередуются буква-цифра — “Чередование”.
// i = prompt();
// let alt = true;
// for (let j = 1; j < i.length; j++) {
//   let a = i[j - 1], b = i[j];
//   if (
//     (a >= "0" && a <= "9") === (b >= "0" && b <= "9")
//   ) {
//     alt = false;
//     break;
//   }
// }
// if (alt) {
//   console.log("Чередование");
// }

// // // Введи строку. Если все слова разной длины — “Разные длины”.
// i = prompt();
// words = i.split(" ");
// let lengths = "";

// for (let w of words) {
//   if (lengths.includes(w.length + ",")) {
//     ok = false;
//     break;
//   }
//   lengths += w.length + ",";
// }
// if (ok) {
//   console.log("Разные длины");
// }