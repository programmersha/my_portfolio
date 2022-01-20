"use strict";   //работа в современном режиме


console.log(456);
let number = 5; // Число
const borderWidth = 1;
number = 10; // Поменяли число
console.log(number);


{
  var result = 50; 
}
console.log(result);  // для var result выведется в консоль
                      // а для let и const - покажет ошибку.


console.log(4/0); // Infinity, бесконечность

const bool = false; // Булевое значение

const car = 'BMW'; // Строка

let n = 24;
console.log(parseInt("11000", 2));
console.log(n.toString(2));

console.log('stroke' * 9); // NaN, не число.

let und;
console.log(und);  // undefined, создан, но нет значения.

// console.log(something);   // Ошибка. something не создан, его нет.   

let something2 = null; 
console.log(something2);// null нужно задавать, его тип в консоли - object.

const obj = {
  name: "John",
  age: 25,
  isMarried: false
}; // name - ключ свойства, "John" - значение свойства
console.log(obj.name); // вызываем свойство name
// или так: console.log(obj["name"]), первый вариант предпочтительнее;

let arr = ['apple.png', 'plum.jpg' ,number ,'orange.bmp', {}, []]; 
// Массив не отдельный тип данных, а частный случай Объектов. В массив могут входить любые типы данных.
console.log(arr[1]); // выводим второй элемент массива.
// По аналогии с объектом здесь ключом является порядковый номер элемента массива


alert('hello!'); //используется для предупреждения пользователя о чет-то главном

let answer = confirm('Are you here?'); // ислользуется для получения ответа Да(true) или Нет(false)
console.log(answer);

let answer2 = prompt('How old are you?', '21'); // после вопроса делать место для ответа 'placeholder(21)'
console.log(answer2, typeof answer2); // ответ пользователя запишется в тип string

let answer3 = +prompt('How old are you?', '21'); 
// Если перед prompt поставить + , то тип string автоматически превратится в тип number!
console.log(answer3, typeof answer3);

console.log(answer2 + 5, answer3 +5);


const answers = [];
answers[0] = prompt('Как ваше имя?', ' ');
answers[1] = prompt('Как ваша фамилия?', ' ');
answers[2] = prompt('Сколько вам лет?', ' ');
answers[3] = prompt('В какой стране вы живете?', ' ');
console.log(answers);
// document.write(answers);


const category = 'toys';
console.log('https://someurl.com/' + category + '/' + '4'); 
console.log(`https://someurl.com/${category}/4`);
// Интерполяция - чтобы написать короче, в обратных кавычках записываем с использованием знака $.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const user = 'Ivan';
alert (`Привет, ${user}`);
// обратные кавычки.


