// Создайте новую страницу и подключите к ней javascript файл.
//     Создайте три объекта для хранения информации об автомобилях:
//     Первый объект называется mercedes, содержит свойства:
//     name - Mercedes, model - GL450, engine - 4.0, year - 2015, color - black, hp - 300, forSale - true.
//     Второй объект называется bmw, содержит свойства:
//     name - BMW, model - X6, engine - 3.0, year - 2018, color - white, hp - 313, forSale - false.
//     Третий объект называется audi, содержит свойства:
//     name - Audi, model - Q7, engine - 3.0, year - 2021, color - blue, hp - 249, forSale - true.

let mercedes = {
    name: 'Mercedes', model: 'GL450', engine: 4.0, year: 2015, color: 'black', hp: 300, forSale: true
};
let bmw = {
    name: 'BMW', model: 'X6', engine: 3.0, year: 2018, color: 'white', hp: 313, forSale: false
};
let audi = {
    name: 'Audi', model: 'Q7', engine: 3.0, year: 2021, color: 'blue', hp: 249, forSale: true
};

// Часть 1
// 1. Создайте переменную year и поместите в нее текущий год.
// 2. Сделайте три операции: добавьте в каждый объект свойство carAge,
// которое будет содержать возраст этого автомобиля. Вычислить его нужно программно, при помощи переменной year.
// 3. Создайте переменную с названием names,
// в которой будут находиться названия автомобилей и их модели через запятую в одну строку
// (на основе свойств созданных объектов, путем соединения строк).
// 4. Создайте переменную с названием averageAge,
// в которой будет просчитываться среднее арифметическое возрастов всех 3 автомобилей.
// 5. Создайте переменную atLeastOneForSale,
// в которую будет помещаться результат логического значения для вопроса
// “Хотя бы один автомобиль продаётся?”,
// 6. Создайте переменную allYoungerThanFive,
// в которую будет помещаться результат логического значения для вопроса
// “Все авто младше 5 лет?”
// 7. Создайте переменную atLeastOneHasLittleHp, в которую будет помещаться результат логического значения
// для вопроса “Хоть один автомобиль имеет менее 250 лошадиных сил?”

// Выведите каждую из переменных в alert в читаемом виде, по следующему шаблону alert(‘вопрос - ’ + variable);,
// чтобы результат был такой “Марка и модель всех авто - Mercedes GL450, BMW X6, Audi Q7”.

let numberOfCars = 3;
let currentYear = 2024;
const controlAge = 5;
let controlPower = 250;
let atLeastOneForSale = false;
let allYoungerThanFive = true;
let atLeastOneHasLittleHp = false;

mercedes.carAge = currentYear - mercedes.year;
bmw.carAge = currentYear - bmw.year;
audi.carAge = currentYear - audi.year;

let names = mercedes.name + ' ' + mercedes.model + ', ' + bmw.name + ' ' + bmw.model + ', ' + audi.name + ' ' + audi.model;
alert('Название автомобилей - ' + names);

let averageAge = mercedes.carAge + bmw.carAge + audi.carAge / numberOfCars;
alert('Средний возраст автомобилей - ' + averageAge);

if (mercedes.forSale || bmw.forSale || audi.forSale) {
    atLeastOneForSale = true;
}
alert('Хотя бы один автомобиль продаётся? - ' + (atLeastOneForSale ? 'Да' : 'Нет'));

if (mercedes.carAge > controlAge || bmw.carAge > controlAge || audi.carAge > controlAge) {
    allYoungerThanFive = false;
}
alert('Все авто младше 5 лет? - ' + (allYoungerThanFive ? 'Да' : 'Нет'));

if (mercedes.hp < controlPower || bmw.hp < controlPower || audi.hp < controlPower) {
    atLeastOneHasLittleHp = true;
}
alert('Хоть один автомобиль имеет менее 250 лошадиных сил? - ' + (atLeastOneHasLittleHp ? 'Да' : 'Нет'));

// 1. Создайте переменную car. Поместите в нее любой из созданных выше объектов авто
// 2. Если автомобиль имеет название Mercedes и модель его GL450 выведите сообщение на экран -
// “Мой любимый мерседес!”, в противном случае (если в объекте марка и модель другие) выведите на экран
// “Это - ” + название и марка автомобиля из объекта автомобиля. К примеру, если в car мы поместим объект bmw,
// на экран должно быть выведено «Это - BMW X6».
// 3. Если автомобиль новый (0 лет), то выводим сообщение “Новый автомобиль”,
// в противном случае если автомобилю до 3 лет (включительно), выводим сообщение “Свежий автомобиль”,
// в противном случае выводим следующее сообщение “Лет этому авто: ” + количество лет данному авто,
// чтобы сообщение было такое “Лет этому авто: 6” (если автомобилю в объекте 6 лет);
// 4. Создайте переменную var consumption в которую с помощью тернарного оператора будет присваиваться
// одно из следующих значений:
//     - “Прожорливый автомобиль”, если объем двигателя более 3.0
// - “Экономичный автомобиль”, если объем двигателя менее или равен 3.0
// и выведите эту переменную через alert после того, как ей будет присвоено значение.
// 5. Создайте новую переменную russianColor, в которую в зависимости от цвета автомобиля
// (свойства color в объекте car) будет присваиваться соответствующий цвет на русском языке:
//     - black - черный
//     - silver - серебристый
//     - red - красный
//     - white - белый
//     - gray - серый
//     - blue - синий
// В противном случае в переменную russianColor должен разместиться текст - Невозможно определить цвет автомобиля.
//     6. Поменяйте объект в переменной car и проверьте правильность работы кода.


let car = bmw;

if (car.name === 'Mercedes' && car.model === 'GL450') {
    alert('Мой любимый мерседес!');
} else {
    alert('Это - ' + car.name + ' ' + car.model);
}

if (car.carAge === 0) {
    alert('Новый автомобиль');
} else if (car.carAge <= 3) {
    alert('Свежий автомобиль');
} else {
    alert('Лет этому авто: ' + car.carAge);
}

var consumption = car.engine > 3 ? 'Прожорливый автомобиль' : 'Экономичный автомобиль';
alert(consumption);

let russianColor;

switch (car.color) {
    case 'black':
        russianColor = 'черный';
        break;
    case 'silver':
        russianColor = 'серебристый';
        break;
    case 'red':
        russianColor = 'красный';
        break;
    case 'white':
        russianColor = 'белый';
        break;
    case 'gray':
        russianColor = 'серый';
        break;
    case 'blue':
        russianColor = 'синий';
        break;
    default:
        russianColor = 'Невозможно определить цвет автомобиля.';
        break;
}

alert('Цвет автомобиля - ' + russianColor);