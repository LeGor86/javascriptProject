var let = prompt('Сколько тебе лет:');
console.log(let);
if (let >= 18 && let <= 25)
    alert('Ты можеш учавствовать');
else if (let = NaN)
    alert('Введи заново');
else
    alert('Ты НЕ можеш учавствовать');

/*
switch (let) {
    case 25:
        alert('Ты можеш учавствовать');
        break;
    
    case 18:
        alert('Ты НЕ можеш учавствовать');
        break;
}
*/