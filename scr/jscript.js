/*
var people = ["Tom", "Alice", "Bob", "Sam", 'Hardy', 'huyardy'];
for(var i in people){
    console.log(people[i]);
    document.write(people[i] + '</br>');
}
*/
var let = prompt('Сколько тебе лет (допускаются участники от 18 до 25 лет):');
console.log(let);

if (let >= 18 && let <= 25)
    alert('Ты можеш учавствовать');

else if (isNaN(let) != false)
    alert('Некорректное значение, введи заново');

else if (let == null || let == 0)
    alert('не пойдет, надо ответить!');

else
    alert('Ты НЕ можеш учавствовать');
