//! function types 


// function nameF (){
//     if (true) {
        
//     }
//    return true
//    if (true) {
        
//    }
// }

// nameF()



//! 1 Function Declaration 

// console.log(plus(1,1));

// function plus(a, b) {
//     return a + b
// }

// console.log(plus(1,1));


//! ////////////////////////// 

// console.log(plus(1,1));

// //! параметрами фун a,b
// function plus(a, b) {
//     return a + b
// }

// // ! аргументами 1,1
// console.log(plus(1,1));

//! arguments  //////////////////////////

// function suma(){
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum =  sum + arguments[i] 
//     }
//     console.log(arguments.length);
//     console.log(arguments[0]);
//     console.log(sum);
// }
// suma(1,2,3)
// suma(1)
// suma(1,2,3,54,7,87,87,87,789,76,7,1,2,3,54,7,87,87,87,789,76,7)


// ? 1 Вспливання
// ? 2 arguments

//! 2 Function Expression

// say()
// const say = function() {
//     console.log('hello');
//     console.log(arguments);
// }
// say()

//! 3 Arrow Function стрілкові функції
// plus(1,2)

// const plus = (a, b) => {
//     console.log(a + b);
// }

// plus(1,2)
// ....................................

// const arg = () => {
//     console.log(arguments);
// }


// arg(1,2,3,43,5,6,7)


//! скорочення

// const test = () => {
//     console.log('hello');
// }


// const test2 = (a, b) => {
//     return a + b
// }

// const test3 = (a, b) => a + b

// const test4 = a => a + 3.14


//! 4 IIFE 

// (function(name){
//     console.log(`Welcome ${name}!`)
// })('Robert');

// (function(name){
//     console.log(`Welcome ${name}!`)
// }('Robert'));


// const iife = (function(name){
//     console.log(`hello ${name}`);
// })('Robert');

// iife()




//! ///////////////////////////////
//! Рекурсивні функції (recursive functions)

// console.log('test');

// function test() {
//     console.log('test');
//     test()
// }

// test()

// let num = 0
// function test(){
//     num++
//     console.log(num);
//     if (num === 1000) {
//        return 
//     }
//     test()
// }
// test()


// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorial(number) {
    console.log(number);
    if(number === 0){
        return 1
    } else {
        return number * factorial(number - 1)
    }
}

console.log(factorial(5));



if(num.l === 1 ){
    '0' + num
}


const test = Math.floor(1000 / 3600)


