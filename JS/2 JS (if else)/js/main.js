//! if else

// let test = 45
// test = 35
// test = 25

//? <
//? >
//? >=
//? <=

// 10 > 20 => false
// 10 < 20 => true
// 10 >= 10 => true
// 11 >= 10 => true
// 11 <= 10 => false

// console.log(11 > 10);
// console.log(11 < 10);

// if (умову){код}
// if (умову === true){код}

// if(10 > 11){
//     console.log('10 > 11');
// }

// if(true){
//     console.log('10 > 11');
// }
// if(false){
//     console.log('10 > 11');
// }


// if(100 > 120){
    //     console.log('test');
    // }
    
    // if (10 > 9) {
        //     console.log('ok');
        // } else {
            //     console.log('no');
            // }
            


// if(20>20){

// } 
// else if(10>29){
    
// }
// else if(10>29){

// }
// else if(10>29){

// }
// else if(10>29){

// }else{

// }



// const number1 = +prompt('Enter 1 namber')
// const number2 = +prompt('Enter 2 namber')

// if(number1 > number2){
//     console.log(`${number1} > ${number2}`)
// }
// else if(number1 < number2){
//     console.log(`${number1} < ${number2}`);
// }
// else {
//     console.log(`${number1} = ${number2}`);
// }

//? == - не сувора рівнісьть
//? === - сувора рівнісьть

// console.log(10 == 10);//true
// console.log('10' == 10);//true
// console.log('11' == 10);//false
// console.log('test' == 10);//false

// console.log(10 === 10);//true
// console.log('10' === 10);//false

// console.log('Robert' === 'Robert');

// const a = '100'
// const b = 100

// if (a == b) {
//     console.log('true');
// }

// if(a === b){
//     console.log('false');
// }



//? && - and => і 
//? || - or  => або

//! and &&
// const a = +prompt(`Enter nameber "A"`)
// const b = +prompt(`Enter nameber "B"`)
// const c = +prompt(`Enter nameber "C"`)

// if(a > b && a > c ){
//     console.log('A > B and A > C');
// }
// else if(b > a && b > c){
//     console.log('B > A and B > C');
// }
// else if(c > a && c > b){
//     console.log('C > A and C > B');
// }
// else if (a === b && b === c && a === c){
//     console.log('A = B = C');
// }


//!|| - or  => або
// const password = prompt('Enter password')
// const confirmPassword = prompt('Enter confirm password')

// if(password.length < 8 || confirmPassword.length < 8){
//     console.error('less then 8');
// }
// else if(password.length > 16 || confirmPassword.length > 16){
//     console.error('More then 16'); 
// }
// else if(password === confirmPassword){
//     console.log('OK');
// }
// else{
//     console.log('Diferent passwords');
// }


// const manthNamber = +prompt('Enter number')

// if(1 === manthNamber || 2 === manthNamber || 12 === manthNamber ){
//     console.log('Winter!');
// }
// else if(3 === manthNamber || 4 === manthNamber || 5 === manthNamber ){
//     console.log('Spring!');
// }
// else if(6 === manthNamber || 7 === manthNamber || 8 === manthNamber ){
//     console.log('Summer!');
// }
// else if(9 === manthNamber || 10 === manthNamber || 11 === manthNamber ){
//     console.log('Fall!');
// }
// else{
//     console.log('Invalid input');
// }

///

// >
// <
// >=
// <=

// ==
// ===

// &&
// ||

// if(){

// }

// if (condition) {
    
// } else {
    
// }

// if (condition) {
    
// } else if() {
    
// } else if() {
    
// } else{

// }

//? тернальний оператор

const age = +prompt('How old are you')

// if(age >= 18){
//     console.log('ok');
// }else{
//     console.log('no');
// }

// умова ? true : false
age >= 18 ? console.log('ok') : console.log('no');