//! Типи змінних або констант

// var a = 1
// let b = 2
// const c = 3

//?1 константа не змінна 
// const number = 123
// console.log(number);
// number = 999 //error

//?2 let змінна
// let bg = '#fff'
// console.log(bg);

// bg = '#000'
// console.log(bg);

// bg = '#ccc'
// console.log(bg);

//?3 var це змінна з всплиттям 
//! не використовувати
// console.log(name);
// var name = 'Robert'

//! блочна зона видимості
// if(true){
//     const test = 'test'
// }
// console.log(test);//error
////////////////////////////////////////////////////////////////////////////////////////////

//! типи даних

//!1 number - це числа

const age = 20
const year = 2000

console.log('Age =', age);
console.log(typeof age);

console.log('year =', year);
console.log(typeof year);

//! 2 string - всі символи

const firstName = "Bill"
const lastName = 'Black'
const email = `admin@gmail.com`

const sum = '1234567890-!@#$%^&*(_)QWERTYUIqwerty'
console.log(sum);

console.log(firstName);
console.log(lastName);
console.log(email);

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof email);

//! boolean - true  false

let isActivate = false
console.log(isActivate);

isActivate = true
console.log(isActivate);

console.log(typeof isActivate);

//! undefined - це коли нічого не визначено

let any
console.log(any);
console.log(typeof any);

any = 'test'
console.log(any);

const test = undefined

//! null - це коли нічого не має

const port = null
const localhost = null

console.log(port);
console.log(localhost);

// ////////////////////////////////////////////////////////
const a = 15
const b = 3
const c = 23


let suma = 0
console.log('✌️suma --->', suma);


suma = a + b
console.log('✌️suma + --->', suma);

suma = c - b
console.log('✌️suma - --->', suma);

suma = a * b
console.log('✌️suma * --->', suma);

suma = a / b
console.log('✌️suma / --->', suma);

suma = (a + b) * c
console.log('✌️suma () --->', suma);

// .....................a........

console.log(7 % 2);

// ////////////////////////////////////////////

// alert('hello JS!!!')
// prompt('your name is')

// const name = prompt('your name is')
// console.log('✌️name --->', name);


// const num1 = +prompt('Enter 1 num.')
// const num2 = +prompt('Enter 2 num.')
// alert(num1 + num2)