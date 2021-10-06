//Task 1
let user = {}; // создаем объкт
user.name = `John`; // добавляем свойство name со значением John
user.surname = `Smith`; 
user.name = `Pete`; // изменяем значение свойства name на Pete
delete user.name; // удаляем свойство name из объекта
console.log(user); // выводим в консоль результат.

//Task 2
//Можно ли изменить объект, объявленный с помощью const? 
// const user = {
//     name: `John`
// }; НАЗВАНИЕ ПЕРЕМЕННОЙ (user) В  СЛУЧАЕ const МЕНЯТЬ НЕЛЬЗЯ, А ТО ЧТО НАХОДИТСЯ В САМОМ ОБЪЕКТЕ МОЖНО.
// user.name = `Pete`; это будет работать? - ДА, свойства и значения можно менять.

//Task 3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let sum = salaries.John + salaries.Ann + salaries.Pete;
alert(sum);