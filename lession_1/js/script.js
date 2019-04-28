/*
    1. задание
*/
console.log('---Задание 1---');

function loop(times = 0, callback = null) {
    if (typeof callback !== 'function')
        return false;

    for(let i = 0; i < times; i++) {
        callback(i);
    }
}

loop(2, function(param) {
    console.log(param)
});


/*
    2. Задание
    будет высчитываться площадь треугольника по формуле
    S = 1/2 * (ah)
    где S - площадь, a - основание, h - высота
*/
console.log('');
console.log('---Задание 2---');

function calculateArea(a = 1, h = 1) {
    if (a > 0 && h > 0) {
        let S = 0.5 * (a * h);
        const obj = { 
            area: S,
            figure: 'triangle',
            input: {
                height: h,
                base: a
            }
        }
        console.log(obj);
        return obj;
    } else if(a == 0 || h == 0) {
        console.log('Значения не могут равняться нулю');
        return false;
    } else if(a < 0 || h < 0) {
        console.log('Значения не могут быть отрицательными');
        return false;
    }
}

calculateArea(1, 1);

/*
    3. задание
*/
console.log('');
console.log('---Задание 3---');
console.log('---3.1. human---');
let human = new Human('Вася', 25, '25.05.2015');
console.log(human.displayInfo());

console.log('---3.2. employee---');
let employee = new Employee(200, 'department');
console.log(employee.displayInfo());

console.log('---3.3. Manager and Developer---');

let manager1 = new Manager('Павел');
let manager2 = new Manager('Семен');

manager1.set('Михаил');
manager1.get();

let dev = new Developer('Эдуард');

manager2.set('Эдуард');
manager2.get();

dev.edit('Семен');
dev.get();
