/* Задание 6
Напиши скрипт со следующим функционалом:
9:53
При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и 
добавляется в массив чисел numbers.
Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel 
в prompt.
После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех 
элементов массива и записать ее в переменную total. Используй цикл for или for...of. После чего в консоль выведи 
строку 'Общая сумма чисел равна [сумма]'.
 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. 
 Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
 
const numbers = [];
let total = 0; */

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (input === null) break;

  input = Number(input);

  if (Number.isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
  }
}

if (numbers.length > 0) {
  for (const number of numbers) {
    total += number;
  }
  alert(`Общая сумма чисел равна ${total}`);
}