
function xProverka() {
var let = prompt('Сколько тебе лет (допускаются участники от 18 до 25 лет):');
console.log(let);

if (let >= 18 && let <= 25){
    alert('Ты можеш учавствовать');
}
else if (isNaN(let)){
    alert('Некорректное значение, введи заново');
    xProverka();
}
else if (let == null || let == 0){
    alert('не пойдет, надо ответить!');
    xProverka();
}
else
    alert('Ты НЕ можеш учавствовать');

}
