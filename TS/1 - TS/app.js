"use strict";
//! Змінні і константи типізовані
let message = 'Hello, TS!';
let count = 10;
let like = true;
let nullavleValue = null;
let undefinedValue = undefined;
// message = 123
// count = '10'
// like = null
//! any - будь який тип
let anyValue = 'Hello';
anyValue = 1;
anyValue = null;
anyValue = true;
//! Визначення функцій з типами параметрів і з типом return
function add(a, b) {
    return a + b;
}
// add('10', 10)//error
// const suma: string = add(5, 10)//error
add(2, 5);
let result = add(5, 7);
//! Визнчення масивів з типами
const numvers = [1, 2, 3, 4, 5, 6];
const typleValue = [2025, 'STEP', true];
//! Обєкти типізовані
const person = {
    name: 'Jon',
    age: 20
};
//! class з властивостями і методами
class Animal {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello, I'm ${this.name}!`);
    }
}
const cat = new Animal('Myrka');
cat.sayHello();
const user = {
    name: 'Alex',
    age: 30,
    email: 'admin@gmail.com',
    // test: 34 error
};
//! Використанні умовних операторів та ціклів
const x = 5;
if (x > 0) {
    console.log('x +++');
}
else if (x < 0) {
    console.log('x ---');
}
else {
    console.log('x === 0');
}
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//! модифікатори доступу в class
class Car {
    //доступний в середені і в дочірніх класах не доступний зовні
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
    }
}
class SportsCar extends Car {
    constructor(brand) {
        super(brand);
    }
    accelerate(amount) {
        if (amount > 50) {
            console.log('занадто велике прискорення!');
        }
        else {
            super.accelerate(amount);
        }
    }
}
const ferrari = new SportsCar('Ferrari');
ferrari.accelerate(100);
