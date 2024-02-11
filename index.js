//1
var x = 20;
var y = 58;
var z = 42;
var result = x + y + z;
console.log(result);

//2
var secondsInMinute = 60;
var minutesInHour = 60;
var hoursInDay = 24;
var daysInYear = 365;

var myAgeInYears = 18; //мой возраст

var myAgeInSeconds = myAgeInYears * secondsInMinute * minutesInHour * hoursInDay * daysInYear;
console.log(myAgeInSeconds);

//3

// Преобразуем count в строку и userName в число (1 способ)
var count = 42;
var userName = '42';

var countToString = String(count);
var userNameTONumber = +userName;

console.log(countToString); // '42'
console.log(userNameTONumber); // 42

// Преобразуем count в строку и userName в число (2 способ)

var count = 42;
var userName = '42';

var countToString = count.toString();
var userNameToNumber = Number(userName);

console.log(countToString); // '42'
console.log(userNameToNumber); // 42

//4
var a = 1;
var b = 2;
var c = 'белых медведей';

var result = a.toString() + b.toString() + ' ' + c;

console.log(result); // '12 белых медведей'

//5
var num = 8;
var str = 'Hello,world';
var bool = true;

console.log('Variable: num have type: ' + typeof num);
console.log('Variable: str have type: ' + typeof str);
console.log('Variable: bool have type: ' + typeof bool);

//6

var Name = prompt('Введите ваше имя:');
var age = prompt('Введите ваш возраст:');
age = Number(age); // Преобразуем возраст в число

console.log(`Имя пользователя: ${Name}`); 
console.log(`Возраст пользователя: ${age}`);


//7
var a = 4;
var b = 3;

a = a + b; //a = 7
b = a - b;//7-3= b 4
a = a - b;// 7-4 = a 3

console.log(`a: ${a}`);
console.log(`b: ${b}`);

//8
var str = 'true';
var bool = false;
var num = 17;
var undef = undefined;
var nul = null;

console.log(typeof str);
console.log(typeof bool);
console.log(typeof num);
console.log(typeof undef);
console.log(typeof nul);

//9

var height = 15;
var width = 20;

if (height > width) {
    console.log(`Наибольшее число: ${height}`);
} else if (width > height) {
    console.log(`Наибольшее число: ${width}`);
} else {
    console.log('Числа равны');
}

//10 // обьяснить??

for (var i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        console.log(i); 
    }
}

//11

var key = true;
var documents = true;
var pen = true;
var apple = false;
var orange = true;

var shouldGoToWork = (key && documents && pen) && (apple || orange);
console.log(shouldGoToWork);

//12//

//13

var age = prompt('Введите ваш возраст:');
age = Number(age);


if (age > 18) {
    alert('Попей пивка');
} else if (age >= 16 && age <= 18) {
    alert('Можешь выкурить сигаретку, только маме не говори');
} else {
    alert('Пей колу');
}

//14
var travel = prompt('В какую сторону света Вы хотели бы отправиться? (юг, север, запад, восток)');

switch (travel) {
    case 'юг':
        console.log('На юг пойдешь - счастье найдешь');
        break;
    case 'север':
        console.log('На север пойдешь - много денег найдешь');
        break;
    case 'запад':
        console.log('На запад пойдешь - верного друга найдешь');
        break;
    case 'восток':
        console.log('На восток пойдешь - разработчиком станешь');
        break;
    default:
        console.log('Вы ввели неверные данные, попробуйте еще раз');
}
//______________typeof 1n // "bigint" typeof {} // "object" -обьяснить 
//повторить цикл for 

//1 
/*
function имя(параметры) {
    ...тело...
}*/

function getSum(num) {
    var sum = 0;
    
    for(var i = 0; i <= num; i++) {// начинаем цикл от 0 до числа которое нам нужно включительно
    sum += i; // добавляем  значение i к сумме при каждой итерации

    }
    
    return sum; //возвращаем общую сумму
    }
    
    console.log(getSum(100));  // вызываем функцию getSum с параметром 100 и выводим результат в консоль, должно быть 5050

    //2//

    //3//

    //4//
    



